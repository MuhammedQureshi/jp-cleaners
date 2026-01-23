import { useState } from 'react';
import { ArrowRight, Award, Shield, Sparkles, Star, MessageCircle, Phone, Mail, Instagram, Send } from 'lucide-react';

export function Hero() {
  const gradientColors = {
    primary: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
    secondary: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    light: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
  };

  // Fixed Social Icons
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 9999,
  };

  const iconButtonStyle = (bgColor: string): React.CSSProperties => ({
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 'none',
    textDecoration: 'none',
  });

  const socialIcons = [
    { icon: Send, bg: 'linear-gradient(135deg, #0088cc, #0099dd)', link: 'https://t.me/yourhandle', label: 'Telegram' },
    { icon: MessageCircle, bg: 'linear-gradient(135deg, #25D366, #20c95a)', link: 'https://wa.me/447411444292', label: 'WhatsApp' },
    { icon: Instagram, bg: 'linear-gradient(135deg, #E1306C, #C13584)', link: 'https://instagram.com/yourprofile', label: 'Instagram' },
    { icon: Phone, bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', link: 'tel:07411444292', label: 'Phone' },
    { icon: Mail, bg: 'linear-gradient(135deg, #0891b2, #0e7490)', link: 'mailto:services.jpcleaning@outlook.com', label: 'Email' },
  ];

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

  return (
    <>
      <style>{heroStyles}</style>
      
      {/* Fixed Social Icons */}
      <div className="social-icons-container" style={containerStyle}>
        {socialIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={iconButtonStyle(item.bg)}
              title={item.label}
            >
              <Icon size={24} color="white" strokeWidth={2} />
            </a>
          );
        })}
      </div>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'white',
      }}>
        {/* Background with Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          <img
            src="https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3MzExOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury interior"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'brightness(0.7) contrast(1)',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 20%, rgba(16,85,129,0.3) 50%, rgba(14,165,233,0.15) 100%)',
          }}></div>
        </div>

        {/* Floating Particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: i % 2 === 0 ? '#10b981' : '#0ea5e9',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '128px 16px',
          width: '100%',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center',
          }}>
            <div>
              {/* Premium Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: gradientColors.light,
                border: '2px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '9999px',
                marginBottom: '32px',
              }}>
                <Star style={{ width: '16px', height: '16px', color: '#10b981', fill: '#10b981' }} />
                <span style={{
                  color: '#10b981',
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  20% off for new customers
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
              }}>
                <span style={{ display: 'block', color: '#111827' }}>Shining Cleanliness</span>
                <span className="hero-gradient-text" style={{ display: 'block' }}>
                  Awaits You
                </span>
              </h1>

              <p style={{
                fontSize: '20px',
                color: '#374151',
                marginBottom: '48px',
                maxWidth: '600px',
                lineHeight: '1.8',
              }}>
                Reliable cleaning services that leave every place fresh, neat, and tidy. Your satisfaction is our priority.
              </p>

              {/* Premium Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '48px',
              }}>
                {[
                  { icon: Award, label: '5+ Years' },
                  { icon: Shield, label: 'Insured' },
                  { icon: Sparkles, label: '5-Star Rated' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{
                        background: gradientColors.light,
                        border: '2px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '16px',
                        padding: '16px',
                        marginBottom: '8px',
                        display: 'inline-flex',
                      }}>
                        <Icon style={{ width: '24px', height: '24px', color: '#10b981' }} />
                      </div>
                      <p style={{ color: '#111827', fontSize: '14px', fontWeight: '500' }}>{item.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <a href="#contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '16px 32px',
                    background: gradientColors.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.3)';
                  }}>
                    Book Now
                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                  </button>
                </a>
                <a href="#services" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#10b981',
                    border: '2px solid #10b981',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}>
                    View Services
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(16, 185, 129, 0.5)',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '8px',
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              background: gradientColors.primary,
              borderRadius: '9999px',
              animation: 'scroll-bounce 1.5s infinite',
            }}></div>
          </div>
        </div>
      </section>
    </>
  );
}