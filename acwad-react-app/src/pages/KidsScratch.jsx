
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './KidsTracks.css'; // Shared CSS for Kids Tracks

const KidsScratch = () => {
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
            <span data-en="Professional Kids Coding Program" data-ar="برنامج البرمجة الاحترافي للأطفال"></span>
            <span className="dot dot--blue"></span>
        </p>
        <h1 className="hero__title" id="main-title">
            <span data-en="SCRATCH PROGRAMMING" data-ar="خريطة طريق برمجة"></span><br />
            <span className="hero__title--accent" data-en="ROADMAP" data-ar="سكراتش"></span>
        </h1>
        <p className="hero__subtitle" data-en="FROM BEGINNER TO YOUNG GAME DEVELOPER" data-ar="من المبتدئ إلى مطوّر ألعاب صغير"></p>
        <p className="hero__desc" data-en="A professional project-based learning journey designed to help kids build creativity, logical thinking, and real programming skills through Scratch." data-ar="رحلة تعليمية احترافية قائمة على المشاريع، مصمّمة لمساعدة الأطفال على تطوير الإبداع والتفكير المنطقي ومهارات البرمجة الحقيقية من خلال سكراتش."></p>
    </div>
   
</header>


<section className="info-cards" id="info-cards-section">
    <div className="info-card reveal" id="info-age">
        <div className="info-card__icon info-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/><circle cx="19" cy="8" r="3"/><path d="M22 21v-1a4 4 0 0 0-4-4"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Age Group" data-ar="الفئة العمرية"></span>
            <span className="info-card__value" data-en="8 — 14 Years" data-ar="٨ — ١٤ سنة"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-sessions">
        <div className="info-card__icon info-card__icon--orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="12" cy="16" r="2"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Total Sessions" data-ar="إجمالي الجلسات"></span>
            <span className="info-card__value" data-en="10 Sessions" data-ar="١٠ جلسات"></span>
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
            <span className="info-card__label" data-en="Final Game" data-ar="لعبة نهائية"></span>
            <span className="info-card__value" data-en="Own Project" data-ar="مشروع خاص"></span>
        </div>
    </div>
</section>


<section className="section-what" id="what-is-scratch">
    <div className="section-what__header reveal">
        <span className="section-badge section-badge--blue" data-en="ABOUT" data-ar="نبذة"></span>
        <h2 className="section-title">
            <span data-en="What is " data-ar="ما هو "></span><span className="text--orange" data-en="Scratch" data-ar="سكراتش"></span><span data-en="?" data-ar="؟"></span>
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
            <h3 className="what-card__title" data-en="Visual Programming" data-ar="البرمجة المرئية"></h3>
            <p className="what-card__desc" data-en="Scratch is a visual programming language created by MIT, designed specifically for kids to learn coding through colorful drag-and-drop blocks." data-ar="سكراتش هو لغة برمجة مرئية طوّرها معهد MIT، مصمّمة خصيصاً للأطفال لتعلّم البرمجة من خلال كتل ملوّنة بالسحب والإفلات."></p>
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
            <h3 className="what-card__title" data-en="Games & Animation" data-ar="الألعاب والرسوم المتحركة"></h3>
            <p className="what-card__desc" data-en="Children learn coding by creating their own interactive games, animations, and stories — making learning fun and deeply engaging." data-ar="يتعلّم الأطفال البرمجة من خلال إنشاء ألعابهم التفاعلية والرسوم المتحركة والقصص — مما يجعل التعلّم ممتعاً وجذاباً."></p>
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
            <h3 className="what-card__title" data-en="Creativity & Problem Solving" data-ar="الإبداع وحل المشكلات"></h3>
            <p className="what-card__desc" data-en="Scratch encourages creative thinking and problem-solving, helping kids develop essential 21st-century skills while having fun." data-ar="يشجّع سكراتش التفكير الإبداعي وحل المشكلات، مما يساعد الأطفال على تطوير مهارات القرن الحادي والعشرين الأساسية مع الاستمتاع."></p>
        </div>
    </div>
</section>


<section className="section-sandbox" id="scratch-sandbox">
    <div className="section-sandbox__header reveal">
        <span className="section-badge section-badge--blue" data-en="PLAYGROUND" data-ar="منطقة اللعب"></span>
        <h2 className="section-title">
            <span data-en="Interactive " data-ar="مُحاكي "></span><span className="text--orange" data-en="Scratch Sandbox" data-ar="سكراتش التفاعلي"></span>
        </h2>
        <p className="sandbox-desc" data-en="Click the blocks below to build a stack, then run the sequence to animate the mascot!" data-ar="اضغط على الأوامر بالأسفل لبناء مجموعة، ثم شغّل التسلسل لتحريك شخصية القط!"></p>
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
                    <h4 className="sandbox-subtitle" data-en="Blocks Palette (Click to Add)" data-ar="مجموعة الأوامر (اضغط للإضافة)"></h4>
                    <div className="palette-blocks">
                        <button className="scratch-btn scratch-btn--motion" data-action="move" data-en="Move 30 Steps" data-ar="تحرك ٣٠ خطوة">
                            <span className="s-icon">🏃</span>
                            <span data-en="Move 30 Steps" data-ar="تحرك ٣٠ خطوة"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--motion" data-action="turn" data-en="Turn 45 Degrees" data-ar="استدر ٤٥ درجة">
                            <span className="s-icon">🔄</span>
                            <span data-en="Turn 45 Degrees" data-ar="استدر ٤٥ درجة"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--looks" data-action="say" data-en="Say Hello!" data-ar="قل مرحباً!">
                            <span className="s-icon">💬</span>
                            <span data-en="Say Hello!" data-ar="قل مرحباً!"></span>
                        </button>
                        <button className="scratch-btn scratch-btn--sound" data-action="sound" data-en="Play Sound Meow" data-ar="شغل صوت مواء">
                            <span className="s-icon">🔊</span>
                            <span data-en="Play Sound Meow" data-ar="شغل صوت مواء"></span>
                        </button>
                    </div>
                </div>
                
                <div className="sandbox-workspace-wrapper">
                    <h4 className="sandbox-subtitle" data-en="Your Code Stack" data-ar="مجموعة الأوامر الخاصة بك"></h4>
                    <div className="sandbox-workspace" id="sandbox-workspace">
                        <div className="workspace-empty" data-en="Click on the blocks above to build your program!" data-ar="اضغط على الأوامر البرمجية في الأعلى لبناء برنامجك هنا!"></div>
                    </div>
                </div>
                
                <div className="sandbox-controls">
                    <button className="control-btn control-btn--flag" id="btn-run-sandbox">
                        <span className="s-icon">🟢</span>
                        <span data-en="Run Stack" data-ar="تشغيل الأوامر"></span>
                    </button>
                    <button className="control-btn control-btn--clear" id="btn-clear-sandbox">
                        <span className="s-icon">🗑️</span>
                        <span data-en="Clear All" data-ar="مسح الكل"></span>
                    </button>
                </div>
            </div>
        </div>
        
        
        <div className="sandbox-stage-panel">
            <div className="sandbox-stage-header">
                <span className="stage-badge" data-en="STAGE" data-ar="منصة العرض"></span>
                <span className="stage-coords" id="sandbox-coords">X: 0, Y: 0</span>
            </div>
            
            <div className="sandbox-stage" id="sandbox-stage">
                
                <div className="sandbox-grid-lines" id="sandbox-grid-lines"></div>
                
                
                <div className="sandbox-bubble" id="sandbox-bubble" data-en="Hello!" data-ar="مرحباً!">Hello!</div>
                
                
                <div className="sandbox-mascot" id="sandbox-mascot" style={{"transform":"translate(0px, 0px) rotate(0deg) scaleX(1)"}}>
                    <svg className="cat-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <ellipse cx="50" cy="50" rx="35" ry="30" fill="#FF8C1A"/>
                        
                        <polygon points="20,30 35,15 40,32" fill="#FF8C1A"/>
                        <polygon points="80,30 65,15 60,32" fill="#FF8C1A"/>
                        <polygon points="23,28 32,18 36,29" fill="#FFB366"/>
                        <polygon points="77,28 68,18 64,29" fill="#FFB366"/>
                        
                        <ellipse cx="43" cy="58" rx="8" ry="6" fill="#FFFFFF"/>
                        <ellipse cx="57" cy="58" rx="8" ry="6" fill="#FFFFFF"/>
                        
                        <ellipse cx="38" cy="42" rx="7" ry="9" fill="#FFFFFF"/>
                        <ellipse cx="62" cy="42" rx="7" ry="9" fill="#FFFFFF"/>
                        <ellipse cx="38" cy="42" rx="3" ry="5" fill="#000000"/>
                        <ellipse cx="62" cy="42" rx="3" ry="5" fill="#000000"/>
                        
                        <polygon points="47,51 53,51 50,55" fill="#FF3300"/>
                        
                        <path d="M43,58 Q50,65 57,58" stroke="#000000" strokeWidth="2.5" fill="none"/>
                        
                        <line x1="12" y1="52" x2="28" y2="54" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="10" y1="58" x2="28" y2="58" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="12" y1="64" x2="28" y2="62" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="88" y1="52" x2="72" y2="54" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="90" y1="58" x2="72" y2="58" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="88" y1="64" x2="72" y2="62" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
            
            <div className="sandbox-stage-footer">
                <button className="stage-control-btn" id="btn-toggle-grid" data-en="Show Grid" data-ar="شبكة الإحداثيات">Show Grid</button>
                <button className="stage-control-btn" id="btn-reset-mascot" data-en="Reset Mascot" data-ar="إعادة الضبط">Reset Mascot</button>
            </div>
        </div>
    </div>
</section>


<section className="section-why" id="why-learn-scratch">
    <div className="section-why__header reveal">
        <span className="section-badge section-badge--orange" data-en="BENEFITS" data-ar="الفوائد"></span>
        <h2 className="section-title">
            <span data-en="Why Should Kids Learn " data-ar="لماذا يجب أن يتعلّم الأطفال "></span><span className="text--blue" data-en="Scratch" data-ar="سكراتش"></span><span data-en="?" data-ar="؟"></span>
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
                        <h3 className="level__title" data-en="Getting Started" data-ar="البداية"></h3>
                        <span className="level__sessions" data-en="Sessions 1 – 2" data-ar="الجلسات ١ – ٢"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Foundation Skills" data-ar="المهارات الأساسية"></span>
                </div>

                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-1">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">01</span>
                            <h4 className="lesson-card__title" data-en="Introduction to Scratch" data-ar="مقدمة في سكراتش"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Stage" data-ar="المنصة"></span>
                            <span className="topic-tag" data-en="Sprite" data-ar="الكائن"></span>
                            <span className="topic-tag" data-en="Backdrops" data-ar="الخلفيات"></span>
                            <span className="topic-tag" data-en="Costumes" data-ar="المظاهر"></span>
                            <span className="topic-tag" data-en="Sounds" data-ar="الأصوات"></span>
                            <span className="topic-tag" data-en="Blocks Palette" data-ar="لوحة الكتل"></span>
                            <span className="topic-tag" data-en="Green Flag" data-ar="العلم الأخضر"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Moving Character + Changing Background" data-ar="تحريك شخصية + تغيير الخلفية"></span>
                        </div>
                    </div>

                    <div className="lesson-card" id="lesson-2">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">02</span>
                            <h4 className="lesson-card__title" data-en="Motion & Looks" data-ar="الحركة والمظهر"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="move steps" data-ar="تحريك خطوات"></span>
                            <span className="topic-tag" data-en="turn" data-ar="الدوران"></span>
                            <span className="topic-tag" data-en="go to" data-ar="الانتقال إلى"></span>
                            <span className="topic-tag" data-en="say / think" data-ar="قل / فكّر"></span>
                            <span className="topic-tag" data-en="show / hide" data-ar="إظهار / إخفاء"></span>
                            <span className="topic-tag" data-en="switch costume" data-ar="تبديل المظهر"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Character Animation with Movement & Dialogue" data-ar="تحريك شخصية مع حركة وحوار"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Basic interface navigation and simple animation logic." data-ar="التنقل الأساسي في الواجهة ومنطق الحركة البسيط."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-2">
            <div className="level__badge level__badge--orange">
                <span className="level__number">2</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Making Things Alive" data-ar="إحياء الأشياء"></h3>
                        <span className="level__sessions" data-en="Sessions 3 – 4" data-ar="الجلسات ٣ – ٤"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Interactive Skills" data-ar="المهارات التفاعلية"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-3">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">03</span>
                            <h4 className="lesson-card__title" data-en="Sounds, Events & Variables" data-ar="الأصوات والأحداث والمتغيّرات"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="play sound" data-ar="تشغيل صوت"></span>
                            <span className="topic-tag topic-tag--orange" data-en="when clicked" data-ar="عند النقر"></span>
                            <span className="topic-tag topic-tag--orange" data-en="broadcast" data-ar="البث"></span>
                            <span className="topic-tag topic-tag--orange" data-en="variables" data-ar="المتغيّرات"></span>
                            <span className="topic-tag topic-tag--orange" data-en="score tracking" data-ar="تتبّع النتيجة"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Balloon Pop Game" data-ar="لعبة فرقعة البالونات"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-4">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">04</span>
                            <h4 className="lesson-card__title" data-en="Control Blocks & Conditions" data-ar="كتل التحكّم والشروط"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="if / else" data-ar="إذا / وإلا"></span>
                            <span className="topic-tag topic-tag--orange" data-en="repeat" data-ar="التكرار"></span>
                            <span className="topic-tag topic-tag--orange" data-en="forever" data-ar="للأبد"></span>
                            <span className="topic-tag topic-tag--orange" data-en="wait" data-ar="الانتظار"></span>
                            <span className="topic-tag topic-tag--orange" data-en="conditionals" data-ar="الشروط"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Animated Name Project" data-ar="مشروع الاسم المتحرّك"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Understanding events, variables, and control flow." data-ar="فهم الأحداث والمتغيرات والتحكم في التدفق."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-3">
            <div className="level__badge">
                <span className="level__number">3</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Game Developer Mode" data-ar="وضع مطوّر الألعاب"></h3>
                        <span className="level__sessions" data-en="Sessions 5 – 6" data-ar="الجلسات ٥ – ٦"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Game Dev Skills" data-ar="مهارات تطوير الألعاب"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-5">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">05</span>
                            <h4 className="lesson-card__title" data-en="Clone Concept" data-ar="مفهوم الاستنساخ"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="create clone" data-ar="إنشاء نسخة"></span>
                            <span className="topic-tag" data-en="when I start as clone" data-ar="عند البدء كنسخة"></span>
                            <span className="topic-tag" data-en="delete clone" data-ar="حذف النسخة"></span>
                            <span className="topic-tag" data-en="clone behavior" data-ar="سلوك النسخة"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Catching Apple Game" data-ar="لعبة التقاط التفاح"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-6">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">06</span>
                            <h4 className="lesson-card__title" data-en="Sensing Blocks" data-ar="كتل الاستشعار"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="touching" data-ar="اللمس"></span>
                            <span className="topic-tag" data-en="distance to" data-ar="المسافة إلى"></span>
                            <span className="topic-tag" data-en="ask & answer" data-ar="اسأل وأجب"></span>
                            <span className="topic-tag" data-en="mouse position" data-ar="موقع الماوس"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Underwater Escape Game" data-ar="لعبة الهروب تحت الماء"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Advanced game mechanics and object cloning." data-ar="آليات الألعاب المتقدمة واستنساخ الكائنات."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-4">
            <div className="level__badge level__badge--orange">
                <span className="level__number">4</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Smart Programs" data-ar="البرامج الذكية"></h3>
                        <span className="level__sessions" data-en="Sessions 7 – 8" data-ar="الجلسات ٧ – ٨"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Advanced Skills" data-ar="مهارات متقدّمة"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-7">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">07</span>
                            <h4 className="lesson-card__title" data-en="User Interaction" data-ar="تفاعل المستخدم"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="ask block" data-ar="كتلة اسأل"></span>
                            <span className="topic-tag topic-tag--orange" data-en="answer variable" data-ar="متغيّر الإجابة"></span>
                            <span className="topic-tag topic-tag--orange" data-en="input validation" data-ar="التحقّق من المدخلات"></span>
                            <span className="topic-tag topic-tag--orange" data-en="feedback" data-ar="التغذية الراجعة"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Quiz Game" data-ar="لعبة الأسئلة"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-8">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">08</span>
                            <h4 className="lesson-card__title" data-en="Operators & Calculator" data-ar="العمليات الحسابية والآلة الحاسبة"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="math operators" data-ar="العمليات الرياضية"></span>
                            <span className="topic-tag topic-tag--orange" data-en="join text" data-ar="دمج النصوص"></span>
                            <span className="topic-tag topic-tag--orange" data-en="comparisons" data-ar="المقارنات"></span>
                            <span className="topic-tag topic-tag--orange" data-en="logic gates" data-ar="البوابات المنطقية"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Calculator App" data-ar="تطبيق الآلة الحاسبة"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="User interaction and mathematical operations." data-ar="تفاعل المستخدم والعمليات الحسابية."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-5">
            <div className="level__badge level__badge--final">
                <span className="level__number">5</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Junior Programmer" data-ar="المبرمج الصغير"></h3>
                        <span className="level__sessions" data-en="Sessions 9 – 10" data-ar="الجلسات ٩ – ١٠"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--gradient" data-en="Mastery Level" data-ar="مستوى الإتقان"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card lesson-card--premium" id="lesson-9">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--gradient">09</span>
                            <h4 className="lesson-card__title" data-en="Lists & Custom Blocks" data-ar="القوائم والكتل المخصّصة"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--gradient" data-en="lists" data-ar="القوائم"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="add / delete / item" data-ar="إضافة / حذف / عنصر"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="custom blocks" data-ar="كتل مخصّصة"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="functions" data-ar="الدوال"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="modular code" data-ar="البرمجة النمطية"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--gradient">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="10,2 13,8 19,9 14.5,13.5 15.5,19 10,16 4.5,19 5.5,13.5 1,9 7,8"/></svg>
                            <span data-en="Complete Game Using Functions" data-ar="لعبة كاملة باستخدام الدوال"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Data structures and modular programming." data-ar="هياكل البيانات والبرمجة النمطية."></p>
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
                        <rect x="5" y="16" width="30" height="12" rx="4" fill="#fff" opacity="0.9"/>
                        <circle cx="12" cy="30" r="4" fill="#F5B400" stroke="#fff" strokeWidth="1.5"/>
                        <circle cx="28" cy="30" r="4" fill="#F5B400" stroke="#fff" strokeWidth="1.5"/>
                        <rect x="10" y="10" width="20" height="10" rx="3" fill="#fff" opacity="0.6"/>
                        <line x1="20" y1="10" x2="20" y2="20" stroke="#0D47A1" strokeWidth="1" opacity="0.3"/>
                    </svg>
                </div>
                <span data-en="Car Game" data-ar="لعبة السيارات"></span>
            </div>
            <div className="game-card reveal" id="game-space">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <polygon points="20,4 26,30 20,26 14,30" fill="#fff" opacity="0.9"/>
                        <circle cx="20" cy="18" r="3" fill="#F5B400"/>
                        <circle cx="10" cy="12" r="1.5" fill="#fff" opacity="0.5"/>
                        <circle cx="32" cy="8" r="1" fill="#fff" opacity="0.4"/>
                        <circle cx="8" cy="32" r="1.5" fill="#F5B400" opacity="0.4"/>
                        <circle cx="34" cy="28" r="1" fill="#fff" opacity="0.3"/>
                    </svg>
                </div>
                <span data-en="Space Shooter" data-ar="حرب الفضاء"></span>
            </div>
            <div className="game-card reveal" id="game-maze">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="4" width="32" height="32" rx="4" fill="#fff" opacity="0.15" stroke="#fff" strokeWidth="1.5"/>
                        <path d="M10 4v16h8v-8h8v16H10v8" stroke="#fff" strokeWidth="2" opacity="0.7" fill="none"/>
                        <circle cx="14" cy="12" r="3" fill="#F5B400"/>
                    </svg>
                </div>
                <span data-en="Maze Game" data-ar="لعبة المتاهة"></span>
            </div>
            <div className="game-card reveal" id="game-runner">
                <div className="game-card__icon">
                    <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="22" cy="10" r="4" fill="#fff" opacity="0.8"/>
                        <path d="M18 16l4 8-6 2 2 10M26 16l-2 6 6 4-2 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                        <line x1="4" y1="36" x2="36" y2="36" stroke="#F5B400" strokeWidth="2"/>
                    </svg>
                </div>
                <span data-en="Runner Game" data-ar="لعبة الجري"></span>
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
            <h4 className="outcome-card__title" data-en="Build Interactive Games" data-ar="بناء ألعاب تفاعلية"></h4>
            <p className="outcome-card__desc" data-en="Create fully functional games from scratch with animations, scoring, and levels." data-ar="إنشاء ألعاب كاملة من الصفر مع الرسوم المتحركة والنتائج والمستويات."></p>
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
                <span data-en="Ready to Learn " data-ar="مستعد لتعلم ">مستعد لتعلم </span><span className="text-highlight-orange" data-en="Scratch?" data-ar="سكراتش؟">سكراتش؟</span>
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
                    <label className="enroll-field-label" htmlFor="student-name-scratch" data-en="Student's Name" data-ar="اسم الطالب">اسم الطالب</label>
                    <div className="enroll-input-wrapper">
                        <svg className="enroll-input-icon enroll-icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <input type="text" id="student-name-scratch" className="enroll-premium-input" placeholder="اسم الطالب..." data-placeholder-en="Student Name..." required />
                    </div>
                </div>
                
                <div className="enroll-form-row">
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="student-age-scratch" data-en="Student's Age" data-ar="عمر الطالب">عمر الطالب</label>
                        <div className="enroll-input-wrapper">
                            <svg className="enroll-input-icon enroll-icon-age" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <input type="number" id="student-age-scratch" className="enroll-premium-input" placeholder="العمر (6-17)" data-placeholder-en="Age (6-17)" min="6" max="17" required />
                        </div>
                    </div>
                    
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="parent-phone-scratch" data-en="Parent's Phone" data-ar="رقم موبايل ولي الأمر">رقم موبايل ولي الأمر</label>
                        <div className="enroll-phone-wrapper">
                            <div className="enroll-phone-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <span className="enroll-phone-prefix">+20</span>
                            <input type="tel" id="parent-phone-scratch" className="enroll-phone-input" placeholder="10xxxxxxxx" data-placeholder-en="10xxxxxxxx" pattern="^(10|11|12|15)[0-9]{8}$" title="يجب أن يكون رقم موبايل مصري صحيح" maxlength="10" required />
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

export default KidsScratch;
