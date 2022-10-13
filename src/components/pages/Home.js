import React, { useState } from "react";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { homeObjOne } from "../InfoSection/Data"
import ContactSection from "../ContactSection";
import ProyectsSection from "../ProyectsSection";
import Footer from "../Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <HeroSection />
      <ProyectsSection />
      <InfoSection {...homeObjOne}/>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
