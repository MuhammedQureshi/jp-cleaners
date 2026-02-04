import React from 'react';
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/1.jpeg" alt="" className='h-12' />
              <div>
                <span className="block text-xl text-black">JP's</span>
                <span className="block text-xs text-emerald-600 tracking-widest uppercase -mt-1">Cleaning Services</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Elevating spaces with precision, care, and modern sophistication.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/servicesjpscleaning"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-emerald-500/20 border border-gray-200 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="h-4 w-4 text-gray-600 hover:text-emerald-600 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/servicesjpscleaning"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-emerald-500/20 border border-gray-200 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-4 w-4 text-gray-600 hover:text-emerald-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-black mb-6 tracking-wider">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">General Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">End of Tenancy Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Carpet & Steam Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Window Cleaning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black mb-6 tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:07411444292" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>07424651270</span>
                </a>
              </li>
              <li>
                <a href="mailto:services.jpcleaning@outlook.com" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors group">
                  <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>services.jpcleaning@outlook.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} JP's Cleaning Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}