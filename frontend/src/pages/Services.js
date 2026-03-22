import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CurrencyCircleDollar,
  Users,
  ChartLineUp,
  MagnifyingGlass,
  Certificate,
  CheckCircle,
  Factory,
  ShoppingCart,
  FirstAid,
  Truck,
  GraduationCap,
  Bank,
  Code,
  Buildings,
  ArrowRight,
} from '@phosphor-icons/react';

const Services = () => {
  const services = [
    {
      id: 'compliance',
      icon: <ShieldCheck size={48} weight="duotone" />,
      title: 'Labour Law Compliance Management',
      description:
        'Comprehensive end-to-end compliance solutions ensuring your business adheres to all central and state labour regulations. We handle everything from registration to ongoing statutory compliance.',
      includes: [
        'Complete compliance assessment and gap analysis',
        'Registration under all applicable labour laws',
        'Timely filing of statutory returns and reports',
        'Maintenance of statutory registers and records',
        'Representation before labour authorities',
        'Regular compliance updates and advisory',
      ],
    },
    {
      id: 'payroll',
      icon: <CurrencyCircleDollar size={48} weight="duotone" />,
      title: 'Payroll Outsourcing & Processing',
      description:
        'Accurate and efficient payroll management services covering salary processing, tax compliance, and statutory deductions. Focus on your core business while we handle your payroll complexities.',
      includes: [
        'Monthly salary processing and disbursement',
        'EPF, ESI, and professional tax calculations',
        'TDS computation and Form 16 generation',
        'Payslip generation and distribution',
        'Year-end tax planning and compliance',
        'MIS reports and analytics',
      ],
    },
    {
      id: 'staffing',
      icon: <Users size={48} weight="duotone" />,
      title: 'Contract Staffing & Manpower Outsourcing',
      description:
        'Flexible and compliant workforce solutions for your temporary and permanent manpower requirements. We handle recruitment, onboarding, and complete statutory compliance for contract workers.',
      includes: [
        'Recruitment and screening of qualified candidates',
        'Onboarding and induction management',
        'Attendance and leave management',
        'Statutory compliance for contract workers',
        'Performance monitoring and management',
        'Exit formalities and documentation',
      ],
    },
    {
      id: 'consulting',
      icon: <ChartLineUp size={48} weight="duotone" />,
      title: 'HR Consulting & Advisory',
      description:
        'Strategic HR guidance on policies, employee relations, performance management, and organizational development. We help you build robust HR frameworks aligned with business goals.',
      includes: [
        'HR policy design and implementation',
        'Employee handbook development',
        'Performance management systems',
        'Compensation and benefits structuring',
        'Employee grievance handling',
        'Organizational restructuring advisory',
      ],
    },
    {
      id: 'audit',
      icon: <MagnifyingGlass size={48} weight="duotone" />,
      title: 'Labour Law Audit & Assessment',
      description:
        'Thorough audits to identify compliance gaps, assess legal risks, and implement corrective measures. Our detailed audit reports help you achieve and maintain 100% statutory compliance.',
      includes: [
        'Comprehensive compliance audit',
        'Review of statutory registers and records',
        'Assessment of legal and financial risks',
        'Gap analysis and recommendations',
        'Action plan for compliance improvement',
        'Post-audit implementation support',
      ],
    },
    {
      id: 'licence',
      icon: <Certificate size={48} weight="duotone" />,
      title: 'Licence & Registration Services',
      description:
        'Expert assistance with obtaining and renewing all required licenses, registrations, and statutory approvals. We ensure timely submissions and adherence to all procedural requirements.',
      includes: [
        'Shops & Establishment registration',
        'Contract Labour (R&A) Act license',
        'EPF and ESI registration',
        'Professional Tax registration',
        'Factory Act license and renewals',
        'Other state-specific registrations',
      ],
    },
  ];

  const industries = [
    { icon: <Code size={32} weight="duotone" />, name: 'IT & Software' },
    { icon: <Factory size={32} weight="duotone" />, name: 'Manufacturing' },
    { icon: <ShoppingCart size={32} weight="duotone" />, name: 'Retail' },
    { icon: <FirstAid size={32} weight="duotone" />, name: 'Healthcare' },
    { icon: <Buildings size={32} weight="duotone" />, name: 'Construction' },
    { icon: <ShoppingCart size={32} weight="duotone" />, name: 'FMCG' },
    { icon: <Truck size={32} weight="duotone" />, name: 'Logistics' },
    { icon: <GraduationCap size={32} weight="duotone" />, name: 'Education' },
    { icon: <Bank size={32} weight="duotone" />, name: 'Banking & Finance' },
  ];

  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Services</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Comprehensive Workforce Solutions
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              From compliance management to payroll outsourcing, we offer end-to-end solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              data-testid={`service-detail-${index}`}
              className={`mb-32 last:mb-0 ${
                index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className={`lg:col-span-7 ${
                  index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className="text-primary mr-4">{service.icon}</div>
                    <div className="font-heading font-black text-5xl lg:text-6xl text-[#0D4C73]/10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[#4A5568] text-lg leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#0D4C73]/10">
                    <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle size={20} weight="fill" className="text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#4A5568]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`get-quote-btn-${index}`}
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold btn-scale shadow-lg mt-8"
                  >
                    Get a Quote
                    <ArrowRight size={20} weight="bold" className="ml-2" />
                  </a>
                </div>

                <div className={`lg:col-span-5 ${
                  index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'
                }`}>
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/photo-${[
                        '1454165804606-c3d57bc86b40',
                        '1460925895917-afdab827c52f',
                        '1521737711867-e3b97375f902',
                        '1552664730-d307ca884978',
                        '1507679799987-c73779587ccf',
                        '1450101499163-c8848c66ca85',
                      ][index]}?w=600&h=700&fit=crop`}
                      alt={service.title}
                      className="rounded-2xl shadow-[0_20px_50px_rgba(13,76,115,0.15)] w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Our Process</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consult', description: 'Initial consultation to understand your requirements' },
              { step: '02', title: 'Assess', description: 'Detailed assessment of your current compliance status' },
              { step: '03', title: 'Implement', description: 'Implementation of tailored compliance solutions' },
              { step: '04', title: 'Monitor', description: 'Ongoing monitoring and proactive compliance management' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`process-step-${index}`}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-black text-2xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Industries</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`industry-card-${index}`}
                className="bg-[#F8FAFB] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-[#0D4C73]/10 card-hover"
              >
                <div className="text-primary mb-3">{industry.icon}</div>
                <p className="font-heading font-bold text-sm text-[#1A1A2E]">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;