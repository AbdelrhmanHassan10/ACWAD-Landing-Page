import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import acwadLogo from '../../../acwad logo(1)(1).png';
import acwadTextLogo from '../../../acwad_logo_transparent.png';
import './Header.css';

function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hero__top-bar">
        <div className="hero__brand" style={{ marginBottom: 0 }}>
            <Link to="/"><img src={acwadLogo} alt="ACWAD Logo Icon" className="hero__logo-icon" id="acwad-logo" /></Link>
            <div className="hero__brand-text">
                <Link to="/"><img src={acwadTextLogo} alt="ACWAD" style={{ width: '200px', maxWidth: '100%' }} /></Link>
            </div>
        </div>

        <div className="controls-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/book" style={{
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem'
            }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
            </Link>
            
            <button onClick={toggleTheme} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(13,71,161,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                color: theme === 'light' ? '#f5b400' : '#0d47a1',
                padding: 0
            }}>
                {theme === 'light' ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                )}
            </button>
            <div className="lang-toggle" id="lang-toggle" style={{ position: 'relative', top: 'auto', right: 'auto', left: 'auto', margin: 0, flexShrink: 0, display: 'flex' }}>
                <button 
                  className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`} 
                  onClick={() => lang !== 'en' && toggleLanguage()}
                >
                  English
                </button>
                <button 
                  className={`lang-btn ${lang === 'ar' ? 'lang-btn--active' : ''}`} 
                  onClick={() => lang !== 'ar' && toggleLanguage()}
                >
                  العربية
                </button>
            </div>
        </div>
    </div>
  );
}

export default Header;
