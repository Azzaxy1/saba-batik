import AboutUs from "@/components/Home/About";
import CallToAction from "@/components/Home/CallToAction";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Products />
      <WhyChooseUs />
      <CallToAction />
      <Faq />
    </>
  );
};

export default Home;

