import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Buildings, UsersFour, MapPin, Users } from '@phosphor-icons/react';

const Clients = () => {
  const [stats, setStats] = useState({
    clients: 0,
    industries: 0,
    locations: 0,
    employees: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 300,
      industries: 20,
      locations: 500,
      employees: 10000,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        industries: Math.min(Math.floor((targets.industries * step) / steps), targets.industries),
        locations: Math.min(Math.floor((targets.locations * step) / steps), targets.locations),
        employees: Math.min(Math.floor((targets.employees * step) / steps), targets.employees),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const clientLogos = [
    { label: 'Fortune 500 MNC', type: 'MNC' },
    { label: 'Leading PSU', type: 'PSU' },
    { label: 'Indian IT Company', type: 'Tech' },
    { label: 'Manufacturing Giant', type: 'Manufacturing' },
    { label: 'Retail Chain', type: 'Retail' },
    { label: 'Healthcare Provider', type: 'Healthcare' },
    { label: 'Logistics Company', type: 'Logistics' },
    { label: 'FMCG Brand', type: 'FMCG' },
    { label: 'Construction Firm', type: 'Construction' },
    { label: 'Financial Services', type: 'BFSI' },
    { label: 'EdTech Startup', type: 'Education' },
    { label: 'Pharmaceutical Co.', type: 'Pharma' },
    { label: 'Automotive Company', type: 'Auto' },
    { label: 'E-commerce Platform', type: 'E-commerce' },
    { label: 'Hospitality Group', type: 'Hospitality' },
    { label: 'Energy Sector', type: 'Energy' },
  ];

  const testimonials = [
    {
      quote:
        'LegitWork Solutions has been our compliance partner for over 5 years. Their proactive approach and deep understanding of labour laws have helped us maintain 100% compliance across 12 locations in India. Highly recommended!',
      name: 'Rajesh Kumar',
      designation: 'HR Director',
      company: 'TechCorp India Pvt Ltd',
      industry: 'IT & Software',
    },
    {
      quote:
        'We were struggling with payroll complexities and statutory compliance when we engaged LegitWork. Their team took complete ownership and transformed our payroll operations. The monthly MIS reports are excellent.',
      name: 'Priya Sharma',
      designation: 'Finance Manager',
      company: 'Manufacturing Solutions Ltd',
      industry: 'Manufacturing',
    },
    {
      quote:
        'The labour law audit conducted by LegitWork was extremely thorough and professional. They identified several compliance gaps we were unaware of and helped us implement corrective measures. Their expertise saved us from potential legal issues.',
      name: 'Amit Patel',
      designation: 'Managing Director',
      company: 'Gujarat Logistics Co.',
      industry: 'Logistics',
    },
    {
      quote:
        'As a growing startup, we needed a reliable partner to handle our contract staffing and compliance needs. LegitWork has been exceptional in their service delivery and responsiveness. They truly understand our business requirements.',
      name: 'Sneha Reddy',
      designation: 'COO',
      company: 'InnovateTech Solutions',
      industry: 'Technology',
    },
    {
      quote:
        'We have been working with LegitWork for our multi-state compliance needs. Their team\'s knowledge of state-specific labour laws and their ability to navigate complex regulatory requirements has been invaluable to our operations.',
      name: 'Vikram Malhotra',
      designation: 'VP Human Resources',
      company: 'Retail Dynamics Pvt Ltd',
      industry: 'Retail',
    },
    {
      quote:
        'LegitWork\'s HR consulting services have helped us design robust policies and performance management systems. Their strategic guidance has significantly improved our employee engagement and retention rates.',
      name: 'Deepa Krishnan',
      designation: 'Head of HR',
      company: 'HealthFirst Hospitals',
      industry: 'Healthcare',
    },
  ];

  return (
    <div data-testid="clients-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Clients</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Trusted by Leading Enterprises
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              We are proud to serve organizations across diverse industries, from Fortune 500 companies to growing SMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-10 lg:p-16 shadow-[0_20px_50px_rgba(13,76,115,0.2)] relative grain-texture"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-clients">
                <UsersFour size={40} weight="duotone" className="text-accent mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-2">{stats.clients}+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="text-center" data-testid="stat-industries">
                <Buildings size={40} weight="duotone" className="text-accent mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-2">{stats.industries}+</div>
                <div className="text-white/80 text-sm">Industries</div>
              </div>
              <div className="text-center" data-testid="stat-locations">
                <MapPin size={40} weight="duotone" className="text-accent mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-2">{stats.locations}+</div>
                <div className="text-white/80 text-sm">Locations Served</div>
              </div>
              <div className="text-center" data-testid="stat-employees">
                <Users size={40} weight="duotone" className="text-accent mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-2">{stats.employees}+</div>
                <div className="text-white/80 text-sm">Employees Managed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Client Portfolio</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Organizations We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                data-testid={`client-logo-${index}`}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover flex flex-col items-center justify-center text-center h-32"
              >
                <div className="text-secondary font-heading font-bold text-sm mb-1">{client.label}</div>
                <div className="text-xs text-[#4A5568] uppercase tracking-wider">{client.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Testimonials</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`testimonial-${index}`}
                className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#0D4C73]/10 card-hover"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-[#1A1A2E] leading-relaxed mb-6 italic text-sm">{testimonial.quote}</p>
                <div className="border-t border-[#0D4C73]/10 pt-4">
                  <div className="font-heading font-bold text-[#1A1A2E]">{testimonial.name}</div>
                  <div className="text-sm text-[#4A5568] mt-1">{testimonial.designation}</div>
                  <div className="text-sm text-primary font-semibold mt-1">{testimonial.company}</div>
                  <div className="text-xs text-accent uppercase tracking-wider mt-2">{testimonial.industry}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative grain-texture">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-white mb-6">
              Ready to Join Our Growing Family?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let us handle your labour law compliance and workforce management needs.
            </p>
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20become%20your%20client."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-become-client-btn"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-semibold btn-scale shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
