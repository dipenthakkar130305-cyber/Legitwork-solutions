import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CurrencyCircleDollar,
  Handshake,
  ShieldCheck,
  FirstAid,
  Briefcase,
  Certificate,
  Bank,
  Baby,
  ArrowRight,
} from '@phosphor-icons/react';

const LabourLaws = () => {
  const labourCodes = [
    {
      id: 'wages',
      title: 'Code on Wages, 2019',
      description:
        'Consolidates laws relating to wages and bonus. Covers payment of wages, minimum wages, timely payment, and bonus to employees. Applicable to all employees across organized and unorganized sectors.',
      keyPoints: [
        'Universal minimum wage for all workers',
        'Timely payment of wages (before 7th of next month)',
        'Mandatory bonus provisions',
        'Equal remuneration for men and women',
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial Relations Code, 2020',
      description:
        'Consolidates laws relating to trade unions, conditions of employment, investigation and settlement of industrial disputes. Aims to streamline the process of dispute resolution and promote harmonious industrial relations.',
      keyPoints: [
        'Standing orders for establishments with 300+ workers',
        'Prior government permission for layoffs/retrenchment in units with 300+ workers',
        'Simplified trade union registration',
        'Provisions for strike and lockout regulations',
      ],
    },
    {
      id: 'social-security',
      title: 'Code on Social Security, 2020',
      description:
        'Consolidates nine laws related to social security including EPF, ESI, gratuity, and maternity benefits. Extends social security benefits to gig and platform workers for the first time.',
      keyPoints: [
        'EPF and ESI coverage for all eligible workers',
        'Gratuity for employees completing 5 years of service',
        'Maternity benefits (26 weeks paid leave)',
        'Social security for gig and platform workers',
      ],
    },
    {
      id: 'ohs',
      title: 'Occupational Safety, Health & Working Conditions Code, 2020',
      description:
        'Consolidates 13 laws related to safety, health, and working conditions. Covers all establishments and extends provisions previously limited to specific sectors to all employees including contract and migrant workers.',
      keyPoints: [
        'Safe and healthy working environment for all workers',
        'Regulation of working hours, leave, and overtime',
        'Special provisions for women, children, and contract workers',
        'Mandatory registration for inter-state migrant workers',
      ],
    },
  ];

  const complianceAreas = [
    {
      icon: <Bank size={32} weight="duotone" />,
      title: 'EPF & ESI',
      description: 'Employee Provident Fund and Employee State Insurance registration and compliance',
    },
    {
      icon: <CurrencyCircleDollar size={32} weight="duotone" />,
      title: 'Minimum Wages',
      description: 'Adherence to state-wise minimum wage rates and timely revisions',
    },
    {
      icon: <Handshake size={32} weight="duotone" />,
      title: 'Gratuity & Bonus',
      description: 'Payment of gratuity and bonus as per statutory requirements',
    },
    {
      icon: <Briefcase size={32} weight="duotone" />,
      title: 'Contract Labour Regulations',
      description: 'Compliance with Contract Labour (R&A) Act for contract workers',
    },
    {
      icon: <Certificate size={32} weight="duotone" />,
      title: 'Shops & Establishment Act',
      description: 'Registration and compliance with state Shops & Establishment laws',
    },
    {
      icon: <Baby size={32} weight="duotone" />,
      title: 'Maternity Benefits',
      description: 'Compliance with Maternity Benefit Act including 26 weeks of paid leave',
    },
    {
      icon: <ShieldCheck size={32} weight="duotone" />,
      title: 'Professional Tax',
      description: 'Registration and payment of professional tax as per state laws',
    },
    {
      icon: <FirstAid size={32} weight="duotone" />,
      title: 'Workplace Safety',
      description: 'Adherence to occupational safety and health regulations',
    },
  ];

  return (
    <div data-testid="labour-laws-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Labour Laws</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Understanding Indian Labour Laws
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Navigate the complex regulatory framework with confidence and ensure your business stays compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#4A5568] text-lg leading-relaxed">
              India has historically had over 29 central labour laws and numerous state-specific regulations. To simplify this complex landscape, the Government of India has consolidated these into{' '}
              <span className="font-bold text-primary">four comprehensive labour codes</span>. These new codes aim to improve ease of doing business while ensuring adequate protection for workers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Four Labour Codes */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">New Framework</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              The Four Labour Codes
            </h2>
          </motion.div>

          <Tabs defaultValue="wages" className="max-w-6xl mx-auto" data-testid="labour-codes-tabs">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              {labourCodes.map((code, index) => (
                <TabsTrigger
                  key={code.id}
                  value={code.id}
                  data-testid={`tab-${code.id}`}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-[#1A1A2E] rounded-xl px-4 py-3 font-semibold text-sm shadow-sm border border-[#0D4C73]/10 hover:border-primary transition-all"
                >
                  {code.title.split(',')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {labourCodes.map((code) => (
              <TabsContent key={code.id} value={code.id} data-testid={`content-${code.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_rgba(13,76,115,0.06)] border border-[#0D4C73]/10"
                >
                  <h3 className="font-heading font-black text-2xl lg:text-3xl text-[#1A1A2E] mb-4">{code.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed mb-6">{code.description}</p>
                  <div className="border-t border-[#0D4C73]/10 pt-6">
                    <h4 className="font-heading font-bold text-lg text-[#1A1A2E] mb-4">Key Provisions:</h4>
                    <ul className="space-y-3">
                      {code.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <ShieldCheck size={20} weight="fill" className="text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#4A5568]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Compliance Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Compliance Areas</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Key Compliance Requirements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                data-testid={`compliance-card-${index}`}
                className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#0D4C73]/10 card-hover text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{area.icon}</div>
                <h3 className="font-heading font-bold text-base text-[#1A1A2E] mb-2">{area.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-secondary to-primary text-white rounded-2xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(13,76,115,0.2)] relative grain-texture"
            >
              <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none mb-6">
                Why Compliance Matters
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Non-compliance with labour laws can expose your business to serious risks including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span className="text-white/90"><strong className="text-white">Heavy fines and penalties</strong> imposed by labour authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span className="text-white/90"><strong className="text-white">Legal action</strong> including prosecution of company directors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span className="text-white/90"><strong className="text-white">Business closure</strong> or suspension of operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span className="text-white/90"><strong className="text-white">Reputational damage</strong> affecting client relationships and business prospects</span>
                </li>
              </ul>
              <p className="text-white/90 text-lg leading-relaxed">
                Proactive compliance not only protects your business from these risks but also fosters a positive work environment, improves employee satisfaction, and strengthens your reputation as a responsible employer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Not Sure if Your Business is Fully Compliant?
            </h2>
            <p className="text-[#4A5568] text-lg mb-8 max-w-2xl mx-auto">
              Get a comprehensive labour law audit from our experts and identify potential compliance gaps.
            </p>
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20labour%20law%20audit."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-audit-btn"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-semibold btn-scale shadow-lg"
            >
              Get a Free Labour Law Audit
              <ArrowRight size={20} weight="bold" className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LabourLaws;