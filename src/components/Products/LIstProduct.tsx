// components/Home/Products.js
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

const ListProduct = () => {
  return (
    <section className="py-10 container">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          <span className="text-primary">Produk</span> Kami
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-96 object-cover object-center"
              />
              <div className="pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-500">({product.rating})</span>
                </div>
                <p className="text-lg text-gray-500 mb-4 font-bold">
                  Rp. {product.price.toLocaleString("id-ID")}
                </p>
                <Link href={`/products/${product.id}`}>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                    Beli Sekarang
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
