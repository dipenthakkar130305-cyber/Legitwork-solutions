import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  ShieldCheck,
  CurrencyCircleDollar,
  Users,
  ChartLineUp,
  MagnifyingGlass,
  Certificate,
  CheckCircle,
  Globe,
  Lightbulb,
  Handshake,
  ArrowRight,
} from '@phosphor-icons/react';

const Home = () => {
  const [stats, setStats] = useState({
    clients: 0,
    experience: 0,
    presence: 0,
    compliances: 0,
  });

  // Animated counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 100,
      experience: 15,
      presence: 1,
      compliances: 500,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        experience: Math.min(Math.floor((targets.experience * step) / steps), targets.experience),
        presence: targets.presence,
        compliances: Math.min(Math.floor((targets.compliances * step) / steps), targets.compliances),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <ShieldCheck size={40} weight="duotone" />,
      title: 'Labour Law Compliance Management',
      description: 'Comprehensive compliance solutions ensuring your business adheres to all central and state labour regulations.',
      link: '/services#compliance',
    },
    {
      icon: <CurrencyCircleDollar size={40} weight="duotone" />,
      title: 'Payroll Outsourcing & Processing',
      description: 'End-to-end payroll management with accurate salary processing, tax compliance, and statutory deductions.',
      link: '/services#payroll',
    },
    {
      icon: <Users size={40} weight="duotone" />,
      title: 'Contract Staffing & Manpower Outsourcing',
      description: 'Flexible workforce solutions with compliant contract staffing for temporary and permanent requirements.',
      link: '/services#staffing',
    },
    {
      icon: <ChartLineUp size={40} weight="duotone" />,
      title: 'HR Consulting & Advisory',
      description: 'Strategic HR guidance on policies, employee relations, performance management, and organizational development.',
      link: '/services#consulting',
    },
    {
      icon: <MagnifyingGlass size={40} weight="duotone" />,
      title: 'Labour Law Audit & Assessment',
      description: 'Thorough audits to identify compliance gaps and implement corrective measures to mitigate legal risks.',
      link: '/services#audit',
    },
    {
      icon: <Certificate size={40} weight="duotone" />,
      title: 'Licence & Registration Services',
      description: 'Assistance with obtaining and renewing licenses, registrations, and statutory approvals for your business.',
      link: '/services#licence',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Lightbulb size={32} weight="duotone" />,
      title: 'Decades of Expertise',
      description: '15+ years of experience in labour law compliance and HR solutions',
    },
    {
      icon: <Globe size={32} weight="duotone" />,
      title: 'Pan-India Coverage',
      description: 'Serving clients across all major cities and industrial hubs in India',
    },
    {
      icon: <CheckCircle size={32} weight="duotone" />,
      title: '100% Statutory Adherence',
      description: 'Complete compliance with all central and state labour regulations',
    },
    {
      icon: <Users size={32} weight="duotone" />,
      title: 'Dedicated Compliance Officers',
      description: 'Experienced professionals managing your compliance requirements',
    },
    {
      icon: <ChartLineUp size={32} weight="duotone" />,
      title: 'Technology-Driven',
      description: 'Modern tools for efficient compliance tracking and reporting',
    },
    {
      icon: <Handshake size={32} weight="duotone" />,
      title: 'Transparent Reporting',
      description: 'Regular updates and clear communication on all compliance matters',
    },
  ];

  const testimonials = [
    {
      quote: 'LegitWork Solutions has been instrumental in streamlining our labour compliance processes. Their expertise and proactive approach have saved us from potential legal issues.',
      name: 'Rajesh Kumar',
      designation: 'HR Director',
      company: 'TechCorp India Pvt Ltd',
    },
    {
      quote: 'We have been working with LegitWork for over 3 years now. Their payroll outsourcing service is seamless and their team is always responsive to our queries.',
      name: 'Priya Sharma',
      designation: 'Finance Manager',
      company: 'Manufacturing Solutions Ltd',
    },
    {
      quote: 'The labour law audit conducted by LegitWork helped us identify critical compliance gaps. Their recommendations were practical and easy to implement.',
      name: 'Amit Patel',
      designation: 'Managing Director',
      company: 'Gujarat Logistics Co.',
    },
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
      category: 'Labour Law',
      title: 'Understanding the New Labour Codes: What Employers Need to Know',
      date: 'March 15, 2024',
      excerpt: 'A comprehensive guide to the four new labour codes and their impact on Indian businesses.',
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
      category: 'Compliance',
      title: 'Top 10 Compliance Mistakes Indian Businesses Make',
      date: 'March 10, 2024',
      excerpt: 'Learn about the most common compliance pitfalls and how to avoid them.',
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      category: 'Payroll',
      title: 'EPF vs NPS: Which is Better for Your Employees?',
      date: 'March 5, 2024',
      excerpt: 'Compare the benefits of EPF and NPS to make informed decisions for your workforce.',
    },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
                Simplifying Labour Law Compliance for Indian Businesses
              </h1>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-8 max-w-2xl">
                End-to-end compliance management, payroll outsourcing, and workforce solutions trusted by 100+ companies across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  data-testid="hero-explore-services-btn"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold btn-scale shadow-lg"
                >
                  Explore Our Services
                  <ArrowRight size={20} weight="bold" className="ml-2" />
                </Link>
                <a
                  href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-consultation-btn"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-secondary border-2 border-secondary px-8 py-4 rounded-full font-semibold btn-scale shadow-lg"
                >
                  Get a Free Consultation
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MHx8fHwxNzc0MTcyOTQ4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Business meeting"
                  className="rounded-2xl shadow-[0_20px_50px_rgba(13,76,115,0.15)]"
                />
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_8px_30px_rgba(13,76,115,0.12)] p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-heading font-black text-primary">{stats.clients}+</div>
                      <div className="text-xs text-[#4A5568] mt-1">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-black text-accent">{stats.experience}+</div>
                      <div className="text-xs text-[#4A5568] mt-1">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(13,76,115,0.06)] p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">{stats.clients}+</div>
                <div className="text-sm text-[#4A5568]">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">{stats.experience}+</div>
                <div className="text-sm text-[#4A5568]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">Pan-India</div>
                <div className="text-sm text-[#4A5568]">Presence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">{stats.compliances}+</div>
                <div className="text-sm text-[#4A5568]">Compliances Managed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZSUyMG1lZXRpbmd8ZW58MHx8fHwxNzc0MTcyOTQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="About LegitWork"
                className="rounded-2xl shadow-[0_20px_50px_rgba(13,76,115,0.12)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">About Us</div>
              <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
                Your Trusted Partner in Labour Law Compliance
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                LegitWork Solutions LLP is a team of seasoned labour law professionals and HR consultants dedicated to helping businesses of all sizes navigate India's complex regulatory landscape. With over 15 years of combined expertise, we provide comprehensive compliance solutions that allow you to focus on your core business growth.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-8">
                From MNCs to SMEs, we serve clients across diverse industries with customized solutions that ensure 100% statutory compliance and seamless workforce management.
              </p>
              <Link
                to="/about"
                data-testid="about-learn-more-link"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                Learn More About Us
                <ArrowRight size={20} weight="bold" className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Services</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
              From compliance management to payroll outsourcing, we offer end-to-end workforce solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`service-card-${index}`}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover border border-[#0D4C73]/10"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-3">{service.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  data-testid={`service-link-${index}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm"
                >
                  Read More
                  <ArrowRight size={16} weight="bold" className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Why Choose Us</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                data-testid={`why-choose-card-${index}`}
                className="flex flex-col items-center text-center p-6 bg-[#F8FAFB] rounded-2xl border border-[#0D4C73]/10 card-hover"
              >
                <motion.div 
                  className="text-accent mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <div className="uppercase text-xs tracking-[0.2em] font-bold text-center text-[#4A5568]">
            Trusted by Leading Organizations
          </div>
        </div>
        <Marquee gradient={false} speed={40}>
          {[
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/7mhvdywi_c145fb77e37a599d2eb2c67a37fa9dc6-removebg-preview.png', name: 'Waaree' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/pwgitspv_images-removebg-preview.png', name: 'Excel' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/ppp6n954_1751364808209-removebg-preview.png', name: 'Reliance' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/851xhrrn_Sun-Pharma-removebg-preview.png', name: 'Sun Pharma' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/467k72qk_1630611619585-removebg-preview.png', name: 'Suvidha India' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/jxanadgj_ADI-removebg-preview.png', name: 'Adani Airports' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/j3o0sg2r_Torrent-Pharma-logo.png', name: 'Torrent Pharma' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/15n56lzf_Zydus_Lifesciences.svg.png', name: 'Zydus Lifesciences' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/ynn8pt40_Coca-Cola_logo.svg.png', name: 'Coca-Cola' },
            { url: 'https://customer-assets.emergentagent.com/job_hr-solutions-india/artifacts/avg2bvjb_Allcargo_Logistics.png', name: 'Allcargo Logistics' },
          ].map((item, num) => (
            <div
              key={num}
              data-testid={`client-logo-${num + 1}`}
              className="mx-8 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
              style={{ minWidth: '180px', height: '100px' }}
            >
              <img 
                src={item.url} 
                alt={item.name}
                className="max-w-full max-h-full object-contain"
                style={{ width: 'auto', height: 'auto', maxHeight: '70px', maxWidth: '150px' }}
              />
            </div>
          ))}
        </Marquee>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`testimonial-card-${index}`}
                className="bg-[#F8FAFB] rounded-2xl p-8 border border-[#0D4C73]/10"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-[#1A1A2E] leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-heading font-bold text-[#1A1A2E]">{testimonial.name}</div>
                  <div className="text-sm text-[#4A5568]">{testimonial.designation}</div>
                  <div className="text-sm text-primary font-semibold mt-1">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Latest Insights</div>
              <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E]">
                From Our Blog
              </h2>
            </div>
            <Link
              to="/blog"
              data-testid="view-all-posts-link"
              className="hidden md:inline-flex items-center text-primary hover:text-primary/80 font-semibold"
            >
              View All Posts
              <ArrowRight size={20} weight="bold" className="ml-2" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`blog-card-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-2">{post.category}</div>
                  <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#4A5568] mb-4">{post.date}</p>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    data-testid={`blog-link-${index}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm"
                  >
                    Read More
                    <ArrowRight size={16} weight="bold" className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-secondary relative grain-texture">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-white mb-6">
              Need Help with Labour Law Compliance?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Talk to our experts today and ensure your business stays 100% compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+917016868061"
                data-testid="cta-phone-link"
                className="text-white text-xl font-bold"
              >
                +91 70168 68061
              </a>
              <span className="text-white/50">|</span>
              <a
                href="mailto:info@legitworksolutions.com"
                data-testid="cta-email-link"
                className="text-white text-xl font-bold"
              >
                info@legitworksolutions.com
              </a>
            </div>
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20need%20help%20with%20labour%20law%20compliance."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-contact-btn"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-semibold btn-scale shadow-lg mt-8"
            >
              Contact Us Now
              <ArrowRight size={20} weight="bold" className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
