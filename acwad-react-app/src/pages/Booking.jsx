import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import './Booking.css';

function Booking({ type }) {
  const { lang } = useLanguage();
  const { courseId } = useParams();

  const isKidsContext = type === 'kids' || ['scratch', 'python', 'pictoblox'].includes(courseId);
  const [activeTrack, setActiveTrack] = useState(isKidsContext ? 'kids' : 'adults');

  useEffect(() => {
    setActiveTrack(isKidsContext ? 'kids' : 'adults');
  }, [isKidsContext]);

  const isKids = activeTrack === 'kids';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="booking-page">
      <Header />
      
      <main className="hero-container">
        <div className="hero-content">
            <div className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                <span>{lang === 'ar' ? 'مقاعد محدودة متاحة!' : 'Limited Seats Available!'}</span>
            </div>
            
            <h1 className="hero-title" dir="auto">
                {lang === 'ar' 
                    ? (isKids ? 'اصنع من طفلك مبدعاً يقود ' : 'انطلق نحو مستقبلك في عالم ') 
                    : (isKids ? 'Make your child a creator who leads the ' : 'Launch your career in the ')}
                <span className={lang === 'ar' ? 'text-highlight-orange' : 'text-highlight'}>
                    {lang === 'ar' 
                        ? (isKids ? 'المستقبل' : 'التكنولوجيا') 
                        : (isKids ? 'Future' : 'Tech')}
                </span>
                {lang === 'en' && !isKids && ' world'}
            </h1>
            
            <p className="hero-subtitle" dir="auto">
                {lang === 'ar' 
                    ? (isKids 
                        ? 'البرمجة هي لغة العصر. امنح طفلك فرصة ذهبية لتطوير مهارات التفكير المنطقي وحل المشكلات، ليصبح من صُنّاع التكنولوجيا وليس مجرد مستهلك لها!'
                        : 'سوق العمل يبحث عن المبدعين! اكتسب المهارات التقنية الأكثر طلباً وانضم إلى نخبة المبرمجين عبر تدريب عملي مكثف يختصر عليك سنوات من التعلم الذاتي.') 
                    : (isKids 
                        ? 'Programming is the language of the modern age. Give your child a golden opportunity to develop logical thinking and problem-solving skills to become a creator of technology.'
                        : 'The job market is looking for creators! Acquire the most in-demand technical skills through intensive practical training that saves you years of self-learning.')}
            </p>
            
            <div className="features-list">
                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span>{lang === 'ar' ? 'مشاريع عملية 100%' : '100% Practical Projects'}</span>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span>{lang === 'ar' 
                            ? (isKids ? 'مدربون خبراء' : 'تدريب على يد خبراء') 
                            : (isKids ? 'Expert Instructors' : 'Expert Mentorship')}</span>
                </div>
            </div>
        </div>

        <BookingForm courseId={courseId} activeTrack={activeTrack} onTrackChange={setActiveTrack} />
      </main>
    </div>
  );
}

export default Booking;
