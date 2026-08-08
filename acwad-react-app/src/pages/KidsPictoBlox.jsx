
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './KidsTracks.css'; // Shared CSS for Kids Tracks

const KidsPictoBlox = () => {
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
                    reveal.classList.add('active');
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
            <Header />
            <header className="hero" id="hero-section" style={{"-AccentColor":"#8b5cf6"}}>
    <canvas id="hero-canvas"></canvas>

    <div className="hero__content">
        <p className="hero__eyebrow">
            <span className="dot" style={{"background":"#a78bfa","boxShadow":"0 0 10px #a78bfa"}}></span>
            <span data-en="Professional Kids Coding Program" data-ar="برنامج البرمجة الاحترافي للأطفال"></span>
            <span className="dot dot--blue"></span>
        </p>
        <h1 className="hero__title" id="main-title">
            <span data-en="PICTOBLOX AI" data-ar="مسار الذكاء الاصطناعي"></span><br />
            <span className="hero__title--accent" style={{"color":"#a78bfa","textShadow":"0 0 30px rgba(167,139,250,0.5)"}} data-en="CREATOR" data-ar="بيكتوبلوكس"></span>
        </h1>
        <p className="hero__subtitle" data-en="FROM CURIOUS BEGINNER TO YOUNG AI CREATOR" data-ar="من مبتدئ فضولي إلى صانع ذكاء اصطناعي صغير"></p>
        <p className="hero__desc" data-en="A project-based journey that turns kids into builders of real AI — teaching them to think logically, solve problems, and code with purpose, one smart project at a time." data-ar="رحلة قائمة على المشاريع تحول الأطفال إلى بناة للذكاء الاصطناعي الحقيقي — تعلمهم التفكير المنطقي وحل المشكلات والبرمجة الهادفة، من خلال مشاريع ذكية ممتعة."></p>
    </div>
   
</header>


<section className="info-cards" id="info-cards-section">
    <div className="info-card reveal" id="info-age">
        <div className="info-card__icon info-card__icon--blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/><circle cx="19" cy="8" r="3"/><path d="M22 21v-1a4 4 0 0 0-4-4"/></svg>
        </div>
        <div className="info-card__text">
            <span className="info-card__label" data-en="Age Group" data-ar="الفئة العمرية"></span>
            <span className="info-card__value" data-en="9 — 15 Years" data-ar="٩ — ١٥ سنة"></span>
        </div>
    </div>
    <div className="info-card reveal" id="info-sessions">
        <div className="info-card__icon" style={{"background":"rgba(167, 139, 250, 0.1)","color":"#8b5cf6"}}>
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
        <div className="info-card__icon" style={{"background":"rgba(167, 139, 250, 0.1)","color":"#8b5cf6"}}>
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
            <span className="info-card__label" data-en="Final Project" data-ar="المشروع النهائي"></span>
            <span className="info-card__value" data-en="Final AI Project" data-ar="مشروع ذكاء اصطناعي"></span>
        </div>
    </div>
</section>


<section className="section-what" id="what-is-scratch">
    <div className="section-what__header reveal">
        <span className="section-badge section-badge--blue" style={{"background":"rgba(167, 139, 250, 0.1)","color":"#8b5cf6"}} data-en="ABOUT" data-ar="نبذة"></span>
        <h2 className="section-title">
            <span data-en="What is " data-ar="ما هو "></span><span className="text--orange" style={{"color":"#8b5cf6"}} data-en="PictoBlox" data-ar="بيكتوبلوكس"></span><span data-en="?" data-ar="؟"></span>
        </h2>
    </div>
    <div className="what-grid">
        <div className="what-card reveal" id="what-card-1">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="8" width="40" height="28" rx="4" fill="#8b5cf6" opacity="0.1" stroke="#8b5cf6" strokeWidth="2"/>
                    <rect x="10" y="14" width="12" height="4" rx="2" fill="#a78bfa"/>
                    <rect x="10" y="22" width="16" height="4" rx="2" fill="#8b5cf6" opacity="0.5"/>
                    <rect x="10" y="30" width="10" height="3" rx="1.5" fill="#a78bfa" opacity="0.6"/>
                    <circle cx="36" cy="22" r="6" fill="#8b5cf6" opacity="0.15"/>
                    <path d="M34 22l4-2v4l-4-2z" fill="#8b5cf6"/>
                    <rect x="14" y="40" width="20" height="3" rx="1.5" fill="#8b5cf6" opacity="0.2"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="Visual Programming" data-ar="البرمجة المرئية"></h3>
            <p className="what-card__desc" data-en="PictoBlox is a visual, block-based programming platform built for kids to learn coding through simple drag-and-drop blocks — no complex syntax, just logic and creativity." data-ar="بيكتوبلوكس هي منصة برمجة مرئية تعتمد على الكتل مصممة للأطفال لتعلم البرمجة من خلال السحب والإفلات — بدون كتابة أكواد معقدة، مجرد منطق وإبداع."></p>
        </div>
        <div className="what-card reveal" id="what-card-2">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" fill="#8b5cf6" opacity="0.1" stroke="#8b5cf6" strokeWidth="2"/>
                    <circle cx="18" cy="20" r="3" fill="#a78bfa"/>
                    <circle cx="30" cy="18" r="2.5" fill="#8b5cf6" opacity="0.5"/>
                    <path d="M16 28 C16 22, 32 22, 32 28" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <rect x="22" y="14" width="4" height="4" fill="#a78bfa"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="AI & Smart Projects" data-ar="الذكاء الاصطناعي والمشاريع الذكية"></h3>
            <p className="what-card__desc" data-en="Children don't just build games and animations — they learn to create smart, intelligent projects by training their own AI models for image, sound, and object recognition, all using simple blocks." data-ar="لا يقتصر عمل الأطفال على بناء الألعاب — بل يتعلمون إنشاء مشاريع ذكية من خلال تدريب نماذج الذكاء الاصطناعي الخاصة بهم للتعرف على الصور والصوت والكائنات باستخدام كتل بسيطة."></p>
        </div>
        <div className="what-card reveal" id="what-card-3">
            <div className="what-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="6" width="36" height="36" rx="18" fill="#8b5cf6" opacity="0.08"/>
                    <path d="M18 16 L24 12 L30 16 L30 24 L24 28 L18 24Z" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" strokeWidth="1.5"/>
                    <circle cx="24" cy="20" r="4" fill="#8b5cf6" opacity="0.6"/>
                    <path d="M14 34 C14 30, 19 28, 24 28 C29 28, 34 30, 34 34" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
            </div>
            <h3 className="what-card__title" data-en="Creativity & Problem Solving" data-ar="الإبداع وحل المشكلات"></h3>
            <p className="what-card__desc" data-en="PictoBlox encourages creative thinking and problem-solving, helping kids build essential 21st-century skills — combining logical thinking with real, hands-on AI exploration." data-ar="تشجع منصة بيكتوبلوكس التفكير الإبداعي وحل المشكلات، مما يساعد الأطفال على بناء مهارات القرن الحادي والعشرين الأساسية من خلال الجمع بين التفكير المنطقي واستكشاف الذكاء الاصطناعي العملي."></p>
        </div>
    </div>
</section>


<section className="section-sandbox" id="scratch-sandbox" style={{"display":"none"}}>
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
        <span className="section-badge section-badge--orange" style={{"background":"rgba(167, 139, 250, 0.1)","color":"#8b5cf6"}} data-en="BENEFITS" data-ar="الفوائد"></span>
        <h2 className="section-title">
            <span data-en="Why Should Kids Learn " data-ar="لماذا يجب أن يتعلّم الأطفال "></span><span className="text--blue" style={{"color":"#8b5cf6"}} data-en="PictoBlox" data-ar="بيكتوبلوكس"></span><span data-en="?" data-ar="؟"></span>
        </h2>
    </div>
    <div className="why-grid">
        <div className="why-card reveal" id="why-card-logic">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M10 16h4l2-4 2 8 2-4h4"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Logical Thinking" data-ar="التفكير المنطقي"></h4>
            <p className="why-card__desc" data-en="Develop structured reasoning and sequential logic skills through block-based coding." data-ar="تطوير التفكير المنظم ومهارات المنطق التسلسلي من خلال البرمجة القائمة على الكتل."></p>
        </div>
        <div className="why-card reveal" id="why-card-creativity">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4a8 8 0 0 0-8 8c0 3 1.5 5 4 7v5h8v-5c2.5-2 4-4 4-7a8 8 0 0 0-8-8z"/><path d="M12 28h8"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Creativity" data-ar="الإبداع"></h4>
            <p className="why-card__desc" data-en="Express ideas through code, smart projects, and interactive digital creations." data-ar="التعبير عن الأفكار من خلال البرمجة والمشاريع الذكية والإبداعات الرقمية التفاعلية."></p>
        </div>
        <div className="why-card reveal" id="why-card-problem">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="24" height="24" rx="4"/><path d="M10 16h12M16 10v12"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Problem Solving" data-ar="حل المشكلات"></h4>
            <p className="why-card__desc" data-en="Learn to break big challenges into small, solvable steps — the same way real AI systems are built." data-ar="تعلم تقسيم التحديات الكبيرة إلى خطوات صغيرة قابلة للحل — بنفس الطريقة التي تُبنى بها أنظمة الذكاء الاصطناعي الحقيقية."></p>
        </div>
        <div className="why-card reveal" id="why-card-computational">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/><path d="M10 18l3 3 5-6"/><path d="M18 18h6M18 22h6"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Computational Thinking" data-ar="التفكير الحاسوبي"></h4>
            <p className="why-card__desc" data-en="Master algorithms, patterns, and data-driven thinking — the foundation behind every AI model." data-ar="إتقان الخوارزميات والأنماط والتفكير المبني على البيانات — الأساس وراء كل نموذج للذكاء الاصطناعي."></p>
        </div>
        <div className="why-card reveal" id="why-card-game">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"/></svg>
            </div>
            <h4 className="why-card__title" data-en="AI & Machine Learning" data-ar="الذكاء الاصطناعي وتعلم الآلة"></h4>
            <p className="why-card__desc" data-en="Train real AI models to recognize images, sounds, and objects — turning ideas into intelligent projects." data-ar="تدريب نماذج الذكاء الاصطناعي للتعرف على الصور والصوت والكائنات — لتحويل الأفكار لمشاريع ذكية."></p>
        </div>
        <div className="why-card reveal" id="why-card-confidence">
            <div className="why-card__icon" style={{"color":"#8b5cf6","background":"rgba(167, 139, 250, 0.1)"}}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
            </div>
            <h4 className="why-card__title" data-en="Confidence Building" data-ar="بناء الثقة بالنفس"></h4>
            <p className="why-card__desc" data-en="Gain confidence by creating, training, and sharing real AI-powered projects." data-ar="اكتساب الثقة بالنفس من خلال إنشاء وتدريب ومشاركة مشاريع حقيقية تعمل بالذكاء الاصطناعي."></p>
        </div>
    </div>
</section>


<section className="roadmap" id="roadmap-section">
    <div className="roadmap__header reveal">
        <span className="section-badge section-badge--blue" style={{"background":"rgba(167, 139, 250, 0.1)","color":"#8b5cf6"}} data-en="CURRICULUM" data-ar="المنهج الدراسي"></span>
        <h2 className="section-title">
            <span data-en="The Learning " data-ar="خريطة "></span><span className="text--orange" style={{"color":"#8b5cf6"}} data-en="Roadmap" data-ar="التعلّم"></span>
        </h2>
        <p className="roadmap__header-desc" data-en="A step-by-step journey from zero to young AI creator" data-ar="رحلة خطوة بخطوة من الصفر إلى صانع ذكاء اصطناعي صغير"></p>
    </div>

    <div className="roadmap-timeline">

        
        <div className="level level--blue reveal" id="level-1">
            <div className="level__badge">
                <span className="level__number">1</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Basics of Coding & Logic" data-ar="أساسيات البرمجة والمنطق"></h3>
                        <span className="level__sessions" data-en="Sessions 1 – 4" data-ar="الجلسات ١ – ٤"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Foundation" data-ar="التأسيس"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-1">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">01</span>
                            <h4 className="lesson-card__title" data-en="Welcome to PictoBlox" data-ar="مرحباً بك في بيكتوبلوكس"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Interface" data-ar="واجهة البرنامج"></span>
                            <span className="topic-tag" data-en="Sprites" data-ar="الكائنات"></span>
                            <span className="topic-tag" data-en="Motion" data-ar="الحركة"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Interactive Greeting Story" data-ar="قصة ترحيب تفاعلية"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-2">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">02</span>
                            <h4 className="lesson-card__title" data-en="Control Flow & Events" data-ar="التحكم في التدفق والأحداث"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Loops" data-ar="الحلقات التكرارية"></span>
                            <span className="topic-tag" data-en="Conditions" data-ar="الشروط"></span>
                            <span className="topic-tag" data-en="Events" data-ar="الأحداث"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Maze Navigation Game" data-ar="لعبة التنقل في المتاهة"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Mastery of logical sequencing and basic algorithmic concepts." data-ar="إتقان التسلسل المنطقي والمفاهيم الخوارزمية الأساسية."></p>
            </div>
        </div>

        
        <div className="level level--orange reveal" id="level-2">
            <div className="level__badge level__badge--orange">
                <span className="level__number">2</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="AI & Camera Sensing" data-ar="الذكاء الاصطناعي واستشعار الكاميرا"></h3>
                        <span className="level__sessions" data-en="Sessions 5 – 8" data-ar="الجلسات ٥ – ٨"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Computer Vision" data-ar="الرؤية الحاسوبية"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-3">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">03</span>
                            <h4 className="lesson-card__title" data-en="Video Sensing Basics" data-ar="أساسيات استشعار الفيديو"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Camera Input" data-ar="إدخال الكاميرا"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Motion Detection" data-ar="اكتشاف الحركة"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Virtual Pet Interaction" data-ar="التفاعل مع الحيوانات الأليفة الافتراضية"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-4">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">04</span>
                            <h4 className="lesson-card__title" data-en="Face Tracking & Filters" data-ar="تتبع الوجه والفلاتر"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Face Detection" data-ar="اكتشاف الوجه"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Coordinates" data-ar="الإحداثيات"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Smart Instagram Filters App" data-ar="تطبيق فلاتر ذكية مثل إنستغرام"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Understanding how computers 'see' and track human movement." data-ar="فهم كيفية 'رؤية' أجهزة الكمبيوتر وتتبعها للحركة البشرية."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-3">
            <div className="level__badge">
                <span className="level__number">3</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Machine Learning Mastery" data-ar="إتقان تعلم الآلة"></h3>
                        <span className="level__sessions" data-en="Sessions 9 – 12" data-ar="الجلسات ٩ – ١٢"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--blue" data-en="Model Training" data-ar="تدريب النماذج"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-5">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">05</span>
                            <h4 className="lesson-card__title" data-en="Training Image Models" data-ar="تدريب نماذج الصور"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Data Collection" data-ar="جمع البيانات"></span>
                            <span className="topic-tag" data-en="Classification" data-ar="التصنيف"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Recycling Sorting AI" data-ar="ذكاء اصطناعي لفرز النفايات"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-6">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num">06</span>
                            <h4 className="lesson-card__title" data-en="Audio & Voice AI" data-ar="الذكاء الاصطناعي الصوتي"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag" data-en="Voice Recognition" data-ar="التعرف على الصوت"></span>
                            <span className="topic-tag" data-en="Speech to Text" data-ar="تحويل الكلام لنص"></span>
                        </div>
                        <div className="lesson-card__project">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Voice-Controlled Smart Car" data-ar="سيارة ذكية يتم التحكم بها بالصوت"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Collecting data and training custom machine learning models." data-ar="جمع البيانات وتدريب نماذج تعلم الآلة المخصصة."></p>
            </div>
        </div>
        
        
        <div className="level level--orange reveal" id="level-4">
            <div className="level__badge level__badge--orange">
                <span className="level__number">4</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Advanced Detection & NLP" data-ar="الاستكشاف المتقدم واللغات"></h3>
                        <span className="level__sessions" data-en="Sessions 13 – 16" data-ar="الجلسات ١٣ – ١٦"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--orange" data-en="Advanced AI" data-ar="ذكاء اصطناعي متقدم"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card" id="lesson-7">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">07</span>
                            <h4 className="lesson-card__title" data-en="Pose & Object Detection" data-ar="اكتشاف وضعية الجسم والأشياء"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Body Tracking" data-ar="تتبع الجسم"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Object Recognition" data-ar="التعرف على الأشياء"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Fruit Ninja Motion Game" data-ar="لعبة فروت نينجا الحركية"></span>
                        </div>
                    </div>
                    <div className="lesson-card" id="lesson-8">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--orange">08</span>
                            <h4 className="lesson-card__title" data-en="Natural Language Processing" data-ar="معالجة اللغات الطبيعية"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--orange" data-en="Text Analysis" data-ar="تحليل النصوص"></span>
                            <span className="topic-tag topic-tag--orange" data-en="Chatbots" data-ar="روبوتات الدردشة"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--orange">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M8 7l5 3-5 3V7z"/></svg>
                            <span data-en="Smart Assistant Chatbot" data-ar="روبوت دردشة مساعد ذكي"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Building complex AI systems using advanced APIs and models." data-ar="بناء أنظمة ذكاء اصطناعي معقدة باستخدام واجهات ونماذج متقدمة."></p>
            </div>
        </div>

        
        <div className="level level--blue reveal" id="level-5">
            <div className="level__badge level__badge--final">
                <span className="level__number">5</span>
            </div>
            <div className="level__content">
                <div className="level__header">
                    <div>
                        <h3 className="level__title" data-en="Young AI Creator" data-ar="صانع الذكاء الاصطناعي"></h3>
                        <span className="level__sessions" data-en="Sessions 17 – 20" data-ar="الجلسات ١٧ – ٢٠"></span>
                    </div>
                    <span className="level__skill-tag level__skill-tag--gradient" data-en="Mastery Level" data-ar="مستوى الإتقان"></span>
                </div>
                <div className="lesson-cards">
                    <div className="lesson-card lesson-card--premium" id="lesson-9">
                        <div className="lesson-card__head">
                            <span className="lesson-card__num lesson-card__num--gradient">09</span>
                            <h4 className="lesson-card__title" data-en="Capstone AI Integration" data-ar="دمج الذكاء الاصطناعي الختامي"></h4>
                        </div>
                        <div className="lesson-card__topics">
                            <span className="topic-tag topic-tag--gradient" data-en="Project Planning" data-ar="تخطيط المشاريع"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="System Design" data-ar="تصميم الأنظمة"></span>
                            <span className="topic-tag topic-tag--gradient" data-en="AI Integration" data-ar="دمج الذكاء الاصطناعي"></span>
                        </div>
                        <div className="lesson-card__project lesson-card__project--gradient">
                            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="10,2 13,8 19,9 14.5,13.5 15.5,19 10,16 4.5,19 5.5,13.5 1,9 7,8"/></svg>
                            <span data-en="Final Team-Based AI Game" data-ar="لعبة ذكاء اصطناعي نهائية جماعية"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level__skill">
                <p className="level__skill-title" data-en="Skill Gained" data-ar="المهارة المكتسبة"></p>
                <p className="level__skill-desc" data-en="Independently designing and building a complete, real-world AI application." data-ar="تصميم وبناء تطبيق ذكاء اصطناعي حقيقي ومتكامل بشكل مستقل."></p>
            </div>
        </div>

    </div>
</section>


<section className="final-project" id="final-project-section">
    <div className="final-project__glow"></div>
    <div className="final-project__content reveal">
        <span className="section-badge section-badge--white" style={{"color":"#111","background":"#fff"}} data-en="CAPSTONE" data-ar="المشروع الختامي"></span>
        <h2 className="final-project__title" data-en="Final AI Project" data-ar="مشروع الذكاء الاصطناعي النهائي"></h2>
        <p className="final-project__desc" data-en="Students team up in pairs to design, build, and train their own complete AI-powered game — combining everything they've learned in coding and Artificial Intelligence throughout the course." data-ar="يتعاون الطلاب في أزواج لتصميم وبناء وتدريب لعبتهم الكاملة التي تعمل بالذكاء الاصطناعي — حيث يجمعون بين كل ما تعلموه في البرمجة والذكاء الاصطناعي طوال الدورة."></p>
        <p className="final-project__desc" style={{"fontSize":"1.1rem","opacity":"0.8","marginTop":"-10px"}} data-en="Note: We divide the team into 2 groups, each building a distinct AI project." data-ar="ملاحظة: يتم تقسيم الفريق إلى مجموعتين، كل مجموعة تعمل على مشروع ذكاء اصطناعي مستقل."></p>
        <div className="final-project__games">
            <div className="game-card reveal" id="game-ai-1" style={{"flex":"1","justifyContent":"center","padding":"30px"}}>
                <div className="game-card__icon" style={{"background":"rgba(167, 139, 250, 0.2)","color":"#fff"}}>
                    <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="16" stroke="#fff" strokeWidth="2" opacity="0.8"/>
                        <path d="M12 20h16M20 12v16" stroke="#8b5cf6" strokeWidth="3" opacity="0.9"/>
                        <circle cx="20" cy="20" r="4" fill="#a78bfa"/>
                    </svg>
                </div>
                <span data-en="AI Project 1" data-ar="مشروع الذكاء الاصطناعي ١"></span>
            </div>
            <div className="game-card reveal" id="game-ai-2" style={{"flex":"1","justifyContent":"center","padding":"30px"}}>
                <div className="game-card__icon" style={{"background":"rgba(167, 139, 250, 0.2)","color":"#fff"}}>
                    <svg viewBox="0 0 40 40" fill="none">
                        <rect x="8" y="12" width="24" height="16" rx="4" stroke="#fff" strokeWidth="2" opacity="0.8"/>
                        <circle cx="14" cy="20" r="3" fill="#a78bfa"/>
                        <circle cx="26" cy="20" r="3" fill="#a78bfa"/>
                        <path d="M16 26 C16 28, 24 28, 24 26" stroke="#fff" strokeWidth="2" opacity="0.9"/>
                    </svg>
                </div>
                <span data-en="AI Project 2" data-ar="مشروع الذكاء الاصطناعي ٢"></span>
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
            <h4 className="outcome-card__title" data-en="Build Interactive AI-Powered Games" data-ar="بناء ألعاب تفاعلية مدعومة بالذكاء الاصطناعي"></h4>
            <p className="outcome-card__desc" data-en="Create fully functional games from scratch — with animations, scoring, levels, and real AI features like recognition and detection built in." data-ar="إنشاء ألعاب كاملة من الصفر — مع الرسوم المتحركة والنتائج والمستويات، وميزات ذكاء اصطناعي حقيقية مثل التعرف على الصور واكتشافها."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-think">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="14" r="10"/><path d="M10 14h4l2-4 2 6 2-2h4"/><path d="M12 28h8M14 24h4"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Think Like a Programmer" data-ar="التفكير كمبرمج"></h4>
            <p className="outcome-card__desc" data-en="Develop algorithmic thinking and learn to break complex problems into simple, logical steps." data-ar="تطوير التفكير الخوارزمي وتعلم كيفية تقسيم المشكلات المعقدة إلى خطوات بسيطة ومنطقية."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-independent">
            <div className="outcome-card__icon outcome-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Train & Build Their Own AI Models" data-ar="تدريب وبناء نماذج الذكاء الاصطناعي"></h4>
            <p className="outcome-card__desc" data-en="Confidently collect data, train, and test their own AI models — from image recognition to pose detection — without needing any prior AI background." data-ar="جمع البيانات وتدريب واختبار نماذج الذكاء الاصطناعي الخاصة بهم بثقة — من التعرف على الصور إلى اكتشاف وضعية الجسم — دون الحاجة لأي خبرة سابقة."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-fundamentals">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24"/><path d="M10 18l3 3 5-6"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Create Projects Independently" data-ar="إنشاء مشاريع بشكل مستقل"></h4>
            <p className="outcome-card__desc" data-en="Confidently design, plan, and build their own coding and AI projects without help." data-ar="تصميم وتخطيط وبناء مشاريع البرمجة والذكاء الاصطناعي الخاصة بهم بثقة ودون مساعدة."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-creativity">
            <div className="outcome-card__icon outcome-card__icon--blue">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4C8 4 4 8 4 12c0 6 8 16 12 16s12-10 12-16c0-4-4-8-8-8-2 0-3 1-4 2-1-1-2-2-4-2z"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Understand Programming Fundamentals" data-ar="فهم أساسيات البرمجة"></h4>
            <p className="outcome-card__desc" data-en="Master loops, conditions, variables, events, and functions — the foundation behind every smart project they build." data-ar="إتقان الحلقات والشروط والمتغيرات والأحداث والدوال — الأساس وراء كل مشروع ذكي يقومون ببنائه."></p>
        </div>
        <div className="outcome-card reveal" id="outcome-problem-solving">
            <div className="outcome-card__icon outcome-card__icon--orange">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4a8 8 0 0 0-8 8c0 3 2 5 4 7v5h8v-5c2-2 4-4 4-7a8 8 0 0 0-8-8z"/><path d="M12 28h8"/><path d="M14 20h4"/></svg>
            </div>
            <h4 className="outcome-card__title" data-en="Improve Creativity" data-ar="تحسين الإبداع"></h4>
            <p className="outcome-card__desc" data-en="Transform imaginative ideas into real, interactive digital creations — powered by both code and AI." data-ar="تحويل الأفكار الخيالية إلى إبداعات رقمية تفاعلية حقيقية — مدعومة بكل من البرمجة والذكاء الاصطناعي."></p>
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
                <span data-en="Ready to Learn " data-ar="مستعد لتعلم ">مستعد لتعلم </span><span className="text-highlight-orange" data-en="Pictoblox?" data-ar="بيكتوبلوكس؟">بيكتوبلوكس؟</span>
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
                    <label className="enroll-field-label" htmlFor="student-name-pictoblox" data-en="Student's Name" data-ar="اسم الطالب">اسم الطالب</label>
                    <div className="enroll-input-wrapper">
                        <svg className="enroll-input-icon enroll-icon-name" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <input type="text" id="student-name-pictoblox" className="enroll-premium-input" placeholder="اسم الطالب..." data-placeholder-en="Student Name..." required />
                    </div>
                </div>
                
                <div className="enroll-form-row">
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="student-age-pictoblox" data-en="Student's Age" data-ar="عمر الطالب">عمر الطالب</label>
                        <div className="enroll-input-wrapper">
                            <svg className="enroll-input-icon enroll-icon-age" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <input type="number" id="student-age-pictoblox" className="enroll-premium-input" placeholder="العمر (6-17)" data-placeholder-en="Age (6-17)" min="6" max="17" required />
                        </div>
                    </div>
                    
                    
                    <div className="enroll-input-group">
                        <label className="enroll-field-label" htmlFor="parent-phone-pictoblox" data-en="Parent's Phone" data-ar="رقم موبايل ولي الأمر">رقم موبايل ولي الأمر</label>
                        <div className="enroll-phone-wrapper">
                            <div className="enroll-phone-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <span className="enroll-phone-prefix">+20</span>
                            <input type="tel" id="parent-phone-pictoblox" className="enroll-phone-input" placeholder="10xxxxxxxx" data-placeholder-en="10xxxxxxxx" pattern="^(10|11|12|15)[0-9]{8}$" title="يجب أن يكون رقم موبايل مصري صحيح" maxlength="10" required />
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

<footer className="footer" id="footer-section">
    <div className="footer__inner">
        <div className="footer__brand-row">
            <img src="/assets/kids/acwad logo(1)(1).png" alt="ACWAD Logo Icon" className="footer__logo-icon" />
            <div className="footer__brand-text">
                <div className="brand-title-row">
                    <span className="brand-en">ACWAD</span>
                    <span className="brand-ar">أكواد</span>
                </div>
                <span className="footer__brand-sub">BUILD YOUR FUTURE</span>
            </div>
        </div>
        <p className="footer__text" data-en="ACWAD — Empowering the Next Generation of Creators" data-ar="أكواد — تمكين الجيل القادم من المبدعين"></p>
        <div className="footer__line"></div>
    </div>
</footer>


        </div>
    );
};

export default KidsPictoBlox;
