
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
