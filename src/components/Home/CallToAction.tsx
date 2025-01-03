import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2
        className="text-3xl font-bold mb-4"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Tunggu apalagi!
      </h2>
      <p className="text-lg mb-6" data-aos="zoom-in" data-aos-delay="200">
        Pesan batik terbaik untuk Anda dan orang terdekat sekarang juga!
      </p>
      <Link href="/products">
        <p
          className="bg-gray-800 w-fit mx-auto text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Lihat Koleksi Kami
        </p>
      </Link>
    </section>
  );
};

export default CallToAction;
