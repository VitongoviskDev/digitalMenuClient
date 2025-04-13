import { ProductDTO } from "./ProductDTO";

export type MenuSectionDTO = {
    id: number;
    name: string;
    products: ProductDTO[];
}