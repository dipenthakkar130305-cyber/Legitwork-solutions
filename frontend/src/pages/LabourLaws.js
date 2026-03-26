import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  MagnifyingGlass,
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

      {/* 29 Central Labour Laws Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Knowledge Base</div>
            <h2 className="font-heading font-black text-3xl lg:text-5xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              The 29 Central Labour Laws<br />(Now Consolidated)
            </h2>
            <p className="text-[#4A5568] text-lg max-w-4xl mx-auto">
              These 29 laws have been subsumed into the four Labour Codes above, effective 21 November 2025. Understanding the original acts helps navigate compliance during the transition period.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A5568]" />
              <input
                type="text"
                placeholder="Search across all 29 labour laws..."
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#0D4C73]/20 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Laws Accordion */}
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Group 1: Code on Wages */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Code on Wages, 2019 (4 Laws)</h3>
                
                <AccordionItem value="wages-1" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Payment of Wages Act, 1936</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Ensures timely payment of wages to employees without unauthorized deductions. Applies to factories and establishments with a wage ceiling. Now universalized under the Wage Code.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wages-2" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Minimum Wages Act, 1948</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Mandates minimum rates of wages for scheduled employments fixed by Central/State governments. The Wage Code introduces a universal floor wage applicable across all sectors.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wages-3" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Payment of Bonus Act, 1965</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Requires payment of annual bonus to employees earning below a prescribed limit in establishments with 20+ employees. Bonus ranges from 8.33% to 20% of wages.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wages-4" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Equal Remuneration Act, 1976</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Prohibits gender-based wage discrimination for same or similar work. Mandates equal pay for men and women and prevents discrimination in recruitment.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Group 2: Industrial Relations Code */}
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-heading font-bold text-xl text-accent mb-4">Industrial Relations Code, 2020 (3 Laws)</h3>
                
                <AccordionItem value="ir-1" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Trade Unions Act, 1926</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides for registration and regulation of trade unions, granting them legal status and immunity for legitimate trade union activities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ir-2" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Industrial Employment (Standing Orders) Act, 1946</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Requires employers in industrial establishments (now 300+ workers under the new Code) to define conditions of employment through standing orders covering classification, shifts, leave, termination etc.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ir-3" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Industrial Disputes Act, 1947</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Governs investigation and settlement of industrial disputes including layoffs, retrenchment, and closure. Establishments with 300+ workers now need prior government permission for retrenchment.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Continuing in next message due to length... */}

              {/* Group 3: Code on Social Security */}
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="font-heading font-bold text-xl text-secondary mb-4">Code on Social Security, 2020 (9 Laws)</h3>
                
                <AccordionItem value="ss-1" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Employees' Compensation Act, 1923</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides compensation to employees (or their dependents) for work-related injuries, disabilities, or death. Applicable to specified categories of workers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-2" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Employees' State Insurance (ESI) Act, 1948</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides medical, sickness, maternity, disability and dependent benefits to insured employees through the ESIC. Applies to establishments with 10+ employees (wage limit ₹21,000/month).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-3" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Employees' Provident Funds & Miscellaneous Provisions Act, 1952</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Mandates provident fund, pension and insurance contributions for employees in establishments with 20+ workers. Both employer and employee contribute 12% of basic wages.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-4" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Requires establishments with 25+ employees to notify vacancies to employment exchanges, facilitating job seekers' access to opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-5" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Maternity Benefit Act, 1961</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides 26 weeks of paid maternity leave to women employees in establishments with 10+ workers. Also covers creche facilities and work-from-home provisions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-6" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Payment of Gratuity Act, 1972</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Entitles employees to gratuity after 5 years of continuous service (reduced to 1 year for fixed-term employees under new Code). Calculated at 15 days' wages per year of service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-7" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Cine Workers Welfare Fund Act, 1981</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Establishes a welfare fund for cine (now audio-visual) workers, funded through a cess on film production, providing social security benefits.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-8" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Building and Other Construction Workers Welfare Cess Act, 1996</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Levies a cess (1-2% of construction cost) on building and construction projects to fund welfare measures for construction workers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ss-9" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Unorganised Workers' Social Security Act, 2008</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Framework for social security schemes (life/disability insurance, health, old age protection) for workers in the unorganised sector. The new Code extends this to gig and platform workers.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Group 4: OSH Code - First 7 laws */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-4">Occupational Safety, Health & Working Conditions Code, 2020 (13 Laws)</h3>
                
                <AccordionItem value="osh-1" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Factories Act, 1948</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates health, safety, welfare, and working conditions in factories. Covers working hours (48 hrs/week), overtime (double wages), annual leave, and hazardous process regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-2" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Plantations Labour Act, 1951</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides for welfare of plantation workers including housing, medical facilities, education, and regulation of working conditions in tea, coffee, rubber and other plantations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-3" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Mines Act, 1952</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates working conditions, safety standards, and welfare provisions in mines. Covers working hours, rest intervals, employment restrictions, and mine safety inspections.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-4" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Working Journalists and other Newspaper Employees Act, 1955</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates conditions of service and fixation of wages for working journalists and newspaper employees. Now expanded to include digital and electronic media workers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-5" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Working Journalists (Fixation of Rates of Wages) Act, 1958</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Provides for constitution of wage boards to fix rates of wages for working journalists. Subsumed under the broader provisions of the OSH Code.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-6" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Motor Transport Workers Act, 1961</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates working conditions of motor transport workers including working hours, rest periods, welfare facilities, and limits on daily driving hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-7" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Beedi and Cigar Workers (Conditions of Employment) Act, 1966</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates working conditions of workers engaged in beedi and cigar manufacturing, covering cleanliness, ventilation, working hours, and welfare.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-8" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Contract Labour (Regulation and Abolition) Act, 1970</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates employment of contract labour in establishments with 50+ workers. Requires licensing of contractors and ensures welfare provisions. The new Code bars contractors from core business activities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-9" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Sales Promotion Employees (Conditions of Service) Act, 1976</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates conditions of service for sales promotion employees in pharmaceutical and other notified industries, covering leave, service conditions, and termination.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-10" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Inter-State Migrant Workmen (Regulation of Employment and Conditions of Service) Act, 1979</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Protects inter-state migrant workers by mandating registration, equal wages, suitable accommodation, and journey allowance. The new Code covers all migrant workers including self-migrated.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-11" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Cine-Workers and Cinema Theatre Workers Act, 1981</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates employment conditions of cinema theatre workers covering working hours, leave, wages, and welfare. Audio-visual workers now covered under the OSH Code.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-12" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Dock Workers (Safety, Health and Welfare) Act, 1986</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Ensures safety standards, health provisions, and welfare measures for workers employed at docks and ports.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="osh-13" className="bg-white border border-[#0D4C73]/10 rounded-xl mb-3 px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-bold text-[#1A1A2E]">The Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act, 1996</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A5568] leading-relaxed">
                    Regulates employment and conditions of service of building and construction workers, mandating safety measures, welfare provisions, and registration with welfare boards.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>

            {/* Transition Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-[#F8FAFB] border-l-4 border-accent p-6 rounded-r-xl"
            >
              <p className="text-[#4A5568] text-sm leading-relaxed">
                <strong className="text-[#1A1A2E]">Transition Note:</strong> The four Labour Codes came into effect on 21 November 2025. During the transition, rules under the original 29 laws continue to apply where Code-specific rules have not yet been notified. Businesses must maintain compliance with both frameworks until full implementation.
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