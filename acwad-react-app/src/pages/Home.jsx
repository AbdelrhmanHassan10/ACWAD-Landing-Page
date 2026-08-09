import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import scratchIcon from '../../../scratch_3d_icon.png';
import './Home.css';

function Home() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    // PARTICLES ANIMATION
    const canvas = document.getElementById('hero-canvas');
    let animationFrameId;
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let particles = [];
      const symbols = ['{ }', '[ ]', '< >', 'JS', 'Scratch', 'def', 'Py', 'Lua', '1', '0', '+', '=', 'if', 'while'];
      const colors = ['rgba(13, 71, 161, 0.85)', 'rgba(245, 180, 0, 0.85)', 'rgba(76, 151, 255, 0.85)', 'rgba(153, 102, 255, 0.85)'];
      
      let mouseX = null;
      let mouseY = null;
      
      const hero = document.getElementById('hero-section');
      const handleMouseMove = (e) => {
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      };
      
      const handleMouseLeave = () => {
        mouseX = null;
        mouseY = null;
      };

      if (hero) {
        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseleave', handleMouseLeave);
      }
      
      function resizeCanvas() {
        if (canvas.parentElement) {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
      }
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      class Particle {
        constructor() {
          this.reset();
          this.y = Math.random() * canvas.height;
        }
        
        reset() {
          this.x = Math.random() * canvas.width;
          this.y = -20;
          this.text = symbols[Math.floor(Math.random() * symbols.length)];
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.size = Math.random() * 20 + 16;
          this.vx = Math.random() * 0.8 - 0.4;
          this.vy = Math.random() * 0.5 + 0.2;
        }
        
        update() {
          this.x += this.vx;
          this.y += this.vy;
          
          if (mouseX !== null && mouseY !== null) {
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              const angle = Math.atan2(dy, dx);
              this.x += Math.cos(angle) * force * 5;
              this.y += Math.sin(angle) * force * 5;
            }
          }
          
          if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
            this.reset();
          }
        }
        
        draw() {
          ctx.fillStyle = this.color;
          ctx.font = `bold ${this.size}px 'Outfit', sans-serif`;
          ctx.fillText(this.text, this.x, this.y);
        }
      }
      
      const particleCount = window.innerWidth <= 768 ? 12 : 35;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      function animateParticles() {
        animationFrameId = requestAnimationFrame(animateParticles);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y - 5);
              ctx.lineTo(particles[j].x, particles[j].y - 5);
              ctx.strokeStyle = `rgba(13, 71, 161, ${0.4 * (1 - dist / 110)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
        
        particles.forEach(p => {
          p.update();
          p.draw();
        });
      }
      
      animateParticles();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (hero) {
          hero.removeEventListener('mousemove', handleMouseMove);
          hero.removeEventListener('mouseleave', handleMouseLeave);
        }
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <div className="home-page">
      {/* HERO */}
      <header className="hero" id="hero-section">
        <canvas id="hero-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></canvas>
        <Header />
        <div className="hero__content" style={{ position: 'relative', zIndex: 2 }} data-aos="fade-up">
            <div className="hero-premium-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                {lang === 'ar' ? 'أكاديمية البرمجة الأولى' : 'The #1 Coding Academy'}
            </div>
            
            <h1 className="hero__title" id="main-title">
                <span>{lang === 'ar' ? 'اصنع مستقبلك مع' : 'Shape Your Future With'}</span><br/>
                <span className="hero__title--accent">{lang === 'ar' ? 'أكواد' : 'ACWAD'}</span>
            </h1>
            
            <p className="hero__subtitle">
                {lang === 'ar' 
                  ? 'رحلة تعليمية متكاملة مصممة خصيصاً لبناء مهارات التفكير المنطقي وهندسة البرمجيات بطريقة عملية وممتعة. اختر نقطة انطلاقك!' 
                  : 'An integrated learning journey designed to build logic and software engineering skills in a fun and practical way. Choose your starting point!'}
            </p>
        </div>
      </header>

      

      {/* TRACKS */}
      <section className="tracks-section" id="tracks">
          <div className="section-what__header" data-aos="fade-up" style={{ textAlign: 'center' }}>
              <span className="section-badge section-badge--orange">{lang === 'ar' ? 'المسارات الدراسية' : 'Learning Tracks'}</span>
              <h2 className="section-title">
                  {lang === 'ar' ? 'اكتشف المسار المناسب لك' : 'Discover Your Perfect Track'}
              </h2>
          </div>

          <div className="tracks-grid">
              {/* KIDS TRACK */}
              <Link to="/kids" className="track-card" data-aos="fade-up" data-aos-delay="100" style={{ '--track-color': '#3b82f6', '--track-glow': 'rgba(59, 130, 246, 0.4)', '--track-bg': 'rgba(59, 130, 246, 0.1)' }}>
                  <div className="track-card__icon">
                      <img src={scratchIcon} alt="Scratch" />
                  </div>
                  <span className="track-card__badge">{lang === 'ar' ? 'من 6 إلى 17 سنة' : 'Ages 6 to 17'}</span>
                  <h3 className="track-card__title">{lang === 'ar' ? 'مسارات الأطفال' : 'Kids Tracks'}</h3>
                  <p className="track-card__desc">
                      {lang === 'ar' 
                        ? 'البداية المثالية لتعلم المنطق البرمجي وصناعة الألعاب التفاعلية بطريقة بصرية سهلة وممتعة.' 
                        : 'The perfect start to learn programming logic and build interactive games visually in a fun and easy way.'}
                  </p>
                  <button className="track-card__btn">
                      {lang === 'ar' ? 'استكشف المسار' : 'Explore Track'}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          {lang === 'ar' ? <polyline points="15 18 9 12 15 6"></polyline> : <polyline points="9 18 15 12 9 6"></polyline>}
                      </svg>
                  </button>
              </Link>

              {/* ADULT TRACK */}
              <Link to="/adults" className="track-card" data-aos="fade-up" data-aos-delay="200" style={{ '--track-color': '#f97316', '--track-glow': 'rgba(249, 115, 22, 0.4)', '--track-bg': 'rgba(249, 115, 22, 0.1)' }}>
                  <div className="track-card__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <span className="track-card__badge">{lang === 'ar' ? '+18 سنة' : '+18 Years'}</span>
                  <h3 className="track-card__title">{lang === 'ar' ? 'مسارات الكبار' : 'Adults Tracks'}</h3>
                  <p className="track-card__desc">
                      {lang === 'ar' 
                        ? 'انتقل لتصميم وتطوير مشاريع برمجية حقيقية وتعلم هندسة البرمجيات الاحترافية من الصفر.' 
                        : 'Move to designing and developing real software projects and learn professional software engineering from scratch.'}
                  </p>
                  <button className="track-card__btn">
                      {lang === 'ar' ? 'استكشف المسار' : 'Explore Track'}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          {lang === 'ar' ? <polyline points="15 18 9 12 15 6"></polyline> : <polyline points="9 18 15 12 9 6"></polyline>}
                      </svg>
                  </button>
              </Link>
          </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="stats-section">
          <div className="stats-grid">
              <div className="stat-card opt-blue" data-aos="fade-up" data-aos-delay="100">
                  <div className="stat-number">+1000</div>
                  <div className="stat-label">{lang === 'ar' ? 'طالب متميز' : 'Excellent Students'}</div>
              </div>
              <div className="stat-card opt-orange" data-aos="fade-up" data-aos-delay="200">
                  <div className="stat-number">+50</div>
                  <div className="stat-label">{lang === 'ar' ? 'مشروع عملي' : 'Practical Projects'}</div>
              </div>
              <div className="stat-card opt-blue" data-aos="fade-up" data-aos-delay="300">
                  <div className="stat-number">+20</div>
                  <div className="stat-label">{lang === 'ar' ? 'خبير وموجه' : 'Expert Mentors'}</div>
              </div>
          </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="journey-section">
          <div className="section-what__header" data-aos="fade-up" style={{ textAlign: 'center' }}>
              <span className="section-badge section-badge--orange">{lang === 'ar' ? 'كيف نتعلم؟' : 'How We Learn?'}</span>
              <h2 className="section-title">
                  {lang === 'ar' ? 'رحلة التعلم في أكواد' : 'The Learning Journey'}
              </h2>
          </div>
          
          <div className="journey-grid">
              <div className="journey-step opt-blue" data-aos="fade-up" data-aos-delay="100">
                  <div className="step-number">1</div>
                  <h3 className="step-title">{lang === 'ar' ? 'اختر مسارك' : 'Choose Your Track'}</h3>
                  <p className="step-desc">
                      {lang === 'ar' ? 'نوفر مسارات مخصصة للأطفال وللكبار تبدأ معك من الصفر وحتى الاحتراف.' : 'We provide specialized tracks for kids and adults, taking you from zero to hero.'}
                  </p>
              </div>
              <div className="journey-step opt-orange" data-aos="fade-up" data-aos-delay="200">
                  <div className="step-number">2</div>
                  <h3 className="step-title">{lang === 'ar' ? 'تطبيق عملي 100%' : '100% Practical'}</h3>
                  <p className="step-desc">
                      {lang === 'ar' ? 'التعلم يتم بناءً على مشاريع حقيقية تضمن تثبيت المعلومة وبناء بورتفوليو قوي.' : 'Learning is based on real projects to ensure retention and build a strong portfolio.'}
                  </p>
              </div>
              <div className="journey-step opt-blue" data-aos="fade-up" data-aos-delay="300">
                  <div className="step-number">3</div>
                  <h3 className="step-title">{lang === 'ar' ? 'انطلق نحو مستقبلك' : 'Launch Your Future'}</h3>
                  <p className="step-desc">
                      {lang === 'ar' ? 'تخرج كمهندس برمجيات قادر على الدخول بقوة في سوق العمل أو بناء أفكارك الخاصة.' : 'Graduate as a software engineer capable of entering the job market strongly.'}
                  </p>
              </div>
          </div>
      </section>

      {/* WHY ACWAD */}
      <section className="section-what">
          <div className="section-what__header" data-aos="fade-up">
              <span className="section-badge section-badge--orange">{lang === 'ar' ? 'لماذا أكاديمية أكواد؟' : 'Why ACWAD Academy?'}</span>
              <h2 className="section-title" style={{ marginBottom: '15px' }}>
                  {lang === 'ar' ? 'وجهتك المثالية لاحتراف البرمجة' : 'Your Ultimate Programming Destination'}
              </h2>
          </div>
          <div className="what-grid">
              <div className="what-card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="what-card__icon" style={{ color: 'var(--blue)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <h3 className="what-card__title">{lang === 'ar' ? 'التعلم القائم على المشاريع' : 'Project-Based Learning'}</h3>
                  <p className="what-card__desc">
                      {lang === 'ar' ? 'نؤمن بالتعلم من خلال التطبيق العملي. يبني الطلاب تطبيقات وألعاباً حقيقية.' : 'We believe in learning by doing. Students build real applications and games.'}
                  </p>
              </div>
              <div className="what-card" data-aos="zoom-in" data-aos-delay="200">
                  <div className="what-card__icon" style={{ color: 'var(--orange)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  </div>
                  <h3 className="what-card__title">{lang === 'ar' ? 'بيئة ممتعة وتفاعلية' : 'Fun & Engaging Environment'}</h3>
                  <p className="what-card__desc">
                      {lang === 'ar' ? 'جو محفز يجعل من تعلم البرمجة تجربة ممتعة ومشوقة إلى أبعد الحدود.' : 'A motivating atmosphere that makes learning programming a highly enjoyable experience.'}
                  </p>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
