import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from '@phosphor-icons/react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
      category: 'Labour Law',
      title: 'Understanding the New Labour Codes: What Employers Need to Know',
      date: 'March 15, 2024',
      excerpt:
        'A comprehensive guide to the four new labour codes that consolidate 29 central labour laws in India. Learn how these codes will impact your business operations and compliance requirements.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
      category: 'Compliance',
      title: 'Top 10 Compliance Mistakes Indian Businesses Make',
      date: 'March 10, 2024',
      excerpt:
        'Discover the most common compliance pitfalls that businesses face and learn practical strategies to avoid them. From documentation errors to statutory filing delays, we cover it all.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      category: 'Payroll',
      title: 'EPF vs NPS: Which is Better for Your Employees?',
      date: 'March 5, 2024',
      excerpt:
        'Compare the benefits, tax implications, and long-term advantages of EPF and NPS to make informed decisions for your workforce retirement planning.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
      category: 'Labour Law',
      title: 'How to Prepare for a Labour Law Audit',
      date: 'February 28, 2024',
      excerpt:
        'A step-by-step checklist to ensure your organization is audit-ready. Learn what documents to prepare, common audit triggers, and how to address compliance gaps.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      category: 'HR Tips',
      title: 'Contract Staffing: Benefits and Legal Framework in India',
      date: 'February 20, 2024',
      excerpt:
        'Understand the legal framework governing contract labour in India, the benefits of contract staffing, and key compliance requirements under the Contract Labour Act.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
      category: 'Compliance',
      title: 'Maternity Benefits Act 2017: A Complete Guide for Employers',
      date: 'February 15, 2024',
      excerpt:
        'Everything employers need to know about the Maternity Benefit (Amendment) Act 2017, including the 26-week paid leave provision, work-from-home options, and crèche facilities.',
    },
  ];

  const categories = ['All', 'Labour Law', 'Compliance', 'Payroll', 'HR Tips'];

  return (
    <div data-testid="blog-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Blog & Insights</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Latest Updates on Labour Law & Compliance
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Stay informed with expert insights, compliance updates, and practical guidance on labour law matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-[#0D4C73]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                data-testid={`category-${category.toLowerCase().replace(' ', '-')}`}
                className="px-6 py-3 rounded-full font-semibold text-sm bg-[#F8FAFB] text-[#4A5568] hover:bg-primary hover:text-white transition-all btn-scale"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`blog-post-${post.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#4A5568] text-sm mb-3">
                    <Calendar size={16} weight="fill" className="mr-2" />
                    {post.date}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <a
                    href="#"
                    data-testid={`read-more-${post.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm"
                  >
                    Read More
                    <ArrowRight size={16} weight="bold" className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-secondary to-primary rounded-2xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(13,76,115,0.2)] relative grain-texture"
          >
            <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-white mb-4">
              Stay Updated on Compliance Changes
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter for the latest labour law updates, compliance alerts, and expert insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                data-testid="newsletter-email-input"
                className="flex-grow px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-accent"
                disabled
              />
              <button
                data-testid="newsletter-subscribe-btn"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold btn-scale shadow-lg whitespace-nowrap"
                disabled
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-xs mt-4">Newsletter feature coming soon</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
