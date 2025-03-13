
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 px-6",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-raktsetu-600 font-bold text-2xl"
            onClick={closeMobileMenu}
          >
            <Droplets className="h-7 w-7" />
            <span>RaktSetu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200",
                isActive("/")
                  ? "text-raktsetu-600 font-medium"
                  : "text-gray-600 hover:text-raktsetu-600"
              )}
            >
              Home
            </Link>
            <Link
              to="/donors"
              className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200",
                isActive("/donors")
                  ? "text-raktsetu-600 font-medium"
                  : "text-gray-600 hover:text-raktsetu-600"
              )}
            >
              Donors
            </Link>
            <Link
              to="/register"
              className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200",
                isActive("/register")
                  ? "text-raktsetu-600 font-medium"
                  : "text-gray-600 hover:text-raktsetu-600"
              )}
            >
              Register
            </Link>
            <Link
              to="/login"
              className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200 ml-2",
                isActive("/login")
                  ? "text-raktsetu-600 font-medium"
                  : "text-gray-600 hover:text-raktsetu-600"
              )}
            >
              Login
            </Link>
            <Button variant="default" size="sm" className="ml-2 bg-raktsetu-600 hover:bg-raktsetu-700">
              <Heart className="mr-2 h-4 w-4" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in rounded-b-lg overflow-hidden">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/"
                className={cn(
                  "px-4 py-3 rounded-md transition-colors duration-200",
                  isActive("/")
                    ? "bg-raktsetu-50 text-raktsetu-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/donors"
                className={cn(
                  "px-4 py-3 rounded-md transition-colors duration-200",
                  isActive("/donors")
                    ? "bg-raktsetu-50 text-raktsetu-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={closeMobileMenu}
              >
                Donors
              </Link>
              <Link
                to="/register"
                className={cn(
                  "px-4 py-3 rounded-md transition-colors duration-200",
                  isActive("/register")
                    ? "bg-raktsetu-50 text-raktsetu-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={closeMobileMenu}
              >
                Register
              </Link>
              <Link
                to="/login"
                className={cn(
                  "px-4 py-3 rounded-md transition-colors duration-200",
                  isActive("/login")
                    ? "bg-raktsetu-50 text-raktsetu-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Button className="w-full bg-raktsetu-600 hover:bg-raktsetu-700">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
