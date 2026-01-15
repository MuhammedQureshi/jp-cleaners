import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Crown, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl border-b border-white/10 shadow-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute "></div>
              <a href="/">
              <div className="relative">
                <img src="/1.jpeg" alt="" className='h-12 w-12 rounded-2xl' />
              </div>
              </a>
            </div>
            <div>
              <a href="/">
              <span className="block text-2xl tracking-tight text-white">JP's</span>
              <span className="block text-xs tracking-widest text-emerald-400 uppercase -mt-1">Cleaning Services</span>
              </a>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['About', 'Services', 'Why Choose Us', 'Before & After'].map((item, index) => (
                <motion.a
                  key={item}
                    href={`#${item
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-+|-+$/g, '')
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>


          {/* CTA Buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="tel:5551234567" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>07411444292</span>
            </a>
            <a href="#contact">
            <Button className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-black shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/75 transition-all duration-300">
              Book Now
            </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden w-full px-6 py-6 mx-auto flex flex-col gap-4 border-t border-white/10 bg-black"
          >
            {['About', 'Services', 'Why Choose Us', 'Before & After'].map((item) => (
              <a
                key={item}
                href={`#${item
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
                  }`}
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact">
            <Button onClick={() => setIsMenuOpen(false)}   className="bg-gradient-to-r from-emerald-500 to-green-500 text-black w-full">
              Book Now
            </Button>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
