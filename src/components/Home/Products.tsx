// components/Home/Products.js
import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import renderStars from "../RenderStar";

const Products = () => {
  const productSlice = products.slice(0, 4);

  return (
    <section className="py-10 container">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          <span className="text-primary">Produk</span> Kami
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {productSlice.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`}>
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={product.image[0].src}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="pb-6 px-6">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    {renderStars(product.rating)}
                    <span className="text-gray-500">({product.rating})</span>
                  </div>
                  <p className="text-lg text-gray-500 font-bold">
                    Rp. {product.price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-sm text-end text-gray-500">
                    Terjual: {product.sold} pcs
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/products">
          <p
            className="bg-primary w-fit hover:bg-white border-2 hover:border-2 hover:border-primary hover:text-black mx-auto text-white px-4 py-2 rounded-lg font-semibold text-lg transition duration-300 mt-8"
            data-aos="fade-up"
          >
            Lihat Semua Produk
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Products;
