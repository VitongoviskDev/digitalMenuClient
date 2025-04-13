import { MenuSectionDTO } from "./MenuSectionDTO";

export type MenuDTO = {
  id: number;
  name: string;
  description: string;
  imageUri: string;
  menuSections: MenuSectionDTO[];
  itemsAmount: number
};
