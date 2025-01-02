"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { AiFillHome } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/img/logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  // const appName = import.meta.env.VITE_APP_NAME || "Laravel";

  const menuItems = [
    { name: "Home", href: "/", icon: AiFillHome },
    { name: "Koleksi Batik", href: "/products", icon: FaRegListAlt },
    { name: "Tentang Kami", href: "/about", icon: IoPeople },
    { name: "Kontak", href: "/contact", icon: MdEmail },
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        isBordered
        className="z-50 2xl:py-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
      >
        {/* Logo dan Menu Toggle */}
        <NavbarContent data-aos="fade-down">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" className="inline-flex items-center ">
              <Image src={Logo} alt="logo" width={30} height={40} />
              <p className="text-xl font-semibold">
                <span className="text-primary">SABA</span>BATIK
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Menu Utama untuk Desktop */}
        <NavbarContent
          className="hidden gap-4 sm:flex"
          justify="center"
          data-aos="fade-down"
        >
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 font-medium hover:underline hover:underline-offset-8 ${
                  currentPath === item.href
                    ? "text-primary font-bold"
                    : "text-fontColor"
                }`}
              >
                <item.icon />
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Menu untuk Mobile */}
        <NavbarMenu className="flex items-center justify-center">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 w-full font-medium hover:underline hover:underline-offset-8 ${
                  currentPath === item.href
                    ? "text-primary font-bold"
                    : "text-fontColor"
                }`}
              >
                <item.icon />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
