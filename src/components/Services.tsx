import { Card } from './ui/card';
import { Home, Building2, Sparkles, Wind, Sofa, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Home,
    title: 'General Cleaning',
    description: 'Maintain a fresh, healthy, and organised home with our detailed general cleaning service.',
    image: 'https://plus.unsplash.com/premium_photo-1678742388597-d9d76a759d14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    features: ['Kitchen & surface wipe-downs', 'Dust removal & vacuuming', 'Bathroom sanitisation', 'Eco-friendly products'],
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'A complete top-to-bottom clean that revitalises your space and restores pristine freshness.',
    image: 'https://realpristinesolutions.com/wp-content/uploads/2024/04/deep-clean.jpeg',
    features: ['Full home disinfection', 'Appliance & furniture care', 'Bathroom descaling', 'Detailed surface treatment'],
  },
  {
    icon: ClipboardCheck,
    title: 'End of Tenancy Cleaning',
    description: 'Professional deep clean to help secure your deposit and leave the property move-in ready.',
    image: 'https://crowncleaners.org.uk/wp-content/uploads/2020/03/end-of-lease-cleaning-homepage.jpg',
    features: ['Full property clean', 'Kitchen & appliance deep clean', 'Bathroom descaling', 'Floor care & disinfection'],
  },
  {
    icon: Sofa,
    title: 'Carpet & Steam Cleaning',
    description: 'Advanced steam cleaning to refresh carpets, remove odours, and extend fabric life.',
    image: 'https://www.donau.co.uk/wp-content/uploads/2020/07/raintech-home-services-carpet-cleaning-services-page-main-1.jpg',
    features: ['Stain & odour removal', 'Deep steam sanitisation', 'Fast drying process', 'Eco-safe technology'],
  },
  {
    icon: Wind,
    title: 'Window Cleaning',
    description: 'Crystal-clear results inside and out using purified water and safe extension systems.',
    image: 'https://saubercare.co.uk/wp-content/uploads/2021/02/sauber-30-scaled.jpg',
    features: ['Streak-free shine', 'Interior & exterior cleaning', 'Frame & sill detailing', 'Chemical-free finish'],
  },
];


export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Premium Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Curated Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Each service meticulously crafted to exceed the expectations of the most discerning clientele
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 right-6 bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-2xl shadow-lg shadow-emerald-500/50">
                      <Icon className="h-6 w-6 text-black" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* <a
                      href="#contact"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a> */}
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
