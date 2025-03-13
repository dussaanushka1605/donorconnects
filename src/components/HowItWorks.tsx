
import React from "react";
import { ArrowRight, UserPlus, Search, Phone, Award, ShieldCheck } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import BlurCard from "./ui/BlurCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <UserPlus size={24} />,
    title: "Register",
    description:
      "Create an account as a donor or a hospital to join our platform.",
    delay: 0.1,
  },
  {
    icon: <Search size={24} />,
    title: "Find Donors",
    description:
      "Search for nearby donors based on blood type and location.",
    delay: 0.2,
  },
  {
    icon: <Phone size={24} />,
    title: "Contact",
    description:
      "Reach out to donors directly in case of emergency requirements.",
    delay: 0.3,
  },
  {
    icon: <Award size={24} />,
    title: "Earn Rewards",
    description:
      "Donors receive recognition and rewards for frequent donations.",
    delay: 0.4,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="how-it-works">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-raktsetu-100 rounded-full" />
        <div className="absolute bottom-10 -left-20 w-60 h-60 bg-raktsetu-50 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-raktsetu-100 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-raktsetu-100 rounded-full opacity-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-raktsetu-600 font-medium mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple Steps to Save Lives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform connects donors with those in need through a simple, streamlined process.
              Follow these steps to get started and make a difference.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={step.delay}>
              <BlurCard
                className="p-6 h-full flex flex-col items-center text-center group"
                hoverEffect
                intensity="light"
              >
                <div className="bg-raktsetu-50 p-4 rounded-full mb-5 text-raktsetu-600 group-hover:bg-raktsetu-100 transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-raktsetu-300" />
                  </div>
                )}
              </BlurCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.5}>
            <BlurCard className="p-8 max-w-3xl mx-auto" intensity="light">
              <div className="flex items-center justify-center mb-5">
                <ShieldCheck size={28} className="text-raktsetu-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Top Donors Recognition</h3>
              <p className="text-gray-600 mb-6">
                We celebrate our most active donors with exclusive rewards and recognition.
                Join our community and be featured on our donor leaderboard.
              </p>
              <Button asChild size="lg" className="bg-raktsetu-600 hover:bg-raktsetu-700">
                <Link to="/register">
                  Get Started Today
                </Link>
              </Button>
            </BlurCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
