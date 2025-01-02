import React from "react";

const Description = () => {
  return (
    <section className="container py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Tentang PT Saba-Batik
        </h2>
        <p className="text-gray-700 px-10 leading-relaxed text-center">
          PT Saba-Batik didirikan pada tahun 2020 dengan tujuan utama untuk
          melestarikan budaya batik Indonesia. Kami percaya bahwa batik adalah
          simbol identitas bangsa yang harus dijaga. Dengan semangat inovasi,
          kami memproduksi koleksi batik berkualitas tinggi yang mencerminkan
          keindahan dan keunikan budaya Indonesia.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Sejarah</h3>
            <p className="mt-4 text-gray-600">
              Berdiri di Serang, Banten, PT Saba-Batik memulai perjalanan dengan
              memberdayakan pengrajin lokal untuk menciptakan karya seni batik
              yang autentik.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Keunggulan</h3>
            <p className="mt-4 text-gray-600">
              Kami menggabungkan desain tradisional dengan inovasi modern untuk
              menciptakan koleksi yang relevan dan bernilai seni tinggi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
