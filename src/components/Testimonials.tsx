import { useState } from 'react';
import { Card } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Sophie Turner',
    role: 'Homeowner, Chelsea',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=150&h=150&fit=crop',
    rating: 5,
    text: "JP Cleaning brought an incredible freshness to our home. Every detail was handled with precision and care — it felt like stepping into a brand-new space.",
  },
  {
    name: 'Daniel Reed',
    role: 'Managing Director, Reed & Co.',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328b9d46?w=150&h=150&fit=crop',
    rating: 5,
    text: "We use JP Cleaning for our offices, and the results are consistently exceptional. Professional, discreet, and always on schedule — a pleasure to work with.",
  },
  {
    name: 'Amelia Hart',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop',
    rating: 5,
    text: "Their team understands luxury interiors better than most. They treat every finish and fabric with respect — perfect for my clients’ high-end spaces.",
  },
  {
    name: 'Oliver Grant',
    role: 'Property Manager, Kensington',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: "From deep cleans to regular maintenance, JP Cleaning delivers flawless results every time. They’ve quickly become my go-to for all managed properties.",
  },
];


export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)]"></div>

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
            <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" />
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Trusted by the Elite
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover why the most discerning clients choose JP's Premium Cleaning
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 backdrop-blur-xl p-12 md:p-16 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl"></div>

                  {/* Quote Mark */}
                  <div className="absolute top-8 left-8 text-9xl text-emerald-500/10 leading-none">"</div>
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-2 mb-8 justify-center">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-2xl md:text-3xl text-white mb-12 text-center leading-relaxed max-w-3xl mx-auto">
                      {testimonials[currentIndex].text}
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center">
                        <h4 className="text-xl text-white mb-1">{testimonials[currentIndex].name}</h4>
                        <p className="text-emerald-400">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={prev}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white backdrop-blur-sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2 px-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-gradient-to-r from-emerald-400 to-green-500' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={next}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white backdrop-blur-sm"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Client Rating' },
            { value: '98%', label: 'Retention Rate' },
            { value: '100+', label: 'Properties Served' },
            { value: '5+', label: 'Years Excellence' },
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
