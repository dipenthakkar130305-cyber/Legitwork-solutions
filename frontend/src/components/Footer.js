import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#0D4C73] text-white relative grain-texture">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/7q0neasl_WhatsApp_Image_2026-03-22_at_2.56.57_PM-removebg-preview.png"
              alt="LegitWork Solutions LLP"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your trusted partner in labour law compliance and workforce solutions across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={24} weight="fill" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-twitter"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo size={24} weight="fill" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  data-testid="footer-link-home"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  data-testid="footer-link-about"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/labour-laws"
                  data-testid="footer-link-labour-laws"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Labour Laws
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  data-testid="footer-link-clients"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  data-testid="footer-link-blog"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-testid="footer-link-contact"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#compliance"
                  data-testid="footer-service-compliance"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Labour Law Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/services#payroll"
                  data-testid="footer-service-payroll"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Payroll Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#staffing"
                  data-testid="footer-service-staffing"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#consulting"
                  data-testid="footer-service-consulting"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services#audit"
                  data-testid="footer-service-audit"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Labour Law Audit
                </Link>
              </li>
              <li>
                <Link
                  to="/services#licence"
                  data-testid="footer-service-licence"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Licence & Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} weight="fill" className="text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  A-1028, 10th Floor, Siddhi Vinayak Arcade,<br />Opp. A.P.M.C Vasna, Gupta Nagar,<br />Vasna, Ahmedabad 380007<br />Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} weight="fill" className="text-accent flex-shrink-0" />
                <a
                  href="tel:+917016868061"
                  data-testid="footer-phone"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  +91 70168 68061
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeSimple size={20} weight="fill" className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@legitworksolutions.com"
                  data-testid="footer-email"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  info@legitworksolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} LegitWork Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;