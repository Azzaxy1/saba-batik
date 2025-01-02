import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16  bg-gray-800">
      <div className="container">
        <div className="text-center">
          <h2
            className="text-2xl md:text-3xl text-white font-bold mb-8"
            data-aos="fade-up"
          >
            Mengapa Memilih Kami?
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            data-aos="fade-up"
          >
            <div
              className="bg-white shadow-lg rounded-lg p-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-4">Kualitas Terbaik</h3>
              <p className="text-lg text-gray-700">
                Setiap kain batik yang kami buat dijamin menggunakan bahan
                berkualitas dan teknik pewarnaan yang ramah lingkungan.
              </p>
            </div>
            <div
              className="bg-white shadow-lg rounded-lg p-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-4">Desain Eksklusif</h3>
              <p className="text-lg text-gray-700">
                Kami menawarkan desain batik yang unik dan eksklusif,
                mencerminkan kekayaan budaya Indonesia.
              </p>
            </div>
            <div
              className="bg-white shadow-lg rounded-lg p-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-4">Pelayanan Terbaik</h3>
              <p className="text-lg text-gray-700">
                Kami memberikan layanan pelanggan yang ramah dan responsif untuk
                setiap pesanan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
