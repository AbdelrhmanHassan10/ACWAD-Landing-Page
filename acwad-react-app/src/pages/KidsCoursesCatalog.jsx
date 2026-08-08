import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import { useCourses } from '../context/CoursesContext';
import './CoursesCatalog.css';

function KidsCoursesCatalog() {
  const { lang } = useLanguage();
  const { kidsCourses } = useCourses();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="catalog-page">
      <div className="catalog-glow"></div>
      <Header />
      
      <div className="catalog-header" data-aos="fade-up">
        <h1>
            {lang === 'ar' ? 'اكتشف ' : 'Explore Our '}
            <span className={lang === 'ar' ? 'text-highlight-orange' : 'text-highlight'}>
                {lang === 'ar' ? 'مسارات الأطفال' : 'Kids Tracks'}
            </span>
        </h1>
        <p>
            {lang === 'ar' 
                ? 'اختر المسار الذي يناسب طفلك وانطلق في رحلة تعلم ممتعة وعملية تنمي مهارات التفكير المنطقي.'
                : 'Choose the track that fits your child and start a fun and practical learning journey that develops logical thinking skills.'}
        </p>
      </div>

      <div className="courses-grid">
        {kidsCourses.map((course, index) => (
            <a href={course.link} key={course.id} className="course-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="course-card-header">
                    {course.image ? (
                        <div className="course-icon custom-image-icon">
                            <img src={course.image} alt={lang === 'ar' ? course.title.ar : course.title.en} />
                        </div>
                    ) : (
                        <div className={`course-icon ${course.iconClass}`} dangerouslySetInnerHTML={{__html: course.iconSvg}}></div>
                    )}
                    <h3 className="course-title">{lang === 'ar' ? course.title.ar : course.title.en}</h3>
                </div>
                <p className="course-desc">{lang === 'ar' ? course.description.ar : course.description.en}</p>
                
                <div className="course-meta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{lang === 'ar' ? course.duration.ar : course.duration.en}</span>
                </div>
                
                <div className="course-action">
                    <span>{lang === 'ar' ? 'عرض تفاصيل المسار' : 'View Track Details'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {lang === 'ar' 
                            ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></> 
                            : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
                        }
                    </svg>
                </div>
            </a>
        ))}
      </div>
    </div>
  );
}

export default KidsCoursesCatalog;
