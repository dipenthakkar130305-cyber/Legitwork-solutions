import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Lightbulb, ShieldCheck, Heart } from '@phosphor-icons/react';

const About = () => {
  const values = [
    {
      icon: <Handshake size={40} weight="duotone" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
    },
    {
      icon: <Lightbulb size={40} weight="duotone" />,
      title: 'Expertise',
      description: 'Our team brings decades of specialized knowledge in labour law and HR compliance.',
    },
    {
      icon: <Heart size={40} weight="duotone" />,
      title: 'Client-Centricity',
      description: 'Your success is our priority. We tailor solutions to meet your unique business needs.',
    },
    {
      icon: <ShieldCheck size={40} weight="duotone" />,
      title: 'Innovation',
      description: 'We leverage technology and modern practices to deliver efficient compliance solutions.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Mehta',
      designation: 'Founder & Managing Director',
      bio: 'Over 20 years of experience in labour law consulting and compliance management.',
      avatar: 'https://ui-avatars.com/api/?name=Rajesh+Mehta&background=00AEEF&color=fff&size=200',
    },
    {
      name: 'Priya Kapoor',
      designation: 'Head of HR Consulting',
      bio: 'Specializes in organizational development and strategic HR advisory services.',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Kapoor&background=0D4C73&color=fff&size=200',
    },
    {
      name: 'Amit Desai',
      designation: 'Compliance Manager',
      bio: 'Expert in statutory audits and implementation of labour law compliance frameworks.',
      avatar: 'https://ui-avatars.com/api/?name=Amit+Desai&background=00D4AA&color=fff&size=200',
    },
    {
      name: 'Sneha Patel',
      designation: 'Payroll Operations Lead',
      bio: 'Manages end-to-end payroll processing for 50+ client organizations.',
      avatar: 'https://ui-avatars.com/api/?name=Sneha+Patel&background=00AEEF&color=fff&size=200',
    },
  ];

  const milestones = [
    { year: '2008', title: 'Founded', description: 'LegitWork Solutions LLP established in Ahmedabad' },
    { year: '2012', title: 'First 50 Clients', description: 'Expanded services to manufacturing and IT sectors' },
    { year: '2017', title: 'Pan-India Expansion', description: 'Opened offices in Mumbai, Delhi, and Bangalore' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched tech-enabled compliance tracking platform' },
    { year: '2024', title: '100+ Clients', description: 'Serving diverse industries across India with 500+ compliances managed' },
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">About Us</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Building Trust Through Compliance Excellence
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              We are a team of seasoned labour law professionals and HR consultants committed to simplifying compliance for businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
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
                src="https://images.pexels.com/photos/7654117/pexels-photo-7654117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Our Team"
                className="rounded-2xl shadow-[0_20px_50px_rgba(13,76,115,0.12)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Story</div>
              <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
                Empowering Businesses Since 2008
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                LegitWork Solutions LLP was founded with a singular mission: to help businesses navigate India's complex labour law landscape with confidence and ease. What started as a small consulting firm in Ahmedabad has grown into a trusted pan-India partner for compliance management.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Our team comprises certified labour law experts, HR professionals, and compliance specialists who bring decades of combined experience across diverse industries. From multinational corporations to growing SMEs, we have helped over 100 organizations achieve and maintain 100% statutory compliance.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                We believe that compliance shouldn't be a burden. Through a combination of deep expertise, technology-driven processes, and personalized service, we make compliance simple, transparent, and efficient for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="mission-card"
              className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgba(13,76,115,0.06)] border-l-4 border-primary"
            >
              <Target size={48} weight="duotone" className="text-primary mb-6" />
              <h3 className="font-heading font-black text-2xl text-[#1A1A2E] mb-4">Our Mission</h3>
              <p className="text-[#4A5568] leading-relaxed">
                To simplify labour law compliance and empower businesses to focus on their core operations and growth, while we handle the complexities of regulatory adherence with expertise and efficiency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="vision-card"
              className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgba(13,76,115,0.06)] border-l-4 border-accent"
            >
              <Eye size={48} weight="duotone" className="text-accent mb-6" />
              <h3 className="font-heading font-black text-2xl text-[#1A1A2E] mb-4">Our Vision</h3>
              <p className="text-[#4A5568] leading-relaxed">
                To be India's most trusted and sought-after partner in labour law compliance and workforce solutions, recognized for our integrity, expertise, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Values</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`value-card-${index}`}
                className="bg-[#F8FAFB] rounded-2xl p-8 text-center border border-[#0D4C73]/10 card-hover"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-3">{value.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Team</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Meet Our Experts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`team-card-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover"
              >
                <img src={member.avatar} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.designation}</p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Journey</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Milestones That Define Us
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`milestone-${index}`}
                className="flex items-start mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-sm shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow pt-3">
                  <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">{milestone.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;