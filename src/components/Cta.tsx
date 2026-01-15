import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight, Sparkles, Star } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    padding: '100px 20px',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const backgroundOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  };

  const contentWrapperStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  const gradientBorderStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #10b981, #059669, #10b981)',
    padding: '3px',
    borderRadius: '30px',
    boxShadow: '0 0 60px rgba(16, 185, 129, 0.4)',
    animation: 'glow 3s ease-in-out infinite',
  };

  const innerContainerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    borderRadius: '28px',
    padding: '60px 40px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const sparkleContainerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(90deg, #10b981, #059669)',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    marginBottom: '20px',
    animation: 'bounce 2s ease-in-out infinite',
    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: '56px',
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: '20px',
    lineHeight: '1.2',
    background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'fadeInUp 1s ease-out 0.3s backwards',
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#9ca3af',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
    animation: 'fadeInUp 1s ease-out 0.5s backwards',
  };

  const ctaButtonsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
    animation: 'fadeInUp 1s ease-out 0.7s backwards',
  };

  const primaryButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    padding: '18px 40px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'transparent',
    color: '#10b981',
    padding: '18px 40px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '700',
    border: '2px solid #10b981',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const trustBadgesStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(16, 185, 129, 0.2)',
    animation: 'fadeInUp 1s ease-out 0.9s backwards',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#9ca3af',
    fontSize: '14px',
  };

  const starStyle: React.CSSProperties = {
    color: '#10b981',
  };

  const particleStyle = (x: number, y: number, delay: number): React.CSSProperties => ({
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: '#10b981',
    borderRadius: '50%',
    top: `${y}%`,
    left: `${x}%`,
    opacity: 0,
    animation: `twinkle 3s ease-in-out ${delay}s infinite`,
    boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
  });

  const keyframesStyle = `
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 60px rgba(16, 185, 129, 0.4);
      }
      50% {
        box-shadow: 0 0 80px rgba(16, 185, 129, 0.6);
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .primary-button:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 15px 50px rgba(16, 185, 129, 0.6) !important;
    }

    .secondary-button:hover {
      background: rgba(16, 185, 129, 0.1);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 36px !important;
      }
      
      .cta-buttons {
        flex-direction: column;
      }
      
      .cta-buttons button, .cta-buttons a {
        width: 100%;
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        {/* Animated particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={particleStyle(particle.x, particle.y, particle.delay)}
          />
        ))}

        <div style={backgroundOverlayStyle} />

        <div style={contentWrapperStyle}>
          <div style={gradientBorderStyle}>
            <div style={innerContainerStyle}>
              {/* Floating sparkle badge */}
              <div style={sparkleContainerStyle}>
                <Sparkles size={16} />
                <span>20% OFF FOR NEW CUSTOMERS</span>
              </div>

              {/* Main heading */}
              <h1 style={mainHeadingStyle}>
                Ready to Experience<br />Spotless Perfection?
              </h1>

              {/* Subheading */}
              <p style={subHeadingStyle}>
                Get your free quote today and discover why thousands of customers trust us with their cleaning needs. Professional service, guaranteed results.
              </p>

              {/* CTA Buttons */}
              <div style={ctaButtonsStyle} className="cta-buttons">
                <button 
                  className="primary-button" 
                  style={primaryButtonStyle}
                  onClick={() => {
                    window.location.href = 'tel:07411444292';
                    }}
                >
                  <Phone size={20} />
                  Book Now
                  <ArrowRight size={20} />
                </button>
                
                <a 
                  className="secondary-button" 
                  style={secondaryButtonStyle}
                  href="mailto:services.jpcleaning@outlook.com"
                >
                  <Mail size={20} />
                  Get Free Quote
                </a>
              </div>

              {/* Trust badges */}
              <div style={trustBadgesStyle}>
                <div style={badgeStyle}>
                  <Star style={starStyle} size={20} fill="#10b981" />
                  <span>5.0 Rating</span>
                </div>
                <div style={badgeStyle}>
                  <span>✓</span>
                  <span>10,000+ Happy Customers</span>
                </div>
                <div style={badgeStyle}>
                  <span>✓</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div style={badgeStyle}>
                  <span>✓</span>
                  <span>Fully Insured & Bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;