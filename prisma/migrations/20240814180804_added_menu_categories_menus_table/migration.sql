-- CreateTable
CREATE TABLE "MenusCategoriesAndMenus" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "menuCategoriesId" INTEGER NOT NULL,

    CONSTRAINT "MenusCategoriesAndMenus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenusCategoriesAndMenus" ADD CONSTRAINT "MenusCategoriesAndMenus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusCategoriesAndMenus" ADD CONSTRAINT "MenusCategoriesAndMenus_menuCategoriesId_fkey" FOREIGN KEY ("menuCategoriesId") REFERENCES "MenusCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
