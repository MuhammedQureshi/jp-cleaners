import { motion } from "motion/react";
import { Target, Eye, Award } from "lucide-react";



const sections = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "At JPs Cleaning Services, we are dedicated to providing top-notch local cleaning solutions backed by over 30 years of experience. Our commitment to excellence ensures you receive the best value compared to larger companies without sacrificing quality or reliability.",
  },
  {
    icon: Eye,
    title: "Our Approach",
    content:
      "We showcase our work through photos and videos from various settings ensuring our abilities are transparent.",
  },
  {
    icon: Award,
    title: "Experience",
    content:
      "Our team's extensive background enables us to handle tasks in diverse environments, including residential, commercial, and institutional spaces.",
  },
];

export function WhoWeAre() {

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
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
      </div>

      {/* Decorative Lights */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto" style={{ background: gradientColors.primary }}></div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-gray-100/80 to-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-emerald-500/50 transition-all duration-500 shadow-lg">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="bg-gradient-to-br from-emerald-500 to-green-500 p-4 justify-center rounded-2xl inline-flex items-start mb-6 shadow-lg shadow-emerald-500/50" style={{ background: gradientColors.primary }}
                  >
                    <Icon className="h-8 w-8 text-white"  />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
                    {section.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction" },
            { number: "Local", label: "Community Focused" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-100/80 to-white backdrop-blur-xl rounded-2xl border border-gray-200 shadow-lg" 
            >
              <div className="text-4xl hero-gradient-text to-white-500 bg-clip-text text-transparent mb-2" >
                {stat.number}
              </div>
              <div className="text-gray-700 text-sm" >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}