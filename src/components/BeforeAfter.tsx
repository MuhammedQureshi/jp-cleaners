import React from 'react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    title: 'Living Room Transformation',
    before: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Forganize-clean%2F2024%2Fwriter-provided%2F2024-02-closing-shift-for-cleaning%2Fclosing-shift-for-cleaning-living-room-before-tagged',
    after: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/7/13/asset/buzzfeed-prod-web-03/sub-buzz-21803-1546886175-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
    description: 'From cluttered to pristine in just 3 hours',
  },
  {
    title: 'Kitchen Deep Clean',
    before: 'https://cdn.apartmenttherapy.info/image/upload/t_before_flag,f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Forganize-clean%2F2024%2Fwriter-provided%2F2024-02-closing-shift-for-cleaning%2Fclosing-shift-for-cleaning-kitchen-before',
    after: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/7/13/asset/buzzfeed-prod-web-02/sub-buzz-17714-1546886127-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
    description: 'Professional deep clean with eco-friendly products',
  },
  {
    title: 'Office Space Revival',
    before: 'https://images.unsplash.com/photo-1694875119129-d79757ef3780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMG1lc3N5JTIwcm9vbXxlbnwxfHx8fDE3NjE2ODQzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    after: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/7/13/asset/buzzfeed-prod-web-02/sub-buzz-18211-1546886501-6.jpg?downsize=600:*&output-format=auto&output-quality=auto',
    description: 'Complete office sanitization and organization',
  },
];

// Slider removed; showing a single image per comparison

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Transformations</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            See The Difference
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Witness the remarkable transformations we deliver.
          </p>
        </motion.div>

        {/* Before/After Comparisons */}
        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div>
                    <div className="relative w-full aspect-[16/12] overflow-hidden rounded-2xl">
                      <ImageWithFallback
                        src={comparison.after}
                        alt={`${comparison.title} - After`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl text-white mb-4">{comparison.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {comparison.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Professional Results</h4>
                          <p className="text-gray-500 text-sm">Industry-leading techniques and equipment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Eco-Friendly Products</h4>
                          <p className="text-gray-500 text-sm">Safe for your family and the environment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-2 rounded-lg flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white mb-1">Satisfaction Guaranteed</h4>
                          <p className="text-gray-500 text-sm">100% quality assurance on every service</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group/link mt-4"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {[
            { value: '100+', label: 'Transformations' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
