import React, { useState, useEffect, useRef } from 'react';
import { Home, Shield, ClipboardList, Hand, Calendar, MessageCircle, PoundSterling, Award } from 'lucide-react';

const CleaningServiceFeatures = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    color: '#111827',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const topSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto 40px',
    gap: '40px',
  };

  const featureStyle = (index: number): React.CSSProperties => ({
    flex: '1 1 280px',
    minWidth: '250px',
    maxWidth: '320px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: visibleItems.has(index) ? 1 : 0,
    transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.6s ease-out ${index * 0.1}s`,
  });

  const iconContainerStyle = (index: number): React.CSSProperties => ({
    marginBottom: '20px',
    color: '#10b981',
    transform: visibleItems.has(index) ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-10deg)',
    transition: `all 0.5s ease-out ${index * 0.1 + 0.2}s`,
  });

  const titleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#111827',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#6b7280',
  };

  const dividerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '40px auto',
    height: '2px',
    background: 'linear-gradient(to right, transparent, #10b981, transparent)',
    position: 'relative',
  };

  const dividerDotStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
    animation: 'pulse 2s ease-in-out infinite',
  };

  const bottomSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '30px',
  };

  const keyframesStyle = `
    @keyframes pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0.6;
      }
    }

    @media (max-width: 768px) {
      .feature-item {
        flex: 1 1 100% !important;
        max-width: 100% !important;
      }
    }
  `;

  const features = [
    {
      icon: Home,
      title: 'YOUR PROPERTY IS SAFE',
      description: 'Comprehensive £10m public liability cover',
    },
    {
      icon: Shield,
      title: '100% SATISFACTION GUARANTEE',
      description: 'If you are not entirely satisfied we will resolve any issue for free',
    },
    {
      icon: ClipboardList,
      title: 'FLEXIBLE TASKS',
      description: 'Your cleaning plan is based on your individual requirements',
    },
  ];

  const bottomFeatures = [
    {
      icon: Hand,
      title: 'EXPERIENCED CLEANERS',
      description: "100% have at least six month's cleaning experience",
    },
    {
      icon: Calendar,
      title: 'FREE REPLACEMENT',
      description: 'When your regular cleaner is unwell or on holiday',
    },
    {
      icon: MessageCircle,
      title: 'BEST CUSTOMER SERVICE',
      description: 'Customers get a direct line to our friendly local customer service team',
    },
    {
      icon: PoundSterling,
      title: 'REASONABLE PRICING',
      description: 'Competitive rates and value deals without hidden charges',
    },
    {
      icon: Award,
      title: 'TOP 5% CLEANERS',
      description: 'We only recruit the best 5% of the cleaners that apply to work with us.',
    },
  ];

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-item"
                data-index={index}
                style={featureStyle(index)}
              >
                <div style={iconContainerStyle(index)}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <div style={titleStyle}>{feature.title}</div>
                <div style={descriptionStyle}>{feature.description}</div>
              </div>
            );
          })}
        </div>

        <div style={dividerStyle}>
          <div style={dividerDotStyle}></div>
        </div>

        <div style={bottomSectionStyle}>
          {bottomFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const adjustedIndex = index + 3;
            return (
              <div
                key={adjustedIndex}
                className="feature-item"
                data-index={adjustedIndex}
                style={featureStyle(adjustedIndex)}
              >
                <div style={iconContainerStyle(adjustedIndex)}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <div style={titleStyle}>{feature.title}</div>
                <div style={descriptionStyle}>{feature.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CleaningServiceFeatures;