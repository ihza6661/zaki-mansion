import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PROPERTY_DETAILS } from "@/data";
import type { NavLink } from "@/types";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#beranda" className="flex items-center">
              <span
                className={`font-serif text-2xl lg:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-charcoal" : "text-background"
                }`}
              >
                {PROPERTY_DETAILS.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-sans font-normal tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-charcoal-soft" : "text-background/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-background"
              }`}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-cream lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-6 h-20">
                <span className="font-serif text-2xl font-semibold tracking-tight text-charcoal">
                  {PROPERTY_DETAILS.name}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-charcoal transition-colors duration-300 hover:text-gold"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                {NAV_LINKS.map((link: NavLink, index: number) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="font-serif text-3xl font-semibold tracking-tight text-charcoal transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Footer Accent */}
              <div className="pb-8 px-6 text-center">
                <div className="inline-block w-16 h-px bg-gold" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
