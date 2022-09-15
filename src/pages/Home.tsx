import React, { FC } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
