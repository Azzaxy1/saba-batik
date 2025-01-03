"use client";

import renderStars from "@/components/RenderStar";
import { products } from "@/utils/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Pants from "@/assets/img/celana.png";
import Skirt from "@/assets/img/rok.png";
import OrderForm from "@/components/Products/OrderForm";

const ProductItemPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  console.log(product);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Merah", "Biru", "Hijau", "Kuning", "Salem"];
  const materials = [
    { name: "Katun", price: 0 },
    { name: "Mori", price: 120000 },
    { name: "Sutra", price: 150000 },
    { name: "Shantung", price: 170000 },
    { name: "Paris", price: 200000 },
    { name: "Ceruti", price: 220000 },
    { name: "Rayon", price: 250000 },
  ];

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  const totalPrice =
    Number(product?.price || 0) + Number(selectedMaterial?.price || 0);

  console.log(totalPrice);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Produk Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
          {product.gender === "Pria" ? (
            <Image
              src={Pants}
              alt="Celana"
              width={600}
              height={600}
              className="absolute top-[500px] left-[-30px]"
            />
          ) : (
            <Image
              src={Skirt}
              alt="Rok"
              width={700}
              height={700}
              className="absolute top-[550px] left-[-90px]"
            />
          )}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <div className="flex items-center gap-2 mb-4">
            {renderStars(product.rating)}
            <span className="text-gray-500">({product.rating})</span>
          </div>
          <p className="text-2xl font-bold text-primary mb-6">
            Rp {totalPrice?.toLocaleString("id-ID")}
          </p>

          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Pilih Ukuran:</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Pilih Warna:</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedColor === color
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Pilih Bahan:</h3>
            <div className="flex gap-2">
              {materials.map((material) => (
                <button
                  key={material.name}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedMaterial.name === material.name
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {material.name}
                </button>
              ))}
            </div>
          </div>

          {/* Deskripsi Produk */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Deskripsi Produk:</h3>
            <p className="text-gray-600">
              <strong>TERLARIS dan REAL PICT</strong>
              <br />
              <br />
              Produk kami original Saba Batik dan merupakan kreasi para
              pengrajin lokal dengan kualitas terbaik.
              <br />
              <br />
              <strong>Mohon hubungi admin sebelum checkout.</strong>
              <br />
              <br />
              <strong>Spesifikasi Produk:</strong>
              <br />
              Model: {product.name}
              <br />
              Material: {selectedMaterial.name}
              <br />
              Warna: {selectedColor}
              <br />
              <br />
              <strong>
                SIZE CHART (Lingkar Dada; Panjang Baju; Panjang Lengan):
              </strong>
              <br />
              S (104cm x 70cm)
              <br />
              M (110cm x 72cm)
              <br />
              L (116cm x 74cm)
              <br />
              XL (122cm x 76cm)
              <br />
              <br />
              <strong>Perawatan:</strong>
              <br />
              – Tidak disarankan mencuci dengan mesin cuci
              <br />
              – Jangan terlalu lama merendam 5-10 menit saja
              <br />
              – Jangan dijemur dibawah sinar matahari langsung
              <br />
              – Menyetrika dengan suhu sedang
              <br />
              – Disarankan menggunakan sabun khusus pencuci batik (sabun lerak)
              atau : Kemeja Batik Modern Kekinian
              <br />
              <br />
              <strong>Panduan Ukuran:</strong>
              <br />
              Lingkar dada x P. Baju
              <br />
              S (104cm x 70cm)
              <br />
              M (110cm x 72cm)
              <br />
              L (116cm x 74cm)
              <br />
              XL (122cm x 76cm)
              <br />
              <br />
              <strong>Cara Perawatan:</strong>
              <br />
              Cuci dengan detergen secukupnya , jangan gunakan mesin cuci dan
              pengering , jemur di tempat yang tidak terkena matahari langsung
              dan setrika dengan suhu rendah
            </p>
          </div>
          <OrderForm
            product={product}
            material={selectedMaterial.name}
            color={selectedColor}
            size={selectedSize}
            totalPrices={totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
