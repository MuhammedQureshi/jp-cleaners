import React, { useState, useEffect, useRef } from 'react';
import { Shield, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const ServiceBenefits = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index === 'header') {
              setHeaderVisible(true);
            } else if (index) {
              setVisibleItems((prev) => new Set(prev).add(parseInt(index)));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.benefit-item, .header-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const containerStyle: React.CSSProperties = {
    background: '#000000',
    padding: '80px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  };

  const decorativeCircleStyle: React.CSSProperties = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
    top: '-150px',
    right: '-150px',
    animation: 'float 6s ease-in-out infinite',
  };

  const decorativeCircle2Style: React.CSSProperties = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)',
    bottom: '-100px',
    left: '-100px',
    animation: 'float 8s ease-in-out infinite reverse',
  };

  const contentWrapperStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const headerSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'all 0.8s ease-out',
  };

  const iconBadgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    borderRadius: '30px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
    animation: headerVisible ? 'badge-bounce 0.6s ease-out 0.3s' : 'none',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: '42px',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: '1.2',
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#9ca3af',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const benefitsListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  };

  const benefitItemStyle = (index: number): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '30px',
    background: '#111827',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    opacity: visibleItems.has(index) ? 1 : 0,
    transform: visibleItems.has(index) 
      ? 'translateX(0) scale(1)' 
      : index % 2 === 0 
        ? 'translateX(-50px) scale(0.9)' 
        : 'translateX(50px) scale(0.9)',
    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
    border: '2px solid #1f2937',
    backgroundClip: 'padding-box',
    position: 'relative',
  });

  const iconContainerStyle = (index: number, color: string): React.CSSProperties => ({
    minWidth: '64px',
    height: '64px',
    borderRadius: '16px',
    background: `linear-gradient(135deg, ${color}20 0%, ${color}30 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: visibleItems.has(index) ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)',
    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15 + 0.2}s`,
    boxShadow: `0 4px 15px ${color}30`,
  });

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '10px',
    lineHeight: '1.4',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#9ca3af',
    lineHeight: '1.7',
  };

  const bulletStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    borderRadius: '50%',
    marginTop: '12px',
    animation: 'pulse-dot 2s ease-in-out infinite',
    boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
  };

  const keyframesStyle = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes pulse-dot {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.4);
        opacity: 0.6;
      }
    }

    @keyframes badge-bounce {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .benefit-item:hover {
      transform: translateY(-5px) scale(1.02) !important;
      box-shadow: 0 12px 40px rgba(16, 185, 129, 0.2) !important;
      border-color: #10b981 !important;
    }

    @media (max-width: 768px) {
      .benefit-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 25px 20px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 32px !important;
      }
      
      h2 {
        font-size: 16px !important;
      }
    }
  `;

  const benefits = [
    {
      icon: Shield,
      color: '#10b981',
      title: 'Experienced and Trusted Team',
      description: 'All staff are background-checked and insured',
    },
    {
      icon: Calendar,
      color: '#10b981',
      title: 'Flexible Scheduling',
      description: 'We work around your busy lifestyle',
    },
    {
      icon: CheckCircle,
      color: '#10b981',
      title: '100% Satisfaction Guaranteed',
      description: "If you're not completely satisfied with your cleaning, let us know within 24 hours and we'll return to re-clean at no cost.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        <div style={decorativeCircleStyle}></div>
        <div style={decorativeCircle2Style}></div>
        
        <div style={contentWrapperStyle}>
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
            <span className="text-emerald-400 text-sm tracking-wider uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Service Benefits
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our professional cleaning services. 
            We're committed to delivering exceptional results every time.
          </p>
        </motion.div>

          <div style={benefitsListStyle}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-item"
                  data-index={index}
                  style={benefitItemStyle(index)}
                >
                  <div style={bulletStyle}></div>
                  <div style={iconContainerStyle(index, benefit.color)}>
                    <Icon size={32} color={benefit.color} strokeWidth={2.5} />
                  </div>
                  <div style={textContainerStyle}>
                    <div style={titleStyle}>{benefit.title}</div>
                    <div style={descriptionStyle}>{benefit.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;