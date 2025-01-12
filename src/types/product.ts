import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  image: { src: StaticImageData; color: string }[];
  price: number;
  rating: number;
  gender: string;
}
