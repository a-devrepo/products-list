import { products } from "../models/data";
import { ProductDTO } from "../models/product";

export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}
