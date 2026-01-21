import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Home, Building2, Factory, School, Coffee, UtensilsCrossed, Briefcase, Trash2, Sparkle, BedDouble, Stethoscope, ShoppingBag } from 'lucide-react';

const servicesList = [
  { name: 'Domestic Cleaning', icon: Home },
  { name: 'Commercial Cleaning', icon: Building2 },
  { name: 'Shops & Factories', icon: Factory },
  { name: 'Public Buildings', icon: Building2 },
  { name: 'Schools & Colleges', icon: School },
  { name: 'Pubs & Cafes Cleaning', icon: Coffee },
  { name: 'Restaurant Cleaning', icon: UtensilsCrossed },
  { name: 'Commercial Carpet Cleaning', icon: Briefcase },
  { name: 'Domestic Carpet Cleaning', icon: Home },
  { name: 'After Builders Cleaning', icon: Trash2 },
  { name: 'Deep Cleaning', icon: Sparkle },
  { name: 'End of Tenancy Cleaning', icon: BedDouble },
  { name: 'Office Cleaning', icon: Briefcase },
  { name: 'Surgery Cleaning', icon: Stethoscope },
  { name: 'Retail Cleaning', icon: ShoppingBag },
];

export function ServicesList() {
  const leftCol = servicesList.filter((_, i) => i % 2 === 0);
  const rightCol = servicesList.filter((_, i) => i % 2 === 1);

        const heroStyles = `
    .social-icon-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px) {
      .social-icons-container {
        right: 10px !important;
        gap: 10px !important;
      }
      
      .social-icon-btn {
        width: 48px !important;
        height: 48px !important;
      }
    }

    .hero-gradient-text {
      background: linear-gradient(135deg, #10b981 0%, #0ea5e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .floating-particle {
      animation: float-up 15s infinite ease-in-out;
    }

    @keyframes float-up {
      0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.5;
      }
      90% {
        opacity: 0.5;
      }
      100% {
        transform: translateY(-500px) translateX(20px);
        opacity: 0;
      }
    }
  `;

    const gradientColors = {
    primary: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    light: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
  };

  return (
    <section id="services" className="py-16 md:py-32 bg-white mt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(5,150,105,0.06),transparent_50%)]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full mb-6" style={{background: gradientColors.primary}}>
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white text-sm tracking-wider uppercase">Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-black mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4"
          >
            {leftCol.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative overflow-hidden p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 border border-gray-200 hover:border-emerald-500/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                  >
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </div>

                    <div className="relative flex items-center gap-4">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/60 transition-all duration-300 relative overflow-hidden"
                        style={{background: gradientColors.primary}}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <Icon className="h-6 w-6 md:h-7 md:w-7 text-white relative z-10" strokeWidth={2.5} />
                        </div>
                      </motion.div>

                      {/* Service Name */}
                      <div className="flex-1 min-w-0">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 block">
                          {service.name}
                        </span>
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4"
          >
            {rightCol.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.05, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative overflow-hidden p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 border border-gray-200 hover:border-emerald-500/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                  >
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                        
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </div>

                    <div className="relative flex items-center gap-4">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/60 transition-all duration-300 relative overflow-hidden"
                                                style={{background: gradientColors.primary}}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <Icon className="h-6 w-6 md:h-7 md:w-7 text-white relative z-10" strokeWidth={2.5} />
                        </div>
                      </motion.div>

                      {/* Service Name */}
                      <div className="flex-1 min-w-0">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 block">
                          {service.name}
                        </span>
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}