import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  rating: number;
  gender: string;
}
