import React from 'react';
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/1.jpeg" alt="" className='h-12' />
              <div>
                <span className="block text-xl text-white">JP's</span>
                <span className="block text-xs text-emerald-400 tracking-widest uppercase -mt-1">Cleaning Services</span>
              </div>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Elevating spaces with precision, care, and modern sophistication.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="h-4 w-4 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-4 w-4 text-gray-400 hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6 tracking-wider">Services</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">General Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">End of Tenancy Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Carpet & Steam Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Window Cleaning</a></li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="text-white mb-6 tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6 tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:5551234567" className="flex items-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors group">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>07411444292</span>
                </a>
              </li>
              <li>
                <a href="mailto:concierge@jpselite.com" className="flex items-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors group">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>YNaperez@aol.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} JP's Cleaning Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
