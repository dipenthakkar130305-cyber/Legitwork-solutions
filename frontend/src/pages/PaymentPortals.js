import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

const PaymentPortals = () => {
  return (
    <div data-testid="payment-portals-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Quick Access</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Statutory Payment Portals
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              File your statutory contributions directly through official government portals. Quick access to EPF, ESIC, and Labour Welfare Fund payment systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Portals Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* EPF Portal */}
            <motion.a
              href="https://unifiedportal-emp.epfindia.gov.in/epfo/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portal-epf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center card-hover group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🏛️
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#1A1A2E] mb-3">EPF</h3>
              <p className="text-sm text-primary font-semibold mb-3">Employee Provident Fund</p>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                Pay EPF contributions through the EPFO Unified Portal
              </p>
              <div className="inline-flex items-center text-primary font-semibold">
                Go to Portal
                <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* ESIC Portal */}
            <motion.a
              href="https://portal.esic.gov.in/ESICInsurance1/RevenueOne/MonthlyContribution/eChallan.aspx"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portal-esic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-2xl p-8 text-center card-hover group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🏥
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#1A1A2E] mb-3">ESIC</h3>
              <p className="text-sm text-accent font-semibold mb-3">Employee State Insurance</p>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                Generate ESIC e-Challan and make monthly contributions
              </p>
              <div className="inline-flex items-center text-accent font-semibold">
                Go to Portal
                <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* GLWF Portal */}
            <motion.a
              href="https://glwbcrm.gujarat.gov.in/crm/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portal-glwf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-2xl p-8 text-center card-hover group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🏗️
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#1A1A2E] mb-3">GLWF</h3>
              <p className="text-sm text-secondary font-semibold mb-3">Gujarat Labour Welfare Fund</p>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                Access the Gujarat Labour Welfare Board CRM portal
              </p>
              <div className="inline-flex items-center text-secondary font-semibold">
                Go to Portal
                <ArrowRight size={20} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xs text-[#4A5568] max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> These links redirect to official government portals. LegitWork Solutions is not responsible for external site availability or functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl text-[#1A1A2E] mb-6">
              Need Help with Statutory Payments?
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-8">
              Our compliance experts can assist you with filing, reconciliation, and ensuring timely payment of all statutory contributions.
            </p>
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20need%20help%20with%20statutory%20payments."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cta"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-semibold btn-scale shadow-lg"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPortals;
