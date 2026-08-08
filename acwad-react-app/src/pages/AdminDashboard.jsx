import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, onValue, set, remove } from 'firebase/database';
import { auth, db } from '../firebase';
import { useCourses } from '../context/CoursesContext';
import { adultCourses as staticAdultCourses, kidsCourses as staticKidsCourses } from '../data/coursesData';
import acwadLogo from '../../../2.jpg';
import './AdminDashboard.css';

function AdminDashboard() {
    const [allLeads, setAllLeads] = useState([]);
    const [currentView, setCurrentView] = useState('kids');
    const [currentCourseFilter, setCurrentCourseFilter] = useState(null);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();

    // Courses from context (live Firebase data)
    const { adultCourses, kidsCourses } = useCourses();

    // Course management state
    const [showAddForm, setShowAddForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [seedStatus, setSeedStatus] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [newCourse, setNewCourse] = useState({
        type: 'adults',
        id: '',
        titleAr: '',
        titleEn: '',
        descAr: '',
        descEn: '',
        durationAr: '',
        durationEn: '',
        modules: '',
        image: '',
        iconClass: 'opt-orange'
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoadingAuth(false);
                loadDashboardData();
            } else {
                navigate('/admin/login', { replace: true });
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        const originalBg = document.body.style.backgroundColor;
        const originalColor = document.body.style.color;
        
        document.body.style.backgroundColor = '#0a1121';
        document.body.style.color = '#ffffff';

        return () => {
            document.body.style.backgroundColor = originalBg;
            document.body.style.color = originalColor;
        };
    }, []);

    const loadDashboardData = () => {
        const leadsRef = ref(db, 'leads');
        
        onValue(leadsRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) {
                setAllLeads([]);
            } else {
                const leadsArray = Object.values(data).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setAllLeads(leadsArray);
            }
            setErrorMsg(null);
        }, (error) => {
            console.error("Firebase Error:", error);
            setErrorMsg(error.message);
        });
    };

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/admin/login');
        }).catch((error) => {
            console.error("Logout Error", error);
        });
    };

    // ===== COURSE MANAGEMENT FUNCTIONS =====
    const seedCoursesToFirebase = async () => {
        setSeedStatus('جاري رفع الكورسات...');
        try {
            // Seed adults
            for (const course of staticAdultCourses) {
                await set(ref(db, `courses/adults/${course.id}`), course);
            }
            // Seed kids
            for (const course of staticKidsCourses) {
                await set(ref(db, `courses/kids/${course.id}`), course);
            }
            setSeedStatus('تم رفع الكورسات بنجاح! ✅');
            setTimeout(() => setSeedStatus(''), 3000);
        } catch (err) {
            setSeedStatus('خطأ: ' + err.message);
        }
    };

    const openAddCourse = () => {
        setIsEditing(false);
        setNewCourse({
            type: 'adults', id: '', titleAr: '', titleEn: '', descAr: '', descEn: '',
            durationAr: '', durationEn: '', modules: '', image: '', iconClass: 'opt-orange'
        });
        setShowAddForm(true);
    };

    const openEditCourse = (type, course) => {
        setIsEditing(true);
        setNewCourse({
            type: type,
            id: course.id || '',
            titleAr: course.title?.ar || '',
            titleEn: course.title?.en || '',
            descAr: course.description?.ar || '',
            descEn: course.description?.en || '',
            durationAr: course.duration?.ar || '',
            durationEn: course.duration?.en || '',
            modules: Array.isArray(course.modules) ? course.modules.join(', ') : '',
            image: course.image || '',
            iconClass: course.iconClass || 'opt-orange'
        });
        setShowAddForm(true);
    };

    const handleDeleteCourse = async (type, courseId) => {
        try {
            await remove(ref(db, `courses/${type}/${courseId}`));
            setDeleteConfirm(null);
        } catch (err) {
            alert('خطأ في المسح: ' + err.message);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewCourse(prev => ({...prev, image: reader.result}));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddCourse = async (e) => {
        e.preventDefault();
        if (!newCourse.id || !newCourse.titleAr || !newCourse.titleEn) {
            alert('يرجى ملء الحقول المطلوبة (ID, الاسم بالعربي, الاسم بالانجليزي)');
            return;
        }

        const courseData = {
            id: newCourse.id,
            title: { ar: newCourse.titleAr, en: newCourse.titleEn },
            description: { ar: newCourse.descAr, en: newCourse.descEn },
            duration: { ar: newCourse.durationAr, en: newCourse.durationEn },
            modules: newCourse.modules ? newCourse.modules.split(',').map(m => m.trim()) : [],
            image: newCourse.image || '',
            iconClass: newCourse.iconClass,
            iconSvg: '',
            features: {
                ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
                en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
            }
        };

        try {
            await set(ref(db, `courses/${newCourse.type}/${newCourse.id}`), courseData);
            setShowAddForm(false);
            setNewCourse({
                type: 'adults', id: '', titleAr: '', titleEn: '', descAr: '', descEn: '',
                durationAr: '', durationEn: '', modules: '', image: '', iconClass: 'opt-orange'
            });
        } catch (err) {
            alert('خطأ في الإضافة: ' + err.message);
        }
    };

    // ===== RENDER =====
    if (isLoadingAuth) {
        return (
            <div className="admin-layout" dir="rtl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', gap: '1rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" style={{ width: '40px', height: '40px', animation: 'adminSpin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                <span style={{ color: '#a1a1aa' }}>جاري التحقق من الصلاحيات...</span>
            </div>
        );
    }

    let filteredLeads = [];
    if (currentView === 'kids') {
        filteredLeads = allLeads.filter(l => l.formType === 'kids_booking' || l.formType === 'kids' || !l.formType);
    } else if (currentView === 'adults') {
        filteredLeads = allLeads.filter(l => l.formType === 'adults_booking' || l.formType === 'adults');
    }

    let counts = {};
    filteredLeads.forEach(l => {
        if (l.course) {
            counts[l.course] = (counts[l.course] || 0) + 1;
        }
    });

    const displayLeads = currentCourseFilter 
        ? filteredLeads.filter(l => l.course === currentCourseFilter)
        : filteredLeads;

    const getCourseBadge = (course) => {
        if (course === 'python') return <span className="badge python">برمجة بايثون</span>;
        if (course === 'scratch') return <span className="badge scratch">برمجة سكراتش</span>;
        if (course === 'pictoblox') return <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)' }}>PictoBlox AI</span>;
        if (course === 'react') return <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)' }}>Front Web React</span>;
        if (course === 'network') return <span className="badge" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.3)' }}>Network</span>;
        if (course === 'flutter') return <span className="badge" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.3)' }}>Flutter</span>;
        if (course === 'cybersecurity') return <span className="badge web">CyberSecurity</span>;
        if (course === 'master-cs') return <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)' }}>Master CS</span>;
        if (course === 'data-analysis') return <span className="badge" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f472b6', border: '1px solid rgba(236, 72, 153, 0.3)' }}>Data Analysis</span>;
        if (course === 'ai') return <span className="badge" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)' }}>AI</span>;
        return <span className="badge">{course || 'غير محدد'}</span>;
    };

    const getUniText = (uni) => {
        if (uni === 'Beni Suef University' || uni === 'bsu') return 'جامعة بني سويف';
        if (uni === 'Nahda University' || uni === 'nub') return 'جامعة النهضة';
        if (uni === 'Beni Suef National University' || uni === 'bsnu') return 'جامعة بني سويف الأهلية';
        if (uni === 'other') return 'أخرى';
        return uni || '-';
    };

    return (
        <div className="admin-layout" dir="rtl">
            <div className="dashboard-container">
                <div className="header">
                    <h1>
                        <img src={acwadLogo} alt="ACWAD Logo" className="header-logo" />
                        لوحة التحكم
                    </h1>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        {(currentView === 'kids' || currentView === 'adults') && (
                            <div className="total-badge">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>{displayLeads.length} مسجلين {currentCourseFilter ? '(تصفية)' : ''}</span>
                            </div>
                        )}
                        <button onClick={handleLogout} className="logout-btn">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            خروج
                        </button>
                    </div>
                </div>

                {/* ===== TABS ===== */}
                <div className="tabs-container">
                    <button className={`tab-btn ${currentView === 'kids' ? 'active' : ''}`} onClick={() => { setCurrentView('kids'); setCurrentCourseFilter(null); }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        تسجيلات الأطفال
                    </button>
                    <button className={`tab-btn ${currentView === 'adults' ? 'active' : ''}`} onClick={() => { setCurrentView('adults'); setCurrentCourseFilter(null); }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        تسجيلات الكبار
                    </button>
                    <button className={`tab-btn ${currentView === 'courses' ? 'active' : ''}`} onClick={() => { setCurrentView('courses'); setCurrentCourseFilter(null); }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="10" y1="4" x2="10" y2="20"/></svg>
                        إدارة الكورسات
                    </button>
                </div>

                {/* ===== KIDS STATS ===== */}
                {currentView === 'kids' && (
                    <div className="stats-row">
                        <div className={`stat-card scratch-card ${currentCourseFilter === 'scratch' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'scratch' ? null : 'scratch')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
                            <h3>مسار سكراتش</h3><div className="value">{counts['scratch'] || 0}</div>
                        </div>
                        <div className={`stat-card python-card ${currentCourseFilter === 'python' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'python' ? null : 'python')}>
                            <div className="stat-icon"><svg viewBox="0 0 128 128" width="28" height="28" fill="currentColor"><path d="M63.858 2.016c-30.825 0-29.356 13.385-29.356 13.385l.063 13.88h30.08v4.256H33.272S12.78 32.06 12.78 63.858c0 31.796 17.587 30.554 17.587 30.554h9.123V80.37s-.188-14.131 14.256-14.131h29.58s13.88-.188 13.88-14.004V28.324s1.127-26.308-33.348-26.308zm-15.65 8.765a5.266 5.266 0 1 1 0 10.531 5.266 5.266 0 0 1 0-10.531z"/><path d="M64.672 125.984c30.825 0 29.356-13.385 29.356-13.385l-.063-13.88H63.884v-4.256h31.374s20.491 1.477 20.491-30.32c0-31.797-17.587-30.555-17.587-30.555h-9.123V47.63s.188 14.13-14.256 14.13H45.183s-13.88.188-13.88 14.004v24.01s-1.127 26.308 33.368 26.308zm15.65-8.765a5.266 5.266 0 1 1 0-10.531 5.266 5.266 0 0 1 0 10.531z"/></svg></div>
                            <h3>مسار بايثون</h3><div className="value">{counts['python'] || 0}</div>
                        </div>
                        <div className={`stat-card pictoblox-card ${currentCourseFilter === 'pictoblox' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'pictoblox' ? null : 'pictoblox')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg></div>
                            <h3>مسار PictoBlox AI</h3><div className="value">{counts['pictoblox'] || 0}</div>
                        </div>
                    </div>
                )}

                {/* ===== ADULTS STATS ===== */}
                {currentView === 'adults' && (
                    <div className="stats-row">
                        <div className={`stat-card master-card ${currentCourseFilter === 'master-cs' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'master-cs' ? null : 'master-cs')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
                            <h3>Master CS</h3><div className="value">{counts['master-cs'] || 0}</div>
                        </div>
                        <div className={`stat-card mobile-card ${currentCourseFilter === 'flutter' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'flutter' ? null : 'flutter')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect></svg></div>
                            <h3>Flutter</h3><div className="value">{counts['flutter'] || 0}</div>
                        </div>
                        <div className={`stat-card frontend-card ${currentCourseFilter === 'react' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'react' ? null : 'react')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg></div>
                            <h3>Front Web React</h3><div className="value">{counts['react'] || 0}</div>
                        </div>
                        <div className={`stat-card backend-card ${currentCourseFilter === 'network' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'network' ? null : 'network')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect></svg></div>
                            <h3>Network</h3><div className="value">{counts['network'] || 0}</div>
                        </div>
                        <div className={`stat-card data-card ${currentCourseFilter === 'data-analysis' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'data-analysis' ? null : 'data-analysis')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                            <h3>Data Analysis</h3><div className="value">{counts['data-analysis'] || 0}</div>
                        </div>
                        <div className={`stat-card cyber-card ${currentCourseFilter === 'cybersecurity' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'cybersecurity' ? null : 'cybersecurity')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                            <h3>CyberSecurity</h3><div className="value">{counts['cybersecurity'] || 0}</div>
                        </div>
                        <div className={`stat-card ai-card ${currentCourseFilter === 'ai' ? 'active' : ''}`} onClick={() => setCurrentCourseFilter(currentCourseFilter === 'ai' ? null : 'ai')}>
                            <div className="stat-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg></div>
                            <h3>AI</h3><div className="value">{counts['ai'] || 0}</div>
                        </div>
                    </div>
                )}

                {/* ===== LEADS TABLE (kids/adults views) ===== */}
                {(currentView === 'kids' || currentView === 'adults') && (
                    <div className="glass-panel">
                        {errorMsg ? (
                            <div style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '16px', padding: '2rem', margin: '0 auto', maxWidth: '600px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                    <h3 style={{ color: '#ef4444', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>خطأ في الصلاحيات</h3>
                                    <p style={{ color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6' }}>يبدو أن قواعد الأمان في الفايربيز تمنع قراءة البيانات.</p>
                                    <div dir="ltr" style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', color: '#fca5a5', fontSize: '0.9rem', fontFamily: 'monospace' }}>{errorMsg}</div>
                                </div>
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    {currentView === 'kids' ? (
                                        <tr><th>الاسم</th><th>العمر</th><th>رقم الموبايل</th><th>المسار</th><th>تاريخ التسجيل</th></tr>
                                    ) : (
                                        <tr><th>الاسم</th><th>الجامعة</th><th>الكلية</th><th>رقم الموبايل</th><th>المسار</th><th>تاريخ التسجيل</th></tr>
                                    )}
                                </thead>
                                <tbody>
                                    {displayLeads.length === 0 ? (
                                        <tr><td colSpan={currentView === 'kids' ? 5 : 6} style={{ textAlign: 'center', padding: '2rem', color: '#a1a1aa' }}>لا توجد تسجيلات لعرضها.</td></tr>
                                    ) : (
                                        displayLeads.map((lead, idx) => (
                                            <tr key={idx}>
                                                {currentView === 'kids' ? (
                                                    <>
                                                        <td><strong>{lead.name || '-'}</strong></td>
                                                        <td>{lead.age || lead.grade || '-'}</td>
                                                        <td dir="ltr" style={{ textAlign: 'right' }}>{lead.phone || '-'}</td>
                                                        <td>{getCourseBadge(lead.course)}</td>
                                                        <td style={{ fontSize: '0.95rem', color: '#94a3b8' }}>{lead.timestamp ? new Date(lead.timestamp).toLocaleString('ar-EG') : '-'}</td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td><strong>{lead.name || '-'}</strong></td>
                                                        <td>{getUniText(lead.university)}</td>
                                                        <td>{lead.faculty || '-'}</td>
                                                        <td dir="ltr" style={{ textAlign: 'right' }}>{lead.phone || '-'}</td>
                                                        <td>{getCourseBadge(lead.course)}</td>
                                                        <td style={{ fontSize: '0.95rem', color: '#94a3b8' }}>{lead.timestamp ? new Date(lead.timestamp).toLocaleString('ar-EG') : '-'}</td>
                                                    </>
                                                )}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {/* ===== COURSES MANAGEMENT TAB ===== */}
                {currentView === 'courses' && (
                    <div className="courses-mgmt">
                        {/* Seed Button */}
                        <div className="mgmt-actions">
                            <button className="mgmt-btn seed-btn" onClick={seedCoursesToFirebase}>
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                رفع الكورسات الحالية للفايربيز
                            </button>
                            <button className="mgmt-btn add-btn" onClick={openAddCourse}>
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                                إضافة كورس جديد
                            </button>
                            {seedStatus && <span className="seed-status">{seedStatus}</span>}
                        </div>

                        {/* Adults Section */}
                        <h2 className="mgmt-section-title">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            كورسات الكبار ({adultCourses.length})
                        </h2>
                        <div className="mgmt-grid">
                            {adultCourses.map(course => (
                                <div className="mgmt-course-card" key={course.id}>
                                    {course.image && <img src={course.image} alt="" className="mgmt-course-img" />}
                                    <div className="mgmt-course-info">
                                        <h3>{course.title?.ar || course.id}</h3>
                                        <p>{course.title?.en}</p>
                                        <span className="mgmt-course-id">ID: {course.id}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button className="delete-btn" onClick={() => openEditCourse('adults', course)} title="تعديل">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                        </button>
                                        <button className="delete-btn" onClick={() => setDeleteConfirm({ type: 'adults', id: course.id, title: course.title?.ar || course.title?.en || course.id })} title="حذف">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Kids Section */}
                        <h2 className="mgmt-section-title" style={{ marginTop: '2.5rem' }}>
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                            كورسات الأطفال ({kidsCourses.length})
                        </h2>
                        <div className="mgmt-grid">
                            {kidsCourses.map(course => (
                                <div className="mgmt-course-card" key={course.id}>
                                    {course.image && <img src={course.image} alt="" className="mgmt-course-img" />}
                                    <div className="mgmt-course-info">
                                        <h3>{course.title?.ar || course.id}</h3>
                                        <p>{course.title?.en}</p>
                                        <span className="mgmt-course-id">ID: {course.id}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button className="delete-btn" onClick={() => openEditCourse('kids', course)} title="تعديل">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                        </button>
                                        <button className="delete-btn" onClick={() => setDeleteConfirm({ type: 'kids', id: course.id, title: course.title?.ar || course.title?.en || course.id })} title="حذف">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Course Modal */}
                        {showAddForm && (
                            <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowAddForm(false); }}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2>{isEditing ? 'تعديل الكورس' : 'إضافة كورس جديد'}</h2>
                                        <button className="modal-close" onClick={() => setShowAddForm(false)}>✕</button>
                                    </div>
                                    <form onSubmit={handleAddCourse} className="add-course-form">
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>ID (بالانجليزي)</label>
                                                <input type="text" className={`ltr-input ${isEditing ? 'disabled-input' : ''}`} placeholder="e.g. flutter" value={newCourse.id} onChange={(e) => setNewCourse({...newCourse, id: e.target.value.toLowerCase().replace(/\s+/g, '-')})} required disabled={isEditing} />
                                            </div>
                                            <div className="form-field">
                                                <label>النوع</label>
                                                <div className="custom-select-container">
                                                    <select className={isEditing ? 'disabled-input' : ''} value={newCourse.type} onChange={(e) => setNewCourse({...newCourse, type: e.target.value})} disabled={isEditing}>
                                                        <option value="adults">كبار</option>
                                                        <option value="kids">أطفال</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>الاسم بالانجليزي *</label>
                                                <input type="text" className="ltr-input" placeholder="Flutter Diploma" value={newCourse.titleEn} onChange={(e) => setNewCourse({...newCourse, titleEn: e.target.value})} required />
                                            </div>
                                            <div className="form-field">
                                                <label>الاسم بالعربي *</label>
                                                <input type="text" placeholder="دبلومة فلاتر" value={newCourse.titleAr} onChange={(e) => setNewCourse({...newCourse, titleAr: e.target.value})} required />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>الوصف بالانجليزي</label>
                                                <textarea className="ltr-input" placeholder="Course description..." value={newCourse.descEn} onChange={(e) => setNewCourse({...newCourse, descEn: e.target.value})} />
                                            </div>
                                            <div className="form-field">
                                                <label>الوصف بالعربي</label>
                                                <textarea placeholder="وصف الكورس..." value={newCourse.descAr} onChange={(e) => setNewCourse({...newCourse, descAr: e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>المدة بالانجليزي</label>
                                                <input type="text" className="ltr-input" placeholder="3 Months" value={newCourse.durationEn} onChange={(e) => setNewCourse({...newCourse, durationEn: e.target.value})} />
                                            </div>
                                            <div className="form-field">
                                                <label>المدة بالعربي</label>
                                                <input type="text" placeholder="3 شهور" value={newCourse.durationAr} onChange={(e) => setNewCourse({...newCourse, durationAr: e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="form-field full-width">
                                            <label>المحتوى (الموديولات) — افصل بين كل واحد بفاصلة</label>
                                            <input type="text" className="ltr-input" placeholder="HTML & CSS, JavaScript, React" value={newCourse.modules} onChange={(e) => setNewCourse({...newCourse, modules: e.target.value})} />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-field">
                                                <label>الصورة (ارفع صورة من جهازك أو اكتب رابط)</label>
                                                <input 
                                                    type="file" 
                                                    accept="image/*" 
                                                    onChange={handleImageUpload} 
                                                    style={{ marginBottom: '10px', display: 'block', width: '100%', padding: '8px', border: '1px dashed #cbd5e1', borderRadius: '8px' }}
                                                />
                                                <input type="text" className="ltr-input" placeholder="رابط الصورة... أو ارفع صورة من الزر بالأعلى" value={newCourse.image} onChange={(e) => setNewCourse({...newCourse, image: e.target.value})} />
                                            </div>
                                            <div className="form-field">
                                                <label>لون الأيقونة</label>
                                                <div className="custom-select-container">
                                                    <select value={newCourse.iconClass} onChange={(e) => setNewCourse({...newCourse, iconClass: e.target.value})}>
                                                        <option value="opt-blue">أزرق (Blue)</option>
                                                        <option value="opt-orange">برتقالي (Orange)</option>
                                                        <option value="opt-purple">بنفسجي (Purple)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-actions">
                                            <button type="submit" className="mgmt-btn add-btn">
                                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                                                {isEditing ? 'حفظ التعديلات' : 'حفظ الكورس'}
                                            </button>
                                            <button type="button" className="mgmt-btn cancel-btn" onClick={() => setShowAddForm(false)}>إلغاء</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Delete Confirmation Modal */}
                        {deleteConfirm && (
                            <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setDeleteConfirm(null); }}>
                                <div className="modal-content" style={{ maxWidth: '400px', textAlign: 'center' }}>
                                    <div className="modal-header" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                                        <h2 style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                            تأكيد الحذف
                                        </h2>
                                        <button className="modal-close" onClick={() => setDeleteConfirm(null)} style={{ position: 'absolute', left: '20px' }}>✕</button>
                                    </div>
                                    <div style={{ padding: '20px 0' }}>
                                        <p style={{ margin: '0', fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
                                            هل أنت متأكد أنك تريد حذف كورس <br />
                                            <strong style={{ color: '#3b82f6', fontSize: '1.2rem', display: 'inline-block', marginTop: '8px' }}>{deleteConfirm.title}</strong>؟
                                        </p>
                                        <p style={{ margin: '10px 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>
                                            هذا الإجراء لا يمكن التراجع عنه.
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
                                        <button 
                                            className="mgmt-btn" 
                                            style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '10px 24px' }}
                                            onClick={() => handleDeleteCourse(deleteConfirm.type, deleteConfirm.id)}
                                        >
                                            نعم، احذف نهائياً
                                        </button>
                                        <button 
                                            className="mgmt-btn cancel-btn" 
                                            style={{ padding: '10px 24px' }}
                                            onClick={() => setDeleteConfirm(null)}
                                        >
                                            إلغاء
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;
