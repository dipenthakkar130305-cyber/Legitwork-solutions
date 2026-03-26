import React from 'react';
import { motion } from 'framer-motion';
import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFB] via-white to-[#E6F7FF] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">Contact Us</div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Get in touch with our team for expert guidance on labour law compliance and workforce solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="contact-phone-card"
              className="bg-[#F8FAFB] rounded-2xl p-8 text-center border border-[#0D4C73]/10 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">Phone</h3>
              <a
                href="tel:+917016868061"
                data-testid="contact-phone-link"
                className="text-[#4A5568] hover:text-primary transition-colors"
              >
                +91 70168 68061
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="contact-email-card"
              className="bg-[#F8FAFB] rounded-2xl p-8 text-center border border-[#0D4C73]/10 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <EnvelopeSimple size={32} weight="duotone" className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">Email</h3>
              <a
                href="mailto:info@legitworksolutions.com"
                data-testid="contact-email-link"
                className="text-[#4A5568] hover:text-accent transition-colors"
              >
                info@legitworksolutions.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="contact-address-card"
              className="bg-[#F8FAFB] rounded-2xl p-8 text-center border border-[#0D4C73]/10 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin size={32} weight="duotone" className="text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">Office Address</h3>
              <p className="text-[#4A5568] leading-relaxed">
                A-1028, 10th Floor, Siddhi Vinayak Arcade,<br />
                Opp. A.P.M.C Vasna, Gupta Nagar,<br />
                Vasna, Ahmedabad 380007<br />
                Gujarat, India
              </p>
            </motion.div>
          </div>

          {/* Map and Working Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="google-map-container"
              className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(13,76,115,0.06)] border border-[#0D4C73]/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9977!2d72.5197!3d23.0336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sSarkhej%20-%20Gandhinagar%20Hwy%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LegitWork Solutions Office Location"
              ></iframe>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="working-hours-card"
              className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 shadow-[0_20px_50px_rgba(13,76,115,0.2)] relative grain-texture flex flex-col justify-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Clock size={32} weight="duotone" className="text-white" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white mb-6">Working Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Saturday</span>
                  <span className="text-white font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Sunday</span>
                  <span className="text-accent font-semibold">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading font-black text-3xl lg:text-4xl tracking-tighter leading-none text-[#1A1A2E] mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-[#4A5568] text-lg mb-8">
              Connect with us instantly on WhatsApp for quick responses to your compliance queries.
            </p>
            <a
              href="https://wa.me/917016868061?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20compliance%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-cta-btn"
              className="inline-flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-4 rounded-full font-semibold btn-scale shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
