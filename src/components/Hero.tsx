import { Button } from './ui/button';
import { ArrowRight, Award, Shield, Sparkles, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react'

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3MzExOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-emerald-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" />
              <span className="text-emerald-400 text-sm tracking-wider uppercase">20% off for new customers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl mb-6"
            >
              <span className="block text-white">Shining Cleanliness</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Awaits You
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed"
            >
              Reliable cleaning services that leave every place fresh, neat, and tidy. Your satisfaction is our priority.
            </motion.p>

            {/* Premium Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Award, label: '5+ Years' },
                { icon: Shield, label: 'Insured' },
                { icon: Sparkles, label: '5-Star Rated' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-4 backdrop-blur-sm mb-2 inline-flex">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#services">
              <Button 
                size="lg"
                className="bg-gradient-to-r w-full from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-black shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/75 transition-all duration-300 group"
              >
                Book Now 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
              <a href="#services">
              <Button 
                size="lg"
                variant="outline"
                className="border-emerald-500/50 w-full text-emerald-400 hover:bg-emerald-500/10 backdrop-blur-sm"
              >
                View Services
              </Button>
              </a>
            </motion.div>
          </div>

          {/* Floating Stats Cards */}
          <div className="hidden lg:block relative h-[600px]">
            {[
              { number: '5+', label: 'Years of Excellence', delay: 0.2, position: 'top-0 right-0' },
              { number: '100+', label: 'Luxury Properties', delay: 0.4, position: 'top-32 left-0' },
              { number: '98%', label: 'Client Retention', delay: 0.6, position: 'bottom-32 right-0' },
              { number: '24/7', label: 'Available', delay: 0.8, position: 'bottom-0 left-0' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute ${stat.position} w-48`}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                  <div className="text-5xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Center Decorative Element */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-emerald-500/20 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-500/10 rounded-full"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-emerald-400 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
