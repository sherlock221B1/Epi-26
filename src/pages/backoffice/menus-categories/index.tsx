import BackOfficeLayout from "@/components/backOfficeLayouts";
import SingleSelect from "@/components/SingleSelect";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function MenusCategories() {
  const router = useRouter();
  return (
    <BackOfficeLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h1>Menus Categories Page</h1>
        <Button
          variant="contained"
          onClick={() => {
            router.push("/backoffice/menus-categories/adding-menu-categories");
          }}
        >
          Create New
        </Button>
      </Box>
    </BackOfficeLayout>
  );
}
