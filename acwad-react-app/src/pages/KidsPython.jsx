
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './KidsTracks.css'; // Shared CSS for Kids Tracks

const KidsPython = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        // Scroll progress bar logic
        const progressBar = document.getElementById('scroll-progress-bar');
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            if (progressBar) progressBar.style.width = scrolled + '%';
        };
        window.addEventListener('scroll', handleScroll);

        // Language text replacement logic
        const updateTextForLanguage = () => {
            document.querySelectorAll('[data-en][data-ar]').forEach(el => {
                const enText = el.getAttribute('data-en');
                const arText = el.getAttribute('data-ar');
                if (enText && arText) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = lang === 'ar' ? arText : enText;
                    } else {
                        el.innerHTML = lang === 'ar' ? arText : enText;
                    }
                }
            });
        };
        updateTextForLanguage();

        // Reveal logic (AOS alternative or native reveal)
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            reveals.forEach(reveal => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('reveal--visible');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', revealOnScroll);
        };
    }, [lang]);

    return (
        <div className="kids-track-page">
            <div className="bg-glow"></div>
            <Header />
            <header className="hero" id="hero-section">
    <canvas id="hero-canvas"></canvas>

    <div className="hero__content">
        <p className="hero__eyebrow">
            <span className="dot dot--orange"></span>
            <span data-en="Professional Coding Program" data-ar="برنامج البرمجة الاحترافي"></span>
            <span className="dot dot--blue"></span>
        </p>
        <h1 className="hero__title" id="main-title">
            <span data-en="PYTHON PROGRAMMING" data-ar="خريطة طريق برمجة"></span><br />
            <span className="hero__title--accent" data-en="ROADMAP" data-ar="بايثون"></span>
        </h1>
        <p className="hero__subtitle" data-en="MASTER TEXT-BASED CODING & BUILD REAL APPS" data-ar="احترف البرمجة النصية وابنِ تطبيقات حقيقية"></p>
        <p className="hero__desc" data-en="A professional project-based learning journey designed to help students build strong logic, problem-solving abilities, and real programming skills through Python." data-ar="رحلة تعليمية احترافية قائمة على المشاريع، مصمّمة لمساعدة الطلاب على بناء مهارات التفكير المنطقي وحل المشكلات والبرمجة الحقيقية من خلال لغة بايثون."></p>
    </div>
   
</header>


<section className="info-cards" id="info-cards-section">
    <div className="info-card reveal" id="info-age">
        <div className="info-card__icon info-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/><circle cx="19" cy="8" r="3"/><path d="M22 21v-1a4 4 0 0 0-4-4"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Age Group" data-ar="الفئة العمرية"></span>
            <span className="info-card__value" data-en="11 — 16 Years" data-ar="١١ — ١٦ سنة"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-sessions">
        <div className="info-card__icon info-card__icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="12" cy="16" r="2"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Total Sessions" data-ar="إجمالي الجلسات"></span>
            <span className="info-card__value" data-en="20 Sessions" data-ar="٢٠ جلسة"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-hands-on">
        <div className="info-card__icon info-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Hands-on" data-ar="تطبيق عملي"></span>
            <span className="info-card__value" data-en="100% Practical" data-ar="١٠٠٪ عملي"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-project">
        <div className="info-card__icon info-card__icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7l2 3h9v14H3V3z"/><path d="M12 11v6m-3-3h6"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Project-Based" data-ar="قائم على المشاريع"></span>
            <span className="info-card__value" data-en="Learn by Doing" data-ar="التعلّم بالممارسة"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-final">
        <div className="info-card__icon info-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Final Project" data-ar="مشروع نهائي"></span>
            <span className="info-card__value" data-en="Real App/Game" data-ar="تطبيق/لعبة حقيقية"></span>
        </div>
    </div>
</section>


<section className="section-what" id="what-is-python">
    <div className="section-what__header reveal">
        <span className="section-badge section-badge--blue" data-en="ABOUT" data-ar="نبذة"></span>
        <h2 className="section-title">
            <span data-en="What is " data-ar="ما هي "></span><span className="text--orange" data-en="Python" data-ar="بايثون"></span><span data-en="?" data-ar="؟"></span>
        </h2>
    </div>
    <div className="what-grid">
        <div className="what-card reveal" id="what-card-1">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="8" width="40" height="28" rx="4" fill="#0D47A1" opacity="0.1" stroke="#0D47A1" strokeWidth="2"/>
                    <rect x="10" y="14" width="12" height="4" rx="2" fill="#F5B400"/>
                    <rect x="10" y="22" width="16" height="4" rx="2" fill="#0D47A1" opacity="0.5"/>
                    <rect x="10" y="30" width="10" height="3" rx="1.5" fill="#F5B400" opacity="0.6"/>
                    <circle cx="36" cy="22" r="6" fill="#0D47A1" opacity="0.15"/>
                    <path d="M34 22l4-2v4l-4-2z" fill="#0D47A1"/>
                    <rect x="14" y="40" width="20" height="3" rx="1.5" fill="#0D47A1" opacity="0.2"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="Text-Based Coding" data-ar="البرمجة النصية الحقيقية"></h3>
            <p className="what-card__desc" data-en="Transition from drag-and-drop blocks to writing real text-based code used by professional developers worldwide." data-ar="الانتقال من سحب وإفلات الكتل إلى كتابة أكواد نصية حقيقية يستخدمها المطورون المحترفون في جميع أنحاء العالم."></p>
        </div>
        <div className="what-card reveal" id="what-card-2">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" fill="#F5B400" opacity="0.1" stroke="#F5B400" strokeWidth="2"/>
                    <path d="M16 28 C16 20, 24 14, 24 14 C24 14, 32 20, 32 28" stroke="#0D47A1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <circle cx="18" cy="20" r="3" fill="#F5B400"/>
                    <circle cx="30" cy="18" r="2.5" fill="#0D47A1" opacity="0.5"/>
                    <rect x="21" y="28" width="6" height="8" rx="2" fill="#F5B400" opacity="0.6"/>
                    <path d="M15 32h18" stroke="#0D47A1" strokeWidth="1.5" opacity="0.3"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="Apps, Games & AI" data-ar="تطبيقات وألعاب وذكاء اصطناعي"></h3>
            <p className="what-card__desc" data-en="Python is incredibly versatile. Students can build everything from fun text-based adventure games to smart algorithms." data-ar="لغة بايثون متعددة الاستخدامات. يمكن للطلاب بناء كل شيء بدءاً من الألعاب النصية الممتعة وحتى الخوارزميات الذكية."></p>
        </div>
        <div className="what-card reveal" id="what-card-3">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="6" width="36" height="36" rx="18" fill="#0D47A1" opacity="0.08"/>
                    <path d="M18 16 L24 12 L30 16 L30 24 L24 28 L18 24Z" fill="#F5B400" opacity="0.3" stroke="#F5B400" strokeWidth="1.5"/>
                    <circle cx="24" cy="20" r="4" fill="#0D47A1" opacity="0.6"/>
                    <path d="M14 34 C14 30, 19 28, 24 28 C29 28, 34 30, 34 34" stroke="#0D47A1" strokeWidth="2" fill="none" opacity="0.4"/>
                    <circle cx="16" cy="30" r="2" fill="#F5B400" opacity="0.5"/>
                    <circle cx="32" cy="30" r="2" fill="#F5B400" opacity="0.5"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="Real-World Skills" data-ar="مهارات العالم الحقيقي"></h3>
            <p className="what-card__desc" data-en="Learning Python equips students with a highly demanded industry skill, giving them a massive head start in tech and logic." data-ar="تعلم بايثون يزود الطلاب بمهارة مطلوبة بشدة في سوق العمل، مما يمنحهم انطلاقة قوية في مجال التكنولوجيا والمنطق."></p>
        </div>
    </div>
</section>


<section className="section-sandbox" id="python-sandbox">
    <div className="section-sandbox__header reveal">
        <span className="section-badge section-badge--blue" data-en="PLAYGROUND" data-ar="منطقة اللعب"></span>
        <h2 className="section-title">
            <span data-en="Interactive " data-ar="مُحاكي "></span><span className="text--orange" data-en="Python Sandbox" data-ar="بايثون التفاعلي"></span>
        </h2>
        <p className="sandbox-desc" data-en="Click the snippets below to build a Python script, then run it to see the output in the terminal!" data-ar="اضغط على الأكواد بالأسفل لبناء برنامج، ثم شغّله لترى النتيجة في وحدة التحكم (Terminal)!"></p>
    </div>
    
    <div className="sandbox-container">
        <div className="sandbox-editor">
            <div className="sandbox-editor__header">
                <div className="sandbox-dots">
                    <span className="s-dot s-dot--red"></span>
                    <span className="s-dot s-dot--yellow"></span>
                    <span className="s-dot s-dot--green"></span>
                </div>
                <div className="sandbox-editor__title" data-en="Coding Workspace" data-ar="بيئة العمل البرمجية"></div>
            </div>
            
            <div className="sandbox-editor__body">
                <div className="sandbox-block-palette">
                    <h4 className="sandbox-subtitle" data-en="Code Snippets (Click to Add)" data-ar="أجزاء الكود (اضغط للإضافة)"></h4>
                    <div className="palette-blocks">
                        <button className="scratch-btn scratch-btn--looks" data-action="print" data-en="print('Hello World!')" data-ar="طباعة نص">
                            <span className="s-icon">📝</span>
                            <span data-en="print('Hello World!')" data-ar="طباعة نص"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--motion" data-action="variable" data-en="name = 'Python'" data-ar="إنشاء متغير">
                            <span className="s-icon">📦</span>
                            <span data-en="name = 'Python'" data-ar="إنشاء متغير"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--sound" data-action="loop" data-en="for i in range(3):" data-ar="حلقة تكرار">
                            <span className="s-icon">🔄</span>
                            <span data-en="for i in range(3):" data-ar="حلقة تكرار"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--orange" data-action="condition" data-en="if name == 'Python':" data-ar="جملة شرطية">
                            <span className="s-icon">🤔</span>
                            <span data-en="if name == 'Python':" data-ar="جملة شرطية"></span>
                        </button>
                    </div>
                </div>
                
                <div className="sandbox-workspace-wrapper">
                    <h4 className="sandbox-subtitle" data-en="Your Python Script" data-ar="برنامج بايثون الخاص بك"></h4>
                    <div className="sandbox-workspace" id="sandbox-workspace">
                        <div className="workspace-empty" data-en="Click on the snippets above to write your code!" data-ar="اضغط على الأكواد في الأعلى لكتابة برنامجك هنا!"></div>
                    </div>
                </div>
                
                <div className="sandbox-controls">
                    <button className="control-btn control-btn--flag" id="btn-run-sandbox">
                        <span className="s-icon">▶️</span>
                        <span data-en="Run Code" data-ar="تشغيل الكود"></span>
                    </button>
                    <button className="control-btn control-btn--clear" id="btn-clear-sandbox">
                        <span className="s-icon">🗑️</span>
                        <span data-en="Clear All" data-ar="مسح الكل"></span>
                    </button>
                </div>
            </div>
        </div>
        
        
        <div className="sandbox-stage-panel" style={{"background":"#1e1e1e","border":"1px solid #333"}}>
            <div className="sandbox-stage-header" style={{"background":"#2d2d2d","color":"#fff"}}>
                <span className="stage-badge" data-en="TERMINAL" data-ar="وحدة التحكم"></span>
                <span className="stage-coords" id="sandbox-coords">Python 3.10.4</span>
            </div>
            
            <div className="sandbox-stage" id="sandbox-stage" style={{"background":"#1e1e1e","color":"#a5d6ff","fontFamily":"monospace","padding":"20px","alignItems":"flex-start","justifyContent":"flex-start"}}>
                
                <div id="sandbox-terminal-output" style={{"textAlign":"left","width":"100%","whiteSpace":"pre-wrap","fontSize":"14px"}}> Ready to run code...</div>
            </div>
            
            <div className="sandbox-stage-footer" style={{"background":"#2d2d2d","borderTop":"1px solid #333"}}>
                <button className="stage-control-btn" id="btn-toggle-grid" data-en="Clear Terminal" data-ar="مسح الشاشة">Clear Terminal</button>
            </div>
        </div>
    </div>
</section>


<section className="section-why" id="why-learn-python">
    <div className="section-why__header reveal">
        <span className="section-badge section-badge--orange" data-en="BENEFITS" data-ar="الفوائد"></span>
        <h2 className="section-title">
            <span data-en="Why Should Students Learn " data-ar="لماذا يجب أن يتعلّم الطلاب "></span><span className="text--blue" data-en="Python" data-ar="بايثون"></span><span data-en="?" data-ar="؟"></span>
        </h2>
    </div>
    <div className="why-grid">
        <div className="why-card reveal" id="why-card-logic">
            <div className="why-card__icon why-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M10 16h4l2-4 2 8 2-4h4"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Logical Thinking" data-ar="التفكير المنطقي"></h4>
            <p className="why-card__desc" data-en="Develop structured reasoning and sequential logic skills" data-ar="تطوير التفكير المنظّم ومهارات المنطق التسلسلي"></p>
        </div>
        <div className="why-card reveal" id="why-card-creativity">
            <div className="why-card__icon why-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4a8 8 0 0 0-8 8c0 3 1.5 5 4 7v5h8v-5c2.5-2 4-4 4-7a8 8 0 0 0-8-8z"/><path d="M12 28h8"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Creativity" data-ar="الإبداع"></h4>
            <p className="why-card__desc" data-en="Express ideas through code, games, and digital art" data-ar="التعبير عن الأفكار من خلال البرمجة والألعاب والفن الرقمي"></p>
        </div>
        <div className="why-card reveal" id="why-card-problem">
            <div className="why-card__icon why-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="24" height="24" rx="4"/><path d="M10 16h12M16 10v12"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Problem Solving" data-ar="حل المشكلات"></h4>
            <p className="why-card__desc" data-en="Learn to break big challenges into small, solvable steps" data-ar="تعلّم تقسيم التحديات الكبيرة إلى خطوات صغيرة قابلة للحل"></p>
        </div>
        <div className="why-card reveal" id="why-card-computational">
            <div className="why-card__icon why-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/><path d="M10 18l3 3 5-6"/><path d="M18 18h6M18 22h6"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Computational Thinking" data-ar="التفكير الحاسوبي"></h4>
            <p className="why-card__desc" data-en="Master algorithms, patterns, and data-driven thinking" data-ar="إتقان الخوارزميات والأنماط والتفكير المبني على البيانات"></p>
        </div>
        <div className="why-card reveal" id="why-card-game">
            <div className="why-card__icon why-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="8" width="28" height="16" rx="6"/><circle cx="10" cy="16" r="3"/><circle cx="22" cy="13" r="1.5" fill="currentColor"/><circle cx="26" cy="16" r="1.5" fill="currentColor"/><circle cx="22" cy="19" r="1.5" fill="currentColor"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Game Development" data-ar="تطوير الألعاب"></h4>
            <p className="why-card__desc" data-en="Build real playable games from scratch" data-ar="بناء ألعاب حقيقية قابلة للعب من الصفر"></p>
        </div>
        <div className="why-card reveal" id="why-card-confidence">
            <div className="why-card__icon why-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Confidence Building" data-ar="بناء الثقة بالنفس"></h4>
            <p className="why-card__desc" data-en="Gain confidence by creating and sharing real projects" data-ar="اكتساب الثقة من خلال إنشاء ومشاركة مشاريع حقيقية"></p>
        </div>
    </div>
</section>


<section className="roadmap" id="roadmap-section">
    <div className="roadmap__header reveal">
        <span className="section-badge section-badge--blue" data-en="CURRICULUM" data-ar="المنهج الدراسي"></span>
        <h2 className="section-title">
            <span data-en="The Learning " data-ar="خريطة "></span><span className="text--orange" data-en="Roadmap" data-ar="التعلّم"></span>
        </h2>
        <p className="roadmap__header-desc" data-en="A step-by-step journey from zero to game developer" data-ar="رحلة خطوة بخطوة من الصفر إلى مطوّر ألعاب"></p>
    </div>

    <div className="roadmap-timeline">

        
        <div className="level level--blue reveal" id="level-1">
            <div className="level__badge">
                <span className="level__number">1</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Python Foundations" data-ar="أساسيات بايثون"></h3>
                        <span className="level__sessions" data-en="Sessions 1 – 2" data-ar="الجلسات ١ – ٢"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Foundation Skills" data-ar="المهارات الأساسية"></span>
                </div>

                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-1">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">01</span>
                            <h4 className="lesson-card__title" data-en="Intro to Programming" data-ar="مقدمة في البرمجة"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Setup" data-ar="إعداد البيئة"></span>
                            <span className="topic-tag" data-en="How computers think" data-ar="كيف يفكر الحاسوب"></span>
                            <span className="topic-tag" data-en="Code Editors" data-ar="محررات الكود"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="First Python Script" data-ar="أول سكريبت بايثون"></span>
                        </div>
                    </div>

                    <div className="lesson-card" id="lesson-2">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">02</span>
                            <h4 className="lesson-card__title" data-en="Python Syntax" data-ar="قواعد كتابة الكود"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Indentation" data-ar="المسافات البادئة"></span>
                            <span className="topic-tag" data-en="Structure" data-ar="هيكلة الكود"></span>
                            <span className="topic-tag" data-en="Comments" data-ar="التعليقات"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Clean Code Practice" data-ar="تدريب كتابة كود نظيف"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Setting up environments and understanding core code structure." data-ar="تجهيز بيئة العمل وفهم هيكل الكود الأساسي."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-2">
            <div className="level__badge level__badge--orange">
                <span className="level__number">2</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Data & Interaction" data-ar="البيانات والتفاعل"></h3>
                        <span className="level__sessions" data-en="Sessions 3 – 4" data-ar="الجلسات ٣ – ٤"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Core Skills" data-ar="مهارات جوهرية"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-3">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">03</span>
                            <h4 className="lesson-card__title" data-en="Variables & Data Types" data-ar="المتغيرات وأنواع البيانات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Integers/Floats" data-ar="الأرقام"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Strings" data-ar="النصوص"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Booleans" data-ar="المنطق الثنائي"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Profile Creator" data-ar="صانع الملف الشخصي"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-4">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">04</span>
                            <h4 className="lesson-card__title" data-en="Input & Output" data-ar="المدخلات والمخرجات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="print()" data-ar="الطباعة"></span>
                            <span className="topic-tag topic-tag--orange" data-en="input()" data-ar="المدخلات"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Formatting" data-ar="التنسيق"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Interactive Chatbot" data-ar="روبوت محادثة تفاعلي"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Storing dynamic data and taking input from users." data-ar="تخزين بيانات متغيرة واستقبال مدخلات من المستخدم."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-3">
            <div className="level__badge">
                <span className="level__number">3</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Decisions & Logic" data-ar="القرارات والمنطق"></h3>
                        <span className="level__sessions" data-en="Sessions 5 – 7" data-ar="الجلسات ٥ – ٧"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Logic Skills" data-ar="مهارات المنطق"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-5">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">05</span>
                            <h4 className="lesson-card__title" data-en="Operators" data-ar="المعاملات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Arithmetic" data-ar="حسابية"></span>
                            <span className="topic-tag" data-en="Logical" data-ar="منطقية"></span>
                            <span className="topic-tag" data-en="Comparison" data-ar="مقارنة"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Math Quiz Tool" data-ar="أداة اختبار رياضيات"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-6">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">06</span>
                            <h4 className="lesson-card__title" data-en="Conditional Statements" data-ar="الشروط"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="if" data-ar="إذا"></span>
                            <span className="topic-tag" data-en="elif / else" data-ar="وإلا"></span>
                            <span className="topic-tag" data-en="Decision making" data-ar="اتخاذ القرار"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Age Checker" data-ar="فاحص العمر"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-7">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">07</span>
                            <h4 className="lesson-card__title" data-en="Nested Conditions" data-ar="الشروط المتداخلة"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Nested if" data-ar="الشروط المزدوجة"></span>
                            <span className="topic-tag" data-en="Multiple layers" data-ar="طبقات متعددة"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Adventure Game" data-ar="لعبة المغامرات النصية"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Applying logic to let the program make decisions." data-ar="تطبيق المنطق لجعل البرنامج يتخذ قراراته بنفسه."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-4">
            <div className="level__badge level__badge--orange">
                <span className="level__number">4</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Loops & Iteration" data-ar="التكرار والحلقات"></h3>
                        <span className="level__sessions" data-en="Sessions 8 – 10" data-ar="الجلسات ٨ – ١٠"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Automation Skills" data-ar="مهارات الأتمتة"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-8">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">08</span>
                            <h4 className="lesson-card__title" data-en="For Loop" data-ar="حلقة For"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Sequences" data-ar="التسلسل"></span>
                            <span className="topic-tag topic-tag--orange" data-en="range()" data-ar="نطاق"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Multiplication Table" data-ar="جدول الضرب"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-9">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">09</span>
                            <h4 className="lesson-card__title" data-en="While Loop" data-ar="حلقة While"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Condition repetition" data-ar="تكرار مشروط"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Infinite loops" data-ar="التكرار اللانهائي"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Guessing Game" data-ar="لعبة التخمين"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-10">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">10</span>
                            <h4 className="lesson-card__title" data-en="Loop Control" data-ar="التحكم بالحلقات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="break" data-ar="إيقاف"></span>
                            <span className="topic-tag topic-tag--orange" data-en="continue" data-ar="استمرار"></span>
                            <span className="topic-tag topic-tag--orange" data-en="pass" data-ar="تخطي"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Smart Menu" data-ar="القائمة الذكية"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Mastering repetitive tasks and controlling execution flow." data-ar="إتقان المهام المتكررة والتحكم في سير تنفيذ الكود."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-5">
            <div className="level__badge">
                <span className="level__number">5</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Text Processing" data-ar="معالجة النصوص"></h3>
                        <span className="level__sessions" data-en="Session 11" data-ar="الجلسة ١١"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="String Skills" data-ar="مهارات النصوص"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-11">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">11</span>
                            <h4 className="lesson-card__title" data-en="Strings Manipulation" data-ar="التعامل مع النصوص"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Operations" data-ar="العمليات النصية"></span>
                            <span className="topic-tag" data-en="Slicing" data-ar="التقطيع"></span>
                            <span className="topic-tag" data-en="Methods" data-ar="دوال النصوص"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Text Analyzer Tool" data-ar="أداة تحليل النصوص"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Manipulating text, slicing strings, and using string methods efficiently." data-ar="معالجة النصوص وتقطيعها واستخدام دوال النصوص بكفاءة."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-6">
            <div className="level__badge level__badge--orange">
                <span className="level__number">6</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Data Structures" data-ar="هياكل البيانات"></h3>
                        <span className="level__sessions" data-en="Sessions 12 – 13" data-ar="الجلسات ١٢ – ١٣"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Data Skills" data-ar="مهارات البيانات"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-12">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">12</span>
                            <h4 className="lesson-card__title" data-en="Lists Introduction" data-ar="مقدمة في القوائم"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Creating lists" data-ar="إنشاء القوائم"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Indexing" data-ar="الفهرسة"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Modifying" data-ar="التعديل"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Inventory System" data-ar="نظام إدارة المخزون"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-13">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">13</span>
                            <h4 className="lesson-card__title" data-en="List Operations" data-ar="عمليات القوائم"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="append()" data-ar="إضافة"></span>
                            <span className="topic-tag topic-tag--orange" data-en="remove()" data-ar="حذف"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Looping lists" data-ar="التكرار بالقوائم"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="To-Do List App" data-ar="تطبيق قائمة المهام"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Storing and managing multiple items of data in lists." data-ar="تخزين وإدارة عناصر متعددة من البيانات داخل القوائم."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-7">
            <div className="level__badge">
                <span className="level__number">7</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Functions & Modularity" data-ar="الدوال والبرمجة النمطية"></h3>
                        <span className="level__sessions" data-en="Sessions 14 – 15" data-ar="الجلسات ١٤ – ١٥"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Architecture" data-ar="هيكلة الكود"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-14">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">14</span>
                            <h4 className="lesson-card__title" data-en="Functions Basics" data-ar="أساسيات الدوال"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="def keyword" data-ar="تعريف الدوال"></span>
                            <span className="topic-tag" data-en="Calling" data-ar="استدعاء الدالة"></span>
                            <span className="topic-tag" data-en="Reusability" data-ar="إعادة الاستخدام"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Custom Greetings" data-ar="مُرحّب مخصص"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-15">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">15</span>
                            <h4 className="lesson-card__title" data-en="Functions with Parameters" data-ar="الدوال مع المعطيات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Arguments" data-ar="المعطيات"></span>
                            <span className="topic-tag" data-en="Return values" data-ar="القيمة المرجعة"></span>
                            <span className="topic-tag" data-en="Scope" data-ar="نطاق المتغيرات"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Calculator Function" data-ar="دالة الآلة الحاسبة"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Creating reusable blocks of code for cleaner architecture." data-ar="إنشاء كتل برمجية قابلة لإعادة الاستخدام لبناء كود نظيف."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-8">
            <div className="level__badge level__badge--orange">
                <span className="level__number">8</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Problem Solving" data-ar="حل المشكلات"></h3>
                        <span className="level__sessions" data-en="Session 16" data-ar="الجلسة ١٦"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Algorithmic Thinking" data-ar="التفكير الخوارزمي"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-16">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">16</span>
                            <h4 className="lesson-card__title" data-en="Algorithmic Thinking" data-ar="التفكير الخوارزمي"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Breaking problems" data-ar="تقسيم المشكلات"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Step-by-step logic" data-ar="المنطق التدريجي"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Debugging" data-ar="إصلاح الأخطاء"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Logic Puzzles" data-ar="ألغاز منطقية"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Approaching complex problems and solving them logically." data-ar="التعامل مع المشكلات المعقدة وحلها بشكل منطقي."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-9">
            <div className="level__badge level__badge--final">
                <span className="level__number">9</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Projects & Mastery" data-ar="المشاريع والإتقان"></h3>
                        <span className="level__sessions" data-en="Sessions 17 – 20" data-ar="الجلسات ١٧ – ٢٠"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--gradient" data-en="Mastery Level" data-ar="مستوى الإتقان"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-17">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">17</span>
                            <h4 className="lesson-card__title" data-en="Mini Projects" data-ar="مشاريع مصغرة"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Integration" data-ar="دمج المهارات"></span>
                            <span className="topic-tag" data-en="Practice" data-ar="تطبيق عملي"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Build 3 Mini Apps" data-ar="بناء ٣ تطبيقات مصغرة"></span>
                        </div>
                    </div>
                    <div className="lesson-card lesson-card--premium" id="lesson-18">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--gradient">18</span>
                            <h4 className="lesson-card__title" data-en="Final Capstone Project" data-ar="مشروع التخرج النهائي"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--gradient" data-en="Full Application" data-ar="تطبيق متكامل"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="Presentation" data-ar="عرض المشروع"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--gradient">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="10,2 13,8 19,9 14.5,13.5 15.5,19 10,16 4.5,19 5.5,13.5 1,9 7,8"/></svg>
                            <span data-en="Real-world Python App" data-ar="تطبيق بايثون حقيقي"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Building complete software solutions from scratch independently." data-ar="بناء حلول برمجية متكاملة من الصفر بشكل مستقل."></p>
            </div>
        </div>

    </div>
</section>


<section className="final-project" id="final-project-section">
    <div className="final-project__glow"></div>
    <div className="final-project__content reveal">
        <span className="section-badge section-badge--white" data-en="CAPSTONE" data-ar="المشروع الختامي"></span>
        <h2 className="final-project__title" data-en="Final Project" data-ar="المشروع النهائي"></h2>
        <p className="final-project__desc" data-en="Each student creates their own complete game — demonstrating everything they've learned throughout the course." data-ar="يقوم كل طالب بإنشاء لعبته الكاملة الخاصة — لإثبات كل ما تعلّمه خلال الدورة."></p>
        <div className="final-project__games">
            <div className="game-card reveal" id="game-car">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <rect x="5" y="10" width="30" height="20" rx="3" fill="#fff" opacity="0.9"/>
                        <rect x="8" y="14" width="24" height="12" fill="#1e1e1e"/>
                        <path d="M10 16h6M10 20h4" stroke="#4caf50" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <span data-en="Terminal App" data-ar="تطبيق وحدة تحكم"></span>
            </div>
            <div className="game-card reveal" id="game-space">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="14" stroke="#fff" strokeWidth="2"/>
                        <path d="M12 20h16M20 12v16" stroke="#F5B400" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
                <span data-en="Math Tool" data-ar="أداة رياضيات"></span>
            </div>
            <div className="game-card reveal" id="game-maze">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path d="M8 32h24M12 32V16M20 32v-8M28 32V10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                        <circle cx="12" cy="16" r="3" fill="#F5B400"/>
                        <circle cx="20" cy="24" r="3" fill="#F5B400"/>
                        <circle cx="28" cy="10" r="3" fill="#F5B400"/>
                    </svg>
                </div>
                <span data-en="Data Analyzer" data-ar="محلل بيانات"></span>
            </div>
            <div className="game-card reveal" id="game-runner">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <rect x="8" y="8" width="24" height="24" rx="4" fill="#fff" opacity="0.2" stroke="#fff" strokeWidth="2"/>
                        <path d="M14 20l4 4 8-8" stroke="#F5B400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span data-en="Quiz System" data-ar="نظام اختبارات"></span>
            </div>
        </div>
    </div>
</section>


<section className="outcomes" id="outcomes-section">
    <div className="outcomes__header reveal">
        <span className="section-badge section-badge--orange" data-en="OUTCOMES" data-ar="المخرجات"></span>
        <h2 className="section-title">
            <span data-en="What Will Your Child Be Able" data-ar="ماذا سيكون طفلك قادراً"></span><br />
            <span data-en=" to Do " data-ar=" على فعله "></span><span className="text--orange" data-en="After This Course" data-ar="بعد هذه الدورة"></span><span data-en="?" data-ar="؟"></span>
        </h2>
    </div>
    <div className="outcomes-grid">
        <div className="outcome-card reveal" id="outcome-games">
            <div className="outcome-card__icon outcome-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="28" height="20" rx="4"/><path d="M9 13v6M6 16h6"/><circle cx="22" cy="13" r="1.5" fill="currentColor"/><circle cx="26" cy="16" r="1.5" fill="currentColor"/><circle cx="22" cy="19" r="1.5" fill="currentColor"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Build Real Applications" data-ar="بناء تطبيقات حقيقية"></h4>
            <p className="outcome-card__desc" data-en="Create functional text-based apps, automate simple tasks, and process data." data-ar="إنشاء تطبيقات نصية وظيفية، وأتمتة المهام البسيطة، ومعالجة البيانات."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-think">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="14" r="10"/><path d="M10 14h4l2-4 2 6 2-2h4"/><path d="M12 28h8M14 24h4"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Think Like a Programmer" data-ar="التفكير كمبرمج"></h4>
            <p className="outcome-card__desc" data-en="Develop algorithmic thinking and break complex problems into simple steps." data-ar="تطوير التفكير الخوارزمي وتقسيم المشكلات المعقّدة إلى خطوات بسيطة."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-independent">
            <div className="outcome-card__icon outcome-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Create Projects Independently" data-ar="إنشاء مشاريع بشكل مستقل"></h4>
            <p className="outcome-card__desc" data-en="Confidently design, plan, and build their own coding projects without help." data-ar="تصميم وتخطيط وبناء مشاريع البرمجة الخاصة بهم بثقة ودون مساعدة."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-fundamentals">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24"/><path d="M10 18l3 3 5-6"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Understand Programming Fundamentals" data-ar="فهم أساسيات البرمجة"></h4>
            <p className="outcome-card__desc" data-en="Master loops, conditions, variables, events, and functions." data-ar="إتقان الحلقات والشروط والمتغيّرات والأحداث والدوال."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-creativity">
            <div className="outcome-card__icon outcome-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4C8 4 4 8 4 12c0 6 8 16 12 16s12-10 12-16c0-4-4-8-8-8-2 0-3 1-4 2-1-1-2-2-4-2z"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Improve Creativity" data-ar="تحسين الإبداع"></h4>
            <p className="outcome-card__desc" data-en="Transform imaginative ideas into real interactive digital creations." data-ar="تحويل الأفكار الإبداعية إلى إبداعات رقمية تفاعلية حقيقية."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-problem-solving">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4a8 8 0 0 0-8 8c0 3 2 5 4 7v5h8v-5c2-2 4-4 4-7a8 8 0 0 0-8-8z"/><path d="M12 28h8"/><path d="M14 20h4"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Develop Problem-Solving Skills" data-ar="تطوير مهارات حل المشكلات"></h4>
            <p className="outcome-card__desc" data-en="Tackle real-world challenges with critical thinking and logic." data-ar="مواجهة تحديات العالم الحقيقي بالتفكير النقدي والمنطق."></p>
        </div>
    </div>
</section>

<section className="section-enroll reveal" id="enroll">
    <div className="enroll-container">
        
        <div className="enroll-content">
            <div className="enroll-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                <span data-en="Limited Seats Available!" data-ar="مقاعد محدودة متاحة!">مقاعد محدودة متاحة!</span>
            </div>
            
            <h2 className="enroll-title">
                <span data-en="Ready to Learn " data-ar="مستعد لتعلم ">مستعد لتعلم </span><span className="text-highlight-orange" data-en="Python?" data-ar="بايثون؟">بايثون؟</span>
            </h2>
            
            <p className="enroll-subtitle" data-en="Join our next cohort and give your child the skills of the future." data-ar="انضم للدفعة القادمة وامنح طفلك مهارات المستقبل.">
                انضم للدفعة القادمة وامنح طفلك مهارات المستقبل.
            </p>
            
            <div className="enroll-features-list">
                <div className="enroll-feature-item">
                    <div className="enroll-feature-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span data-en="Live Interactive Sessions" data-ar="جلسات تفاعلية مباشرة">جلسات تفاعلية مباشرة</span>
                </div>
                <div className="enroll-feature-item">
                    <div className="enroll-feature-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span data-en="Expert Instructors" data-ar="دعم مستمر من المدربين">دعم مستمر من المدربين</span>
                </div>
            </div>
        </div>

        
        <div className="enroll-form-card">
            <div className="enroll-form-header">
                <h3 data-en="Reserve a Seat for Your Child" data-ar="احجز مقعداً لطفلك في الكورس">احجز مقعداً لطفلك في الكورس</h3>
                <p data-en="Register your child's details and our team will contact you." data-ar="سجل بيانات طفلك وسيتواصل معك فريقنا لاختيار المسار الأنسب له.">سجل بيانات طفلك وسيتواصل معك فريقنا لاختيار المسار الأنسب له.</p>
            </div>

            <form className="enroll-form" action="#" method="POST">
                
                <div className="enroll-input-group">
                    <label className="enroll-field-label" htmlFor="student-name-python" data-en="Student's Name" data-ar="اسم الطالب">اسم الطالب</label>
                    <div className="enroll-input-wrapper">
                        <svg className="enroll-input-icon enroll-icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <input type="text" id="student-name-python" className="enroll-premium-input" placeholder="اسم الطالب..." data-placeholder-en="Student Name..." required />
                    </div>
                </div>
                
                <div className="enroll-form-row">
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="student-age-python" data-en="Student's Age" data-ar="عمر الطالب">عمر الطالب</label>
                        <div className="enroll-input-wrapper">
                            <svg className="enroll-input-icon enroll-icon-age" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <input type="number" id="student-age-python" className="enroll-premium-input" placeholder="العمر (6-17)" data-placeholder-en="Age (6-17)" min="6" max="17" required />
                        </div>
                    </div>
                    
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="parent-phone-python" data-en="Parent's Phone" data-ar="رقم موبايل ولي الأمر">رقم موبايل ولي الأمر</label>
                        <div className="enroll-phone-wrapper">
                            <div className="enroll-phone-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <span className="enroll-phone-prefix">+20</span>
                            <input type="tel" id="parent-phone-python" className="enroll-phone-input" placeholder="10xxxxxxxx" data-placeholder-en="10xxxxxxxx" pattern="^(10|11|12|15)[0-9]{8}$" title="يجب أن يكون رقم موبايل مصري صحيح" maxlength="10" required />
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="enroll-submit-btn">
                    <span data-en="Reserve Your Seat Now" data-ar="احجز مقعدك الآن">احجز مقعدك الآن</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                
                <div className="enroll-secure-note">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span data-en="Your data is secure and will never be shared." data-ar="بياناتك آمنة ولن يتم مشاركتها أبداً.">بياناتك آمنة ولن يتم مشاركتها أبداً.</span>
                </div>
            </form>
        </div>
    </div>
</section>

        </div>
    );
};

export default KidsPython;
