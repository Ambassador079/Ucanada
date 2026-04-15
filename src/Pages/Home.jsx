import { ServerRouter } from "react-router-dom";
import HeroSection from "../Component/HeroSection";
import bg from "../assets/Images/bg1.avif";
import Services from "../Component/ServicesSection";
import Navbar from "../Component/Navbar";
import WhyChooseUs from "../Component/WhyChooseUs";
import WhatWeDo from "../Component/WhatWeDo";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";


const Home = () => {
  return (
    <>
   
     <HeroSection 
      title="Your Trusted Partner"
      highlight="in Canada"
      subtitle="We guide individual and families through every step of building a new life in Canada — with clarity, care, and expertise."
      image={bg}
      pillars={["Education","Immigration","Investments",]}
     />
    <Services />
    <WhyChooseUs />
    <WhatWeDo />
    <ContactSection />
    <Footer />
    </>
  );
};

export default Home;