import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
      category: 'team',
      label: 'Team Meeting',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      category: 'office',
      label: 'Office Space',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
      category: 'events',
      label: 'Annual Event',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
      category: 'workshops',
      label: 'Workshop Session',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600',
      category: 'team',
      label: 'Client Visit',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600',
      category: 'office',
      label: 'Office Interior',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600',
      category: 'team',
      label: 'Team Collaboration',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
      category: 'workshops',
      label: 'Training Session',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600',
      category: 'events',
      label: 'Corporate Event',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
      category: 'team',
      label: 'Team Discussion',
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
      category: 'office',
      label: 'Workspace',
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
      category: 'events',
      label: 'Seminar',
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'team', label: 'Team' },
    { id: 'office', label: 'Office' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div data-testid="gallery-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Gallery</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              A Glimpse Into Our Work
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Explore our events, team activities, and workplace culture through these moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-[#0D4C73]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                data-testid={`filter-${filter.id}`}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all btn-scale ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-[#F8FAFB] text-[#4A5568] hover:bg-primary/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`gallery-item-${item.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(13,76,115,0.06)] card-hover"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white font-heading font-bold text-lg">{item.label}</p>
                    <p className="text-accent text-xs uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;