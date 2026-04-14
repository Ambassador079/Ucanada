import { ServerRouter } from "react-router-dom";
import HeroSection from "../Component/HeroSection";
import Services from "../Component/ServicesSection";
import Navbar from "../Component/Navbar";
import WhyChooseUs from "../Component/WhyChooseUs";
import WhatWeDo from "../Component/WhatWeDo";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";


const Home = () => {
  return (
    <>
    <Navbar />
     <HeroSection />
    <Services />
    <WhyChooseUs />
    <WhatWeDo />
    <ContactSection />
    <Footer />
    </>
  );
};

export default Home;