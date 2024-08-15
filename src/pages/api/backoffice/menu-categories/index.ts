import { prisma } from "@/libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { it } from "node:test";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let menuCategories = await prisma.menusCategories.findMany();

  if (method === "GET") {
    res.json({ menuCategories });
  } else if (method === "POST") {
    const data = req.body;
    const menuCategory = JSON.parse(data);
    const isValid = menuCategory.name;
    if (!isValid) return res.status(400).send("bad resquest");
    await prisma.menusCategories.create({ data: { name: menuCategory.name } });

    res.end();
  } else {
    res.status(405).send("Invalid method");
  }
}
