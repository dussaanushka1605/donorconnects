
import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Facebook, Instagram, Twitter, Heart, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 text-raktsetu-600 font-bold text-2xl mb-4">
              <Droplets className="h-7 w-7" />
              <span>RaktSetu</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Connecting blood donors with recipients, saving lives one donation at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-raktsetu-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-raktsetu-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-raktsetu-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donors" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Find Donors
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Blood Donation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Eligibility Criteria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raktsetu-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-raktsetu-500 mr-3 mt-0.5" />
                <span className="text-gray-600">support@raktsetu.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-raktsetu-500 mr-3 mt-0.5" />
                <span className="text-gray-600">+91 800-123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button className="bg-raktsetu-600 hover:bg-raktsetu-700">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RaktSetu. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-raktsetu-600 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-raktsetu-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-raktsetu-600 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
