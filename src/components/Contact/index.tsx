import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import GoogleMapsEmbed from "./Maps";

const Contact = () => {
  return (
    <section
      className="container flex flex-col items-center justify-center py-10 md:px-16"
      id="kontak"
    >
      <div
        className="flex flex-col mb-7 md:flex-row gap-6 md:w-[70%] mx-auto"
        data-aos="fade-up"
      >
        <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Informasi & Konsultasi <span className="text-baseApp">Gratis</span>{" "}
          Sekarang!
        </h4>
        <p className="mb-3">
          Butuh bantuan dan informasi yang lebih cepat? Jangan ragu untuk
          menghubungi kami.
        </p>
      </div>
      <div className="container flex flex-col items-center gap-10 md:gap-0 md:flex-row">
        <div
          className="flex flex-col gap-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <article
            className="py-2 bg-blue-100 px-3 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="flex flex-row items-center gap-6 card-body">
              <FaMapLocationDot className="text-4xl w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-baseApp" />
              <div>
                <h4 className="text-lg font-bold">Alamat</h4>
                <p>
                  No.7-9 Blok DE 6-7-8, Ruko Kedoya Elok Plaza, Jl. Panjang,
                  West Jakarta City, Jakarta 11520
                </p>
              </div>
            </div>
          </article>
          <article
            className="py-2 bg-blue-100 px-3 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="flex flex-row items-center gap-6 card-body">
              <IoMdCall className="text-4xl w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-baseApp" />
              <div>
                <h4 className="text-lg font-bold">Nomor Telepon</h4>
                <p>+62 878 8579 3483</p>
              </div>
            </div>
          </article>
          <article
            className="py-2 bg-blue-100 px-3 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <div className="flex flex-row items-center gap-6 card-body">
              <IoMdMail className="text-4xl w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-baseApp" />
              <div>
                <h4 className="text-lg font-bold">Mail Adrress</h4>
                <p>sababatik@gmail.com</p>
              </div>
            </div>
          </article>
        </div>
        <GoogleMapsEmbed />
      </div>
    </section>
  );
};

export default Contact;
