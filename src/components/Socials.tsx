import React from 'react';
import { MessageCircle, Phone, Mail, Instagram, Send } from 'lucide-react';

const FixedSocialIcons = () => {
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
  });

  const iconButtonHoverStyle = `
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
  `;

  const icons = [
    {
      icon: Send,
      bg: 'linear-gradient(135deg, #0088cc, #0099dd)',
      link: 'https://t.me/yourhandle',
      label: 'Telegram',
    },
    {
      icon: MessageCircle,
      bg: 'linear-gradient(135deg, #25D366, #20c95a)',
      link: 'https://wa.me/07424651270',
      label: 'WhatsApp',
    },
    {
      icon: Instagram,
      bg: 'linear-gradient(135deg, #E1306C, #C13584)',
      link: 'https://instagram.com/yourprofile',
      label: 'Instagram',
    },
    {
      icon: Phone,
      bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
      link: 'tel:07424651270',
      label: 'Phone',
    },
    {
      icon: Mail,
      bg: 'linear-gradient(135deg, #0891b2, #0e7490)',
      link: 'mailto:services.jpcleaning@outlook.com',
      label: 'Email',
    },
  ];

  return (
    <>
      <style>{iconButtonHoverStyle}</style>
      <div className="social-icons-container" style={containerStyle}>
        {icons.map((item, index) => {
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
    </>
  );
};

export default FixedSocialIcons;