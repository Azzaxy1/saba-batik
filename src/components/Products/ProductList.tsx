import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
    </div>
  );
};

const ProductList = () => {
  return (
    <section className="py-10 container">
      <div className="mx-auto container px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          <span className="text-primary">Produk</span> Kami
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.id}`}
              className="transform hover:scale-105 transition-transform duration-250 ease-in-out"
            >
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
      </div>
    </section>
  );
};

export default ProductList;
