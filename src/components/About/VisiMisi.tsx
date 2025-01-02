import React from "react";

const VisiMisi = () => {
  return (
    <section className=" bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Visi dan Misi
        </h2>
        <div className="flex flex-col justify-center  md:flex-row gap-8">
          <div className="w-full md:max-w-[500px]">
            <h3 className="text-xl text-white font-semibold">Visi</h3>
            <p className="mt-4 text-white">
              Menjadi perusahaan terdepan dalam mempromosikan budaya batik
              Indonesia di pasar global dengan menjaga kualitas dan nilai seni
              yang tinggi.
            </p>
          </div>
          <div className="w-full md:max-w-[500px]">
            <h3 className="text-xl text-white font-semibold">Misi</h3>
            <ul className="mt-4 space-y-3 text-white">
              <li>
                ✔ Melestarikan tradisi batik melalui inovasi desain modern.
              </li>
              <li>
                ✔ Memberdayakan pengrajin lokal untuk meningkatkan
                kesejahteraan.
              </li>
              <li>
                ✔ Memperkenalkan batik sebagai identitas budaya Indonesia ke
                dunia.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
