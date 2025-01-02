import React from "react";
import HeroImg from "@/assets/img/batik.webp";
import { FaCheckCircle } from "react-icons/fa"; // Ikon untuk item
import Image from "next/image";

const ITEMS = [
  "Batik berkualitas tinggi dengan desain unik dan tradisional.",
  "Komitmen untuk melestarikan budaya batik melalui setiap produk.",
  "Pengrajin batik berpengalaman dengan sentuhan tangan yang ahli.",
  "Beragam pilihan batik, dari motif klasik hingga modern.",
  "Layanan custom batik untuk memenuhi keinginan setiap pelanggan.",
];

const AboutUs = () => {
  return (
    <section className="py-16 overflow-x-hidden bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-16 px-6 mx-auto md:px-16 lg:flex-row">
        {/* Hero Image */}
        <div
          className="relative w-full max-w-md md:w-[400px]"
          data-aos="zoom-in"
        >
          <Image
            src={HeroImg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-lg shadow-lg bg-opacity-20 -z-10"></div>
        </div>

        {/* Content */}
        <div
          className="flex flex-col gap-6 overflow-x-hidden overflow-y-hidden text-center lg:text-left lg:w-1/2"
          data-aos="fade-up"
        >
          <h4
            className="text-3xl md:text-4xl font-extrabold leading-snug text-white"
            data-aos="fade-right"
          >
            Batik Pilihan <span className="text-blue-600">Terbaik</span>
          </h4>
          <p
            className="leading-relaxed text-white text-base md:text-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Kami adalah penyedia batik dengan desain tradisional yang kaya akan
            filosofi, menawarkan produk berkualitas tinggi dan layanan custom
            batik yang membuat setiap pemakai merasa istimewa.
          </p>
          <ul className="flex flex-col gap-4 mt-4 overflow-x-hidden overflow-y-hidden">
            {ITEMS.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-white"
                data-aos="fade-left"
                data-aos-delay={`${index * 150}`}
              >
                <FaCheckCircle className="w-6 h-6 text-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
