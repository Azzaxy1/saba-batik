"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const RootClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <NextUIProvider>
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default RootClient;
