import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
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
        scrolled ? 'backdrop-blur-xl border-b border-gray-200 shadow-2xl' : ''
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
              <a href="/">
                <div className="relative group">
                  <img src="/1.jpeg" alt="JP's Cleaning Services" className='h-12 w-12 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/50' />
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            </div>
            <div>
              <a href="/" className="group">
                <span className="block text-2xl tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">JP's</span>
                <span className="block text-xs tracking-widest text-emerald-600 uppercase -mt-1 group-hover:text-emerald-700 transition-colors duration-300">Cleaning Services</span>
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
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
            <a href="tel:07411444292" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Phone className="h-4 w-4" />
              <span>07411444292</span>
            </a>
            <a href="#contact">
              <Button className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                Book Now
              </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden w-full px-6 py-6 mx-auto flex flex-col gap-4 border-t border-gray-200 bg-white"
          >
            {['About', 'Services', 'Why Choose Us', 'Before & After'].map((item) => (
              <a
                key={item}
                href={`#${item
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
                  }`}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 py-2 hover:translate-x-2 hover:font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact">
              <Button 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white w-full"
              >
                Book Now
              </Button>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}