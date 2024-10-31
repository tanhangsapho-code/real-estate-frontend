"use client";
import { navigation } from "@/lib/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-white text-2xl font-bold"
              aria-label="RealEstate - Return to homepage"
            >
              Your Dream
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              aria-label="Primary navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white transition-colors relative group ${
                    pathname === item.href
                      ? "text-white"
                      : "hover:text-gray-300"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-description={item.description}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-sm rounded-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-white rounded-md ${
                    pathname === item.href ? "bg-gray-800" : "hover:bg-gray-800"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <div className="px-3 py-2">
                <Button variant="primary" size="md" className="w-full">
                  List Your Property
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
