import { prisma } from "@/libs/prisma";

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Menu } from "..";

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const id = Number(req.query.id);

  let menus = await prisma.menus.findMany();
  const menuToBeUpdatedOrDetete = await prisma.menus.findFirst({
    where: { id: id },
  });
  if (!menuToBeUpdatedOrDetete) {
    return res.status(404).send("Not Found");
  }

  if (method === "GET") {
    res.json(JSON.stringify(menuToBeUpdatedOrDetete));
  } else if (method === "DELETE") {
    await prisma.menus.delete({ where: { id: menuToBeUpdatedOrDetete.id } });
    res.end();
  }
  res.status(405).send("invalid method");
}
