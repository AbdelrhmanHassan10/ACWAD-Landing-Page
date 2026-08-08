import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCourses } from '../context/CoursesContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';
import './BookingForm.css';

function BookingForm({ courseId, hideTabs = false, activeTrack: propActiveTrack, onTrackChange }) {
    const { lang } = useLanguage();
    const { adultCourses, kidsCourses } = useCourses();
    
    const preSelectedAdultCourse = adultCourses.find(c => c.id === courseId);
    const preSelectedKidsCourse = kidsCourses.find(c => c.id === courseId);
    const initialTrack = preSelectedKidsCourse ? 'kids' : 'adults';
    
    const [internalTrack, setInternalTrack] = useState(initialTrack);
    const activeTrack = propActiveTrack || internalTrack;
    const setActiveTrack = onTrackChange || setInternalTrack;
    
    const [isUniOpen, setIsUniOpen] = useState(false);
    const [selectedUni, setSelectedUni] = useState(null);
    
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    
    const [selectedAdultCourse, setSelectedAdultCourse] = useState(
        preSelectedAdultCourse ? {
            id: preSelectedAdultCourse.id,
            titleEn: preSelectedAdultCourse.title.en,
            titleAr: preSelectedAdultCourse.title.ar,
            iconClass: preSelectedAdultCourse.iconClass,
            iconSvg: preSelectedAdultCourse.iconSvg
        } : null
    );
    
    const [selectedKidsCourse, setSelectedKidsCourse] = useState(
        preSelectedKidsCourse ? {
            id: preSelectedKidsCourse.id,
            titleEn: preSelectedKidsCourse.title.en,
            titleAr: preSelectedKidsCourse.title.ar,
            iconClass: preSelectedKidsCourse.iconClass,
            iconSvg: preSelectedKidsCourse.iconSvg
        } : null
    );
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        faculty: '',
        grade: ''
    });
    
    const [phoneError, setPhoneError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('#custom-uni-dropdown')) setIsUniOpen(false);
            if (!e.target.closest('#custom-course-dropdown')) setIsCourseOpen(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    
    const handlePhoneChange = (e) => {
        let val = e.target.value.replace(/\D/g, ''); 
        let hasError = false;
        
        if (val.startsWith('0')) val = val.substring(1);
        if (val.length > 0 && val[0] !== '1') { val = ''; hasError = true; }
        if (val.length > 1 && !['0', '1', '2', '5'].includes(val[1])) { val = val[0]; hasError = true; }
        if (val.length > 10) val = val.substring(0, 10);
        
        setFormData({...formData, phone: val});
        
        if (hasError) {
            setPhoneError(true);
            setTimeout(() => setPhoneError(false), 4000);
        } else if (val.length > 1) {
            setPhoneError(false);
        }
    };
    
    const handleUniSelect = (uniId, titleEn, titleAr, iconClass, iconSvg) => {
        setSelectedUni({ id: uniId, titleEn, titleAr, iconClass, iconSvg });
        setIsUniOpen(false);
    };
    
    const handleCourseSelect = (cId, titleEn, titleAr, iconClass, iconSvg) => {
        if (activeTrack === 'adults') {
            setSelectedAdultCourse({ id: cId, titleEn, titleAr, iconClass, iconSvg });
        } else {
            setSelectedKidsCourse({ id: cId, titleEn, titleAr, iconClass, iconSvg });
        }
        setIsCourseOpen(false);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const currentCourse = activeTrack === 'adults' ? selectedAdultCourse : selectedKidsCourse;
        
        if (!currentCourse) {
            alert(lang === 'ar' ? 'يرجى اختيار المسار' : 'Please select a Track');
            return;
        }
        
        if (activeTrack === 'adults' && !selectedUni) {
            alert(lang === 'ar' ? 'يرجى اختيار الجامعة' : 'Please select University');
            return;
        }
        
        if (phoneError) return;

        setIsSubmitting(true);

        const dataToSave = {
            name: formData.name,
            age: formData.age,
            phone: formData.phone,
            course: currentCourse.id,
            formType: activeTrack === 'adults' ? 'adults_booking' : 'kids_booking',
            timestamp: new Date().toISOString()
        };
        
        if (activeTrack === 'adults') {
            dataToSave.university = selectedUni.id;
            dataToSave.faculty = formData.faculty;
        } else {
            dataToSave.grade = formData.grade;
        }

        try {
            await push(ref(db, 'leads'), dataToSave);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert(lang === 'en' ? 'An error occurred. Please try again.' : 'حدث خطأ، يرجى المحاولة مرة أخرى.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="booking-form-wrapper" id="booking-form">
            {!hideTabs && !isSubmitted && (
                <div className="massive-track-selector">
                    <button 
                        className={`massive-track-btn ${activeTrack === 'adults' ? 'active-adult' : ''}`}
                        onClick={(e) => { e.preventDefault(); setActiveTrack('adults'); }}
                    >
                        <div className="massive-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div className="massive-text">
                            <h4>{lang === 'ar' ? 'مسار الكبار' : 'Adults Track'}</h4>
                            <span>{lang === 'ar' ? '+18 سنة' : '+18 Years'}</span>
                        </div>
                    </button>
                    <button 
                        className={`massive-track-btn ${activeTrack === 'kids' ? 'active-kid' : ''}`}
                        onClick={(e) => { e.preventDefault(); setActiveTrack('kids'); }}
                    >
                        <div className="massive-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                        </div>
                        <div className="massive-text">
                            <h4>{lang === 'ar' ? 'مسار الأطفال' : 'Kids Track'}</h4>
                            <span>{lang === 'ar' ? '6-17 سنة' : '6-17 Years'}</span>
                        </div>
                    </button>
                </div>
            )}
            
            <div className={`form-card ${activeTrack}-theme`}>
                {isSubmitted ? (
                    <div className="success-container">
                        <div className="success-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3 className="success-title">
                            {lang === 'ar' ? 'تم التسجيل بنجاح!' : 'Successfully Registered!'}
                        </h3>
                        <p className="success-desc">
                            {lang === 'ar' ? 'سنتواصل معك في أقرب وقت.' : 'We will contact you very soon.'}
                        </p>
                        
                        <Link to="/" className="success-btn">
                            <span>{lang === 'ar' ? 'العودة للموقع الرئيسي' : 'Return to Home'}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {lang === 'ar' 
                                    ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></> 
                                    : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
                                }
                            </svg>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="form-header">
                            <h3>{lang === 'ar' ? 'احجز مقعدك في الكورس الآن' : 'Reserve Your Seat in the Course'}</h3>
                            <p>{lang === 'ar' ? 'سجل بياناتك وسيتواصل معك فريقنا لتحديد مسارك.' : 'Register your details and our team will contact you to determine your track.'}</p>
                        </div>
                        


                        <form className="enroll-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="field-label" htmlFor="student-name">{lang === 'ar' ? 'الاسم الرباعي' : 'Full Name'}</label>
                        <div className="input-wrapper">
                            <svg className="input-icon icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <input type="text" id="student-name" className="premium-input" placeholder={lang === 'ar' ? 'الاسم الرباعي...' : 'Full Name...'} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="input-group">
                            <label className="field-label" htmlFor="student-age">{lang === 'ar' ? 'العمر' : 'Age'}</label>
                            <div className="input-wrapper">
                                <svg className="input-icon icon-age" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                <input 
                                    type="number" id="student-age" className="premium-input" 
                                    placeholder={activeTrack === 'adults' ? (lang === 'ar' ? 'العمر (18+)' : 'Age (18+)') : (lang === 'ar' ? 'العمر (6-17)' : 'Age (6-17)')} 
                                    min={activeTrack === 'adults' ? "18" : "6"} 
                                    max={activeTrack === 'adults' ? "99" : "17"} 
                                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} required 
                                />
                            </div>
                        </div>
                        
                        <div className="input-group">
                            <label className="field-label" htmlFor="parent-phone">{activeTrack === 'adults' ? (lang === 'ar' ? 'رقم الموبايل' : 'Phone Number') : (lang === 'ar' ? 'رقم ولي الأمر' : 'Parent Phone')}</label>
                            <div className="phone-wrapper">
                                <div className="phone-icon-wrapper">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <span className="phone-prefix">+20</span>
                                <input type="tel" id="parent-phone" className="phone-input" placeholder="10xxxxxxxx" maxLength="10" value={formData.phone} onChange={handlePhoneChange} required />
                            </div>
                            {phoneError && (
                                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', fontWeight: 600, padding: '0 4px' }}>
                                    {lang === 'ar' ? 'يجب أن يبدأ بـ 10 أو 11 أو 12 أو 15' : 'Number must start with 10, 11, 12, or 15'}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {activeTrack === 'adults' ? (
                        <>
                            <div className="input-group">
                                <label className="field-label">{lang === 'ar' ? 'الجامعة' : 'University'}</label>
                                <div className={`custom-dropdown-wrapper ${isUniOpen ? 'open' : ''}`} id="custom-uni-dropdown">
                                    <div className={`custom-select-trigger ${isUniOpen ? 'open' : ''}`} onClick={(e) => { e.stopPropagation(); setIsUniOpen(!isUniOpen); setIsCourseOpen(false); }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            {selectedUni && (
                                                <div className={`custom-select-trigger-icon ${selectedUni.iconClass}`} style={{ width:'24px', height:'24px', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem' }} dangerouslySetInnerHTML={{__html: selectedUni.iconSvg}}></div>
                                            )}
                                            <span className="custom-select-text">
                                                {selectedUni ? (lang === 'ar' ? selectedUni.titleAr : selectedUni.titleEn) : (lang === 'ar' ? '-- اختر الجامعة --' : '-- Select University --')}
                                            </span>
                                        </div>
                                        <svg viewBox="0 0 24 24" className="custom-select-arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                    
                                    <div className="custom-select-options">
                                        <div className="custom-option hover-blue" onClick={() => handleUniSelect('nub', 'Al-Nahda NUB', 'النهضة NUB', 'opt-blue', '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>')}>
                                            <div className="custom-option-icon opt-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                                            <div className="custom-option-text"><span className="custom-option-title">{lang === 'ar' ? 'النهضة NUB' : 'Al-Nahda NUB'}</span></div>
                                        </div>
                                        <div className="custom-option hover-orange" onClick={() => handleUniSelect('bsnu', 'Beni Suef National BSNU', 'بني سويف الأهلية BSNU', 'opt-orange', '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>')}>
                                            <div className="custom-option-icon opt-orange"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                                            <div className="custom-option-text"><span className="custom-option-title">{lang === 'ar' ? 'بني سويف الأهلية BSNU' : 'Beni Suef National BSNU'}</span></div>
                                        </div>
                                        <div className="custom-option hover-blue" onClick={() => handleUniSelect('bsu', 'Beni Suef University BSU', 'جامعة بني سويف BSU', 'opt-blue', '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>')}>
                                            <div className="custom-option-icon opt-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                                            <div className="custom-option-text"><span className="custom-option-title">{lang === 'ar' ? 'جامعة بني سويف BSU' : 'Beni Suef University BSU'}</span></div>
                                        </div>
                                        <div className="custom-option hover-orange" onClick={() => handleUniSelect('other', 'Other', 'أخرى', 'opt-orange', '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>')}>
                                            <div className="custom-option-icon opt-orange"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg></div>
                                            <div className="custom-option-text"><span className="custom-option-title">{lang === 'ar' ? 'أخرى' : 'Other'}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group" style={{ marginBottom: '24px' }}>
                                <label className="field-label" htmlFor="student-faculty">{lang === 'ar' ? 'الكلية' : 'Faculty'}</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                    <input type="text" id="student-faculty" className="premium-input" placeholder={lang === 'ar' ? 'الكلية...' : 'Faculty...'} value={formData.faculty} onChange={(e) => setFormData({...formData, faculty: e.target.value})} required />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="input-group" style={{ marginBottom: '24px' }}>
                            <label className="field-label" htmlFor="student-grade">{lang === 'ar' ? 'السنة الدراسية' : 'Study Year'}</label>
                            <div className="input-wrapper">
                                <svg className="input-icon icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                <input type="text" id="student-grade" className="premium-input" placeholder={lang === 'ar' ? 'مثال: الصف الرابع الابتدائي' : 'e.g. Grade 4'} value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} required />
                            </div>
                        </div>
                    )}

                    <div className="input-group">
                        <label className="field-label">{lang === 'ar' ? 'المسار' : 'Track / Course'}</label>
                        <div className={`custom-dropdown-wrapper ${isCourseOpen ? 'open' : ''}`} id="custom-course-dropdown">
                            <div className={`custom-select-trigger ${isCourseOpen ? 'open' : ''}`} onClick={(e) => { e.stopPropagation(); setIsCourseOpen(!isCourseOpen); setIsUniOpen(false); }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {(activeTrack === 'adults' ? selectedAdultCourse : selectedKidsCourse) ? (
                                        <div className={`custom-select-trigger-icon ${(activeTrack === 'adults' ? selectedAdultCourse : selectedKidsCourse).iconClass}`} style={{ width:'24px', height:'24px', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem' }} dangerouslySetInnerHTML={{__html: (activeTrack === 'adults' ? selectedAdultCourse : selectedKidsCourse).iconSvg}}></div>
                                    ) : null}
                                    <span className="custom-select-text">
                                        {(activeTrack === 'adults' ? selectedAdultCourse : selectedKidsCourse) 
                                            ? (lang === 'ar' ? (activeTrack === 'adults' ? selectedAdultCourse.titleAr : selectedKidsCourse.titleAr) : (activeTrack === 'adults' ? selectedAdultCourse.titleEn : selectedKidsCourse.titleEn)) 
                                            : (lang === 'ar' ? '-- اختر مساراً --' : '-- Select a Track --')}
                                    </span>
                                </div>
                                <svg viewBox="0 0 24 24" className="custom-select-arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                            
                            <div className="custom-select-options">
                                {(activeTrack === 'adults' ? adultCourses : kidsCourses).map((course) => (
                                    <div key={course.id} className={`custom-option hover-${course.iconClass === 'opt-blue' ? 'blue' : 'orange'}`} onClick={() => handleCourseSelect(course.id, course.title.en, course.title.ar, course.iconClass, course.iconSvg || '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>')}>
                                        <div className={`custom-option-icon ${course.iconClass}`} dangerouslySetInnerHTML={{__html: course.iconSvg || '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>'}}></div>
                                        <div className="custom-option-text"><span className="custom-option-title">{lang === 'ar' ? course.title.ar : course.title.en}</span></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width:'24px', height:'24px', animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                                <span>{lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                            </>
                        ) : (
                            <>
                                <span>{lang === 'ar' ? 'احجز مقعدك الآن' : 'Reserve Your Seat Now'}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </>
                        )}
                    </button>
                    
                    <div className="secure-note">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <span>{lang === 'ar' ? 'بياناتك آمنة ولن يتم مشاركتها أبداً.' : 'Your data is secure and will never be shared.'}</span>
                    </div>
                </form>
                </>
                )}
            </div>
        </div>
    );
}

export default BookingForm;
