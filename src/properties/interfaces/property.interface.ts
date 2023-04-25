import { Category } from "../../categories/interfaces/category.interface";
import { Address } from "../../adresses/interfaces/adress.interface";

export class Property {
    id: string;
    sold: boolean;
    value: number;
    size: number;
    createdAt: Date;
    updatedAt: Date;
    address: Address;
    category: Category;
}