import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '07411444292',
    subddetails: 'Available 24/7',
    link: 'tel:07411444292',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'services.jpcleaning@outlook.com',
    subddetails: 'Response within 2 hours',
    link: 'mailto:services.jpcleaning@outlook.com',
  },
  {
    icon: Clock,
    title: 'Availability',
    details: [
      'Mon-Fri: 8am - 9pm',
    ],
    subddetails: '',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Mon-Fri: 8am - 6pm',
    ],
    subddetails: 'Feel free to reach out anytime',
    link: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
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
            <Send className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm tracking-wider uppercase">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-black mb-6">
            Begin Your Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with our concierge team and discover the difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-10 border-gray-200 bg-white shadow-lg">
              <form action="https://formspree.io/f/mrbolyvn" method="POST" className="space-y-6">
                {/* FormSubmit customization */}
                <input type="hidden" name="_subject" value="New JP's Cleaning enquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://jps-cleaning-success.vercel.app/" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">First Name</label>
                    <Input name="firstName" placeholder="John" required className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-emerald-500/50" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">Last Name</label>
                    <Input name="lastName" placeholder="Sterling" required className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-emerald-500/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">Email Address</label>
                  <Input name="email" type="email" placeholder="john@example.com" required className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-emerald-500/50" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">Phone Number</label>
                  <Input name="phone" type="tel" placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-emerald-500/50" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">Service Interest</label>
                  <select name="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-emerald-500/50 transition-colors">
                    <option className="bg-white">General Cleaning</option>
                    <option className="bg-white">Deep Cleaning</option>
                    <option className="bg-white">End of Tenancy Cleaning</option>
                    <option className="bg-white">Carpet & Steam Cleaning</option>
                    <option className="bg-white">Window Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 text-sm tracking-wider uppercase">Property Details</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your property and specific requirements..."
                    className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-emerald-500/50 min-h-32"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/50 group"
                  size="lg"
                >
                  GET A FREE QUOTE
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-gray-500 text-sm text-center">
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="block p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-700 text-sm mb-1">{info.title}</h4>
                      {Array.isArray(info.details) ? (
                        <ul className="text-black mb-1 text-sm">
                          {info.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-black mb-1">{info.details}</p>
                      )}
                      <p className="text-gray-500 text-sm">{info.subddetails}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}