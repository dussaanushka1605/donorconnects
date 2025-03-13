
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Search, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./animations/FadeIn";
import BlurCard from "./ui/BlurCard";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-raktsetu-500/20 via-white/10 to-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1932&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Background circles/shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-raktsetu-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-raktsetu-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto max-w-7xl px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-raktsetu-600 font-medium bg-raktsetu-50 inline-block px-4 py-1 rounded-full border border-raktsetu-100">
                Blood Donation Platform
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Save Lives.{" "}
                <span className="text-raktsetu-600">Donate Blood.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg text-gray-600 max-w-lg">
                Connect with blood donors and recipients in your area. 
                Join our platform to help save lives during critical times.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-raktsetu-600 hover:bg-raktsetu-700 transition-transform duration-300 hover:translate-y-[-3px]">
                  <Link to="/register">
                    <Heart className="mr-2 h-5 w-5" />
                    Become a Donor
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-raktsetu-200 text-raktsetu-700 hover:bg-raktsetu-50 transition-transform duration-300 hover:translate-y-[-3px]">
                  <Link to="/donors">
                    <Search className="mr-2 h-5 w-5" />
                    Find a Donor
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="hidden md:block">
            <FadeIn direction="left" delay={0.5}>
              <BlurCard className="p-8 md:p-10 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-raktsetu-100 rounded-full flex items-center justify-center border border-white">
                  <Droplets size={28} className="text-raktsetu-600" />
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4">Why Donate?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-raktsetu-100 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-raktsetu-700 text-xs font-bold">1</span>
                      </div>
                      <div className="text-gray-700">One donation can save up to three lives</div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-raktsetu-100 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-raktsetu-700 text-xs font-bold">2</span>
                      </div>
                      <div className="text-gray-700">Blood is needed every two seconds</div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-raktsetu-100 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-raktsetu-700 text-xs font-bold">3</span>
                      </div>
                      <div className="text-gray-700">Less than 10% of eligible donors actually donate</div>
                    </li>
                  </ul>
                </div>
              </BlurCard>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
