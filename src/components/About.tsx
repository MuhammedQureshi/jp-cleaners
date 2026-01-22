import { motion } from "motion/react";
import { Target, Eye, Award, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

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

const serviceAreas = [
  "Liverpool Street",
  "East Street",
  "Brixton",
  "Shoreditch",
  "Camden",
  "Clapham",
  "Westminster",
  "Kensington",
  "Chelsea",
  "Canary Wharf",
  "Hackney",
  "Islington",
  "Southwark",
  "Greenwich",
  "Hammersmith",
  "Wandsworth",
];

export function WhoWeAre() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const gradientColors = {
    primary: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    light: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
  };

  return (
    <section id="about" style={{
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '64px' : '128px',
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, white, white, white)',
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)',
        }}></div>
      </div>

      {/* Decorative Lights */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '40px' : '80px',
        left: isMobile ? '10%' : '25%',
        width: isMobile ? '150px' : '256px',
        height: isMobile ? '150px' : '256px',
        background: 'rgba(16, 185, 129, 0.1)',
        borderRadius: '9999px',
        filter: 'blur(64px)',
      }}></div>
      <div style={{
        position: 'absolute',
        top: isMobile ? '80px' : '160px',
        right: isMobile ? '10%' : '25%',
        width: isMobile ? '200px' : '384px',
        height: isMobile ? '200px' : '384px',
        background: 'rgba(34, 197, 94, 0.05)',
        borderRadius: '9999px',
        filter: 'blur(64px)',
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 16px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '80px',
          }}
        >
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 6vw, 4.5rem)',
            color: '#111827',
            marginBottom: isMobile ? '16px' : '24px',
            fontWeight: '700',
            lineHeight: '1.2',
          }}>
            Who We Are
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: gradientColors.primary,
            margin: '0 auto',
          }}></div>
        </motion.div>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: isMobile ? '32px' : '48px',
          marginBottom: isMobile ? '48px' : '80px',
        }}
        className="lg:grid-cols-2">
          {/* Left Column - Who We Are Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '32px' }}>
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 20 : 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(to bottom right, rgba(243, 244, 246, 0.8), white)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: isMobile ? '20px' : '24px',
                    padding: isMobile ? '24px' : '32px',
                    border: '1px solid rgb(229, 231, 235)',
                    transition: 'all 0.5s',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: isMobile ? '16px' : '20px',
                      flexDirection: isMobile ? 'column' : 'row',
                    }}>
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        style={{
                          background: gradientColors.primary,
                          padding: isMobile ? '14px' : '16px',
                          borderRadius: isMobile ? '14px' : '16px',
                          display: 'inline-flex',
                          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.5)',
                          flexShrink: 0,
                        }}
                      >
                        <Icon style={{ height: isMobile ? '28px' : '32px', width: isMobile ? '28px' : '32px', color: 'white' }} />
                      </motion.div>

                      <div style={{ flex: 1 }}>
                        {/* Title */}
                        <h3 style={{
                          fontSize: isMobile ? '20px' : '24px',
                          color: '#111827',
                          marginBottom: isMobile ? '8px' : '12px',
                          fontWeight: '600',
                        }}>
                          {section.title}
                        </h3>

                        {/* Content */}
                        <p style={{
                          color: '#4B5563',
                          lineHeight: '1.75',
                          fontSize: isMobile ? '15px' : '16px',
                        }}>
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: isMobile ? 0.3 : 0 }}
          >
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(243, 244, 246, 0.8), white)',
              backdropFilter: 'blur(12px)',
              borderRadius: isMobile ? '20px' : '24px',
              padding: isMobile ? '28px' : '40px',
              border: '1px solid rgb(229, 231, 235)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}>
              {/* Header */}
              <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '16px',
                  marginBottom: isMobile ? '12px' : '16px',
                }}>
                  <div style={{
                    background: gradientColors.primary,
                    padding: isMobile ? '10px' : '12px',
                    borderRadius: isMobile ? '10px' : '12px',
                    display: 'inline-flex',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.5)',
                  }}>
                    <MapPin style={{ height: isMobile ? '24px' : '28px', width: isMobile ? '24px' : '28px', color: 'white' }} />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '22px' : '28px',
                    color: '#111827',
                    fontWeight: '600',
                  }}>
                    Areas We Serve
                  </h3>
                </div>
                <p style={{
                  color: '#6B7280',
                  lineHeight: '1.75',
                  fontSize: isMobile ? '14px' : '16px',
                }}>
                  Proudly serving London and surrounding areas with professional cleaning services
                </p>
              </div>

              {/* Service Areas Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? '10px' : '12px',
              }}>
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.02, x: isMobile ? 0 : 4 }}
                  >
                    <div style={{
                      background: 'white',
                      padding: isMobile ? '14px 18px' : '16px 20px',
                      borderRadius: isMobile ? '10px' : '12px',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        <div style={{
                          width: isMobile ? '6px' : '8px',
                          height: isMobile ? '6px' : '8px',
                          borderRadius: '9999px',
                          background: gradientColors.primary,
                          flexShrink: 0,
                        }}></div>
                        <span style={{
                          color: '#374151',
                          fontSize: isMobile ? '14px' : '15px',
                          fontWeight: '500',
                        }}>
                          {area}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div style={{
                marginTop: isMobile ? '24px' : '32px',
                padding: isMobile ? '16px' : '20px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1))',
                borderRadius: isMobile ? '12px' : '16px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}>
                <p style={{
                  color: '#374151',
                  fontSize: isMobile ? '13px' : '14px',
                  textAlign: 'center',
                  lineHeight: '1.6',
                }}>
                  Don't see your area? <strong style={{ color: '#10b981' }}>Contact us</strong> - we're expanding our service areas regularly!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: isMobile ? '16px' : '24px',
            marginTop: isMobile ? '48px' : '80px',
          }}
          className="md:grid-cols-4"
        >
          {[
            { number: "30+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction" },
            { number: "Local", label: "Community Focused" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? 0 : -4 }}
            >
              <div style={{
                textAlign: 'center',
                padding: isMobile ? '24px 16px' : '32px 24px',
                background: 'linear-gradient(to bottom right, rgba(243, 244, 246, 0.8), white)',
                backdropFilter: 'blur(12px)',
                borderRadius: isMobile ? '14px' : '16px',
                border: '1px solid rgb(229, 231, 235)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s',
              }}>
                <div style={{
                  fontSize: isMobile ? '36px' : '48px',
                  background: gradientColors.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                  fontWeight: '700',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: '#374151',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '500',
                }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}