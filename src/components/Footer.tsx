import Image from "next/image";
import Logo from "@/assets/img/logo1.png";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center">
          {/* Logo dan Nama Brand */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo Saba Batik"
              className="h-10 w-10 object-contain"
            />
            <p className="text-xl font-bold">SABABATIK</p>
          </div>

          {/* Navigasi */}
          <div className="flex flex-col px-2 md:flex-row md:space-x-6 mt-4 md:mt-0">
            <Link
              href="/"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              <AiFillHome />
              Beranda
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8 "
            >
              <FaRegListAlt />
              Koleksi Batik
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8 "
            >
              <IoPeople />
              Tentang Kami
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8 "
            >
              <MdEmail />
              Hubungi Kami
            </Link>
          </div>

          {/* Media Sosial */}
          <div className="flex space-x-4 px-2 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.019 3.676 9.167 8.438 9.878v-6.99h-2.54v-2.887h2.54V9.79c0-2.506 1.492-3.89 3.775-3.89 1.093 0 2.236.195 2.236.195v2.452h-1.26c-1.244 0-1.63.774-1.63 1.565v1.88h2.773l-.443 2.887h-2.33v6.99C18.325 21.167 22 17.019 22 12z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.24 2.428.403a4.92 4.92 0 011.675 1.066 4.92 4.92 0 011.066 1.675c.163.458.346 1.257.403 2.428.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.403 2.428a4.92 4.92 0 01-1.066 1.675 4.92 4.92 0 01-1.675 1.066c-.458.163-1.257.346-2.428.403-1.266.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.428-.403a4.92 4.92 0 01-1.675-1.066 4.92 4.92 0 01-1.066-1.675c-.163-.458-.346-1.257-.403-2.428-.058-1.266-.07-1.645-.07-4.849s.012-3.584.07-4.85c.057-1.17.24-1.97.403-2.428a4.92 4.92 0 011.066-1.675 4.92 4.92 0 011.675-1.066c.458-.163 1.257-.346 2.428-.403 1.266-.058 1.645-.07 4.849-.07m0-2.163C8.745 0 8.333.013 7.052.072 5.766.132 4.8.313 4.063.564a7.158 7.158 0 00-2.61 1.62A7.158 7.158 0 00.564 4.063c-.25.737-.432 1.703-.492 2.99C.013 8.333 0 8.745 0 12s.013 3.667.072 4.948c.06 1.287.242 2.253.492 2.99a7.158 7.158 0 001.62 2.61 7.158 7.158 0 002.61 1.62c.737.25 1.703.432 2.99.492C8.333 23.987 8.745 24 12 24s3.667-.013 4.948-.072c1.287-.06 2.253-.242 2.99-.492a7.158 7.158 0 002.61-1.62 7.158 7.158 0 001.62-2.61c.25-.737.432-1.703.492-2.99C23.987 15.667 24 15.255 24 12s-.013-3.667-.072-4.948c-.06-1.287-.242-2.253-.492-2.99a7.158 7.158 0 00-1.62-2.61A7.158 7.158 0 0019.937.564c-.737-.25-1.703-.432-2.99-.492C15.667.013 15.255 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.897 9.897 0 01-2.828.775A4.932 4.932 0 0023.337 3.2a9.868 9.868 0 01-3.127 1.195 4.924 4.924 0 00-8.391 4.482A13.978 13.978 0 011.671 3.15a4.92 4.92 0 001.524 6.573 4.899 4.899 0 01-2.23-.615v.062a4.924 4.924 0 003.946 4.827 4.92 4.92 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.009 0-.213-.005-.426-.014-.637A10.004 10.004 0 0024 4.557z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Saba Batik. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
