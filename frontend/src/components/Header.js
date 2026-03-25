import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Labour Laws', path: '/labour-laws' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Clients', path: '/clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        data-testid="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-sm border-b border-white/40'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" data-testid="logo-link" className="flex items-center">
              <img
                src="https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/7q0neasl_WhatsApp_Image_2026-03-22_at_2.56.57_PM-removebg-preview.png"
                alt="LegitWork Solutions LLP"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-[#1A1A2E]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20labour%20law%20compliance%20services."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-cta-button"
              className="hidden lg:block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-sm btn-scale shadow-md"
            >
              Get a Free Consultation
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-secondary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
              data-testid="mobile-menu"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                    className={`text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-[#1A1A2E] hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20labour%20law%20compliance%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-cta-button"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-sm text-center"
                >
                  Get a Free Consultation
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;