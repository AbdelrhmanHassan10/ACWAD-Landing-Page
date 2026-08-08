import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import { useCourses } from '../context/CoursesContext';
import './CourseDetails.css';

function CourseDetails() {
  const { lang } = useLanguage();
  const { id } = useParams();
  const { adultCourses } = useCourses();
  
  const course = adultCourses.find(c => c.id === id);
  const [activeModule, setActiveModule] = useState(0);

  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(' ');
    if (words.length === 1) return <span className="text-highlight-blue">{title}</span>;
    if (words.length === 2) return <><span className="text-highlight-blue">{words[0]}</span> <span className="text-highlight-orange">{words[1]}</span></>;
    
    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    const middleWords = words.slice(1, -1).join(' ');
    
    return (
        <>
            <span className="text-highlight-blue">{firstWord}</span> {middleWords} <span className="text-highlight-orange">{lastWord}</span>
        </>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <Navigate to="/adults" />;
  }

  return (
    <div className="details-page">
      <Header />
      
      {/* ---------------- PREMIUM HERO SECTION ---------------- */}
      <section className="details-hero-premium">
        <div className="hero-text-content">
            <div className={`course-badge animate-fade-up ${course.iconClass}`}>
                <div className="badge-icon" dangerouslySetInnerHTML={{__html: course.iconSvg}}></div>
                <span>{lang === 'ar' ? 'مسار احترافي' : 'Professional Track'}</span>
            </div>
            
            <h1 className="details-title-premium animate-fade-up delay-100" dir="auto">
                {lang === 'ar' ? formatTitle(course.title.ar) : formatTitle(course.title.en)}
            </h1>
            <p className="details-desc-premium animate-fade-up delay-200">{lang === 'ar' ? course.description.ar : course.description.en}</p>
            
            <div className="details-pills animate-fade-up delay-300">
                <div className="info-pill">
                    <div className="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                    <div className="pill-text">
                        <span className="pill-label">{lang === 'ar' ? 'المدة' : 'Duration'}</span>
                        <span className="pill-value">{lang === 'ar' ? course.duration.ar : course.duration.en}</span>
                    </div>
                </div>
                <div className="info-pill">
                    <div className="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                    <div className="pill-text">
                        <span className="pill-label">{lang === 'ar' ? 'التدريب' : 'Training'}</span>
                        <span className="pill-value">{lang === 'ar' ? 'عملي 100%' : '100% Practical'}</span>
                    </div>
                </div>
                <div className="info-pill">
                    <div className="pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                    <div className="pill-text">
                        <span className="pill-label">{lang === 'ar' ? 'المستوى' : 'Level'}</span>
                        <span className="pill-value">{lang === 'ar' ? 'من الصفر' : 'Beginner to Pro'}</span>
                    </div>
                </div>
            </div>

            <div className="cta-wrapper animate-fade-up delay-400">
                <button 
                    onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })} 
                    className="btn-glow-primary"
                >
                    <span>{lang === 'ar' ? 'احجز مقعدك الآن' : 'Reserve Your Seat'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {lang === 'ar' 
                            ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></> 
                            : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
                        }
                    </svg>
                </button>
            </div>
        </div>
        
        <div className="hero-visual animate-fade-left">
            <div className="hero-visual-image-wrapper">
                {course.image ? (
                    <img src={course.image} alt={course.title.en} className="hero-cover-image" />
                ) : (
                    <div className={`hero-visual-inner ${course.iconClass}`}>
                        <div dangerouslySetInnerHTML={{__html: course.iconSvg}}></div>
                    </div>
                )}
            </div>
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>
        </div>
      </section>

      {/* ---------------- PREMIUM CONTENT SECTIONS ---------------- */}
      <section className="details-content-premium">
        
        {/* Right side in LTR / Left side in RTL - FEATURES */}
        <div className="features-container" data-aos="fade-up">
            <div className="sticky-sidebar">
                <h3 className="section-title-premium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    {lang === 'ar' ? 'مميزات المسار' : 'Track Features'}
                </h3>
                
                <div className="features-cards-grid">
                    {(lang === 'ar' ? course.features.ar : course.features.en).map((feature, index) => (
                        <div key={index} className="feature-card-premium">
                            <div className="feature-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            <p>{feature}</p>
                        </div>
                    ))}
                </div>


                
                <div className="desktop-booking-form" style={{ marginTop: '30px' }}>
                    <BookingForm courseId={course.id} hideTabs={true} />
                </div>
            </div>
        </div>

        {/* Left side in LTR / Right side in RTL - MODULES */}
        <div className="modules-container">
            <h3 className="section-title-premium" data-aos="fade-up">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                {lang === 'ar' ? 'محتوى الدبلومة (Curriculum)' : 'Course Curriculum'}
            </h3>
            
            {course.roadmap ? (
                <div className="roadmap-accordion" data-aos="fade-up">
                    {course.roadmap.map((module, index) => (
                        <div 
                            key={index} 
                            className={`accordion-item ${activeModule === index ? 'active' : ''}`}
                            onClick={() => setActiveModule(activeModule === index ? null : index)}
                        >
                            <div className="accordion-header">
                                <div className="module-index">{String(index + 1).padStart(2, '0')}</div>
                                <h4 className="module-name">{module.title}</h4>
                                <div className="accordion-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                            <div className="accordion-body-wrapper">
                                <div className="accordion-body">
                                    <ul className="roadmap-topics">
                                        {module.topics.map((topic, i) => (
                                            <li key={i}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="curriculum-list" data-aos="fade-up">
                    {course.modules.map((module, index) => (
                        <div key={index} className="curriculum-item">
                            <div className="module-index">{String(index + 1).padStart(2, '0')}</div>
                            <h4 className="module-name">{module}</h4>
                            <div className="module-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </section>

      {/* Hero Text placed at the bottom, full width split layout */}
      <section className="bottom-hero-section" data-aos="fade-up" style={{ padding: '0 20px', maxWidth: '1280px', margin: '60px auto 40px' }}>
            <div className="hero-content course-details-hero-text" style={{ 
                display: 'flex',
                flexDirection: 'row',
                gap: '60px',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
            }}>
                <div className="hero-left-col" style={{ flex: '1 1 400px' }}>
                    <div className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        <span>{lang === 'ar' ? 'مقاعد محدودة متاحة!' : 'Limited Seats Available!'}</span>
                    </div>
                    
                    <h1 className="hero-title" style={{ fontSize: '2.8rem', lineHeight: '1.2', margin: '0' }}>
                        {lang === 'ar' ? 'انطلق نحو مستقبلك في عالم ' : 'Launch your career in the '}
                        <span className={lang === 'ar' ? 'text-highlight-orange' : 'text-highlight'} style={{ display: 'block', marginTop: '8px' }}>
                            {lang === 'ar' ? 'التكنولوجيا' : 'Tech'}
                        </span>
                        {lang === 'en' && ' world'}
                    </h1>
                </div>

                <div className="hero-right-col" style={{ flex: '1.2 1 500px' }}>
                    <p className="hero-subtitle" style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '32px' }}>
                        {lang === 'ar' 
                            ? 'سوق العمل يبحث عن المبدعين! اكتسب المهارات التقنية الأكثر طلباً وانضم إلى نخبة المبرمجين عبر تدريب عملي مكثف يختصر عليك سنوات من التعلم الذاتي. بنهاية هذا المسار، ستكون جاهزاً لبناء مشاريع حقيقية والمنافسة بقوة في سوق العمل التكنولوجي المتسارع.' 
                            : 'The job market is looking for creators! Acquire the most in-demand technical skills through intensive practical training that saves you years of self-learning. By the end of this track, you will be ready to build real projects and compete strongly in the fast-paced tech job market.'}
                    </p>
                    
                    <div className="features-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="feature-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{lang === 'ar' ? 'مشاريع عملية 100% لبناء معرض أعمالك' : '100% Practical Projects for your portfolio'}</span>
                        </div>
                        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="feature-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{lang === 'ar' ? 'تدريب تفاعلي ومتابعة على يد خبراء' : 'Interactive training & expert mentorship'}</span>
                        </div>
                        <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="feature-icon" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{lang === 'ar' ? 'مرونة في التعلم ووصول مدى الحياة' : 'Flexible learning & lifetime access'}</span>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}

export default CourseDetails;
