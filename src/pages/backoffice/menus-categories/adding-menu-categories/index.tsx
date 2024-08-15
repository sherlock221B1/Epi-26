import BackOfficeLayout from "@/components/backOfficeLayouts";
import config from "@/config";
import { Menu } from "@/pages/api/backoffice/menus";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  TextField,
} from "@mui/material";
import { MenusCategories } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddingMenus() {
  const defaultMenuCategory: Partial<MenusCategories> = {
    name: "",
  };

  const router = useRouter();
  const [menuCategory, setMenuCategory] =
    useState<Partial<MenusCategories>>(defaultMenuCategory);
  const handleAddingMenuCategory = async () => {
    console.log(menuCategory);
    await fetch(`${config.backofficeApiUrl}/menu-categories`, {
      method: "POST",
      body: JSON.stringify(menuCategory),
    });
    router.push("/backoffice/menus-categories");
  };
  return (
    <BackOfficeLayout>
      <Box>
        <Box>
          <Box sx={{ bgcolor: "white", width: "100%", borderRadius: "8px" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Name"
              sx={{ width: "100%" }}
              value={menuCategory.name}
              onChange={(e) => {
                setMenuCategory({ ...menuCategory, name: e.target.value });
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#023047",
              ":hover": { bgcolor: "#8ecae6", color: "#023047" },
              mt: "10px",
            }}
            onClick={handleAddingMenuCategory}
          >
            Add Menu Category
          </Button>
        </Box>
      </Box>
    </BackOfficeLayout>
  );
}
