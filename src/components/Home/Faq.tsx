"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQDATA = [
  {
    title: "Apa yang membuat batik kami unik dan berbeda?",
    content:
      "Batik kami dibuat dengan tangan oleh pengrajin berpengalaman, menggunakan teknik tradisional dan bahan berkualitas tinggi. Setiap motif batik memiliki filosofi dan cerita yang mendalam, yang menjadikannya lebih dari sekedar pakaian, tetapi juga karya seni.",
  },
  {
    title: "Bagaimana cara memesan batik dari koleksi kami?",
    content:
      "Untuk memesan batik, Anda dapat memilih dari koleksi kami di situs web atau menghubungi tim kami melalui WhatsApp atau email. Kami juga menyediakan layanan custom batik sesuai dengan permintaan dan kebutuhan Anda.",
  },
  {
    title: "Apakah ada layanan pengiriman untuk pembelian batik?",
    content:
      "Ya, kami menyediakan layanan pengiriman untuk seluruh Indonesia dan beberapa negara. Setiap pesanan akan dikemas dengan hati-hati dan dikirimkan dalam waktu yang tepat, sehingga batik Anda sampai dalam kondisi terbaik.",
  },
  {
    title: "Bisakah saya membeli batik secara grosir?",
    content:
      "Tentu saja! Kami menerima pembelian batik dalam jumlah besar dengan harga grosir. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut tentang harga dan pilihan batik grosir.",
  },
  {
    title: "Apakah batik yang kami beli dapat dicuci dengan mesin?",
    content:
      "Batik kami terbuat dari bahan yang dapat dicuci dengan mesin, namun kami menyarankan untuk mencucinya dengan air dingin dan menggunakan deterjen yang lembut untuk menjaga keawetan warna dan motif batik.",
  },
];

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div
      className="mb-4 border border-gray-300 rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <div
        className={`flex items-center justify-between p-4 text-xl font-medium cursor-pointer ${
          isOpen ? "bg-blue-200 text-primary" : "bg-white text-gray-800"
        }`}
        onClick={onClick}
      >
        <span className="text-base">{title}</span>
        <HiChevronDown
          className={`text-2xl transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div
          className="p-4 text-gray-600 transition-all duration-300 bg-gray-50"
          data-aos="fade-in"
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:px-16 container md:w-[70%] mx-auto my-16">
      <h1
        className="mb-4 text-2xl font-semibold text-center capitalize md:text-3xl"
        data-aos="fade-up"
      >
        Pertanyaan yang sering diajukan{" "}
        <span className="text-primary">(FAQ)</span>
      </h1>
      <p
        className="mb-6 text-center text-base md:text-lg text-gray-700"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Kami telah merangkum jawaban atas berbagai pertanyaan yang sering
        diajukan. Jika masih ada yang belum terjawab, silahkan hubungi WA kami!
      </p>
      <div className="w-full">
        {FAQDATA.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            content={faq.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
