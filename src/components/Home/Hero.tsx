import React from "react";
import HeroImg from "@/assets/img/hero.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen container py-6 md:py-0 px-6 overflow-x-hidden items-center flex md:px-16 hero">
      <div className="flex-col gap-4 flex justify-around items-center hero-content lg:flex-row-reverse">
        <Image
          alt="hero"
          data-aos="fade-left"
          src={HeroImg}
          width={300}
          className="max-w-sm md:w-[500px] rounded-lg shadow-2xl"
        />
        <div
          className="w-full md:max-w-xl lg:max-w-4xl md:mr-24"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Jelajahi Keindahan{" "}
            <span className="text-primary">Batik Nusantara</span>
          </h1>
          <p className="py-6 text-base md:text-lg text-gray-700">
            Temukan beragam motif batik khas Indonesia yang sarat dengan makna
            budaya dan tradisi. Kami menyediakan koleksi terbaik untuk kebutuhan
            fashion Anda, mulai dari pakaian hingga kain batik eksklusif.
          </p>
          <Link href="/catalog">
            <button className="text-white border-none px-3 py-2 rounded-lg bg-primary hover:bg-baseAppHover">
              Lihat Koleksi Batik
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
