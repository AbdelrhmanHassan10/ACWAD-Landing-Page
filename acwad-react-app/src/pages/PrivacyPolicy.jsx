import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <Header />
      <div className="privacy-container" data-aos="fade-up">
        {lang === 'ar' ? (
          <>
            <h1>سياسة الخصوصية</h1>
            <p className="last-updated">آخر تحديث: أغسطس 2026</p>
            
            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>مقدمة</h2>
              <p>مرحباً بك في أكاديمية أكواد (ACWAD Academy). نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند زيارتك لموقعنا واستخدام خدماتنا.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>المعلومات التي نجمعها</h2>
              <p>نحن نجمع البيانات التالية لتقديم خدماتنا التعليمية بشكل أفضل:</p>
              <ul>
                <li><strong>معلومات الهوية:</strong> الاسم، العمر، أو المرحلة الدراسية (للأطفال).</li>
                <li><strong>معلومات الاتصال:</strong> رقم الهاتف والبريد الإلكتروني للتواصل بخصوص الدورات.</li>
                <li><strong>معلومات إضافية:</strong> اسم الجامعة والكلية (للكبار).</li>
              </ul>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>كيف نستخدم معلوماتك؟</h2>
              <p>نستخدم بياناتك الشخصية في الأغراض التالية:</p>
              <ul>
                <li>تسجيلك في المسارات التعليمية المناسبة.</li>
                <li>التواصل معك بخصوص مواعيد الدورات وتأكيد الحجز.</li>
                <li>تحسين خدماتنا وتقديم تجربة مستخدم أفضل.</li>
              </ul>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>حماية البيانات</h2>
              <p>نحن نتخذ كافة الإجراءات الأمنية المناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح. لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف ثالثة لأغراض تسويقية دون موافقتك الصريحة.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>خصوصية الأطفال</h2>
              <p>بما أننا نقدم مسارات تعليمية مخصصة للأطفال، فإننا نؤكد أن جمع بيانات الأطفال يتم فقط عبر أولياء أمورهم أثناء عملية التسجيل. نحن لا نجمع أي بيانات شخصية مباشرة من الأطفال دون سن 13 عاماً، ونلتزم بالحفاظ على سرية معلوماتهم تماماً.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>الأطراف الثالثة والخدمات الخارجية</h2>
              <p>قد نستخدم خدمات لأطراف ثالثة لتسهيل عملنا، مثل تحليلات جوجل (Google Analytics) لتحسين تجربة الموقع، أو خدمات الدفع الإلكتروني. هذه الجهات قد تصل إلى بعض بياناتك بالقدر اللازم فقط لتنفيذ مهامها، ومحظور عليها استخدامها لأي أغراض أخرى.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>ملفات تعريف الارتباط (Cookies)</h2>
              <p>يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك، وتذكر تفضيلاتك، ومعرفة كيف تتفاعل مع الموقع. يمكنك دائماً تعطيلها من خلال إعدادات متصفحك.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>حقوقك تجاه بياناتك</h2>
              <p>أنت تمتلك الحق الكامل في طلب الاطلاع على بياناتك الشخصية التي نمتلكها، أو طلب تعديلها، أو حتى حذفها تماماً من سجلاتنا في أي وقت تريده عن طريق التواصل معنا.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>التعديلات على سياسة الخصوصية</h2>
              <p>نحتفظ بالحق في تحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة وتحديث تاريخ "آخر تحديث" بالأعلى. استمرارك في استخدام الموقع يعني موافقتك على هذه التغييرات.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>تواصل معنا</h2>
              <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:</p>
              <p><strong>رقم الهاتف / واتساب:</strong> <a href="https://wa.me/201011745357" dir="ltr">+20 101 174 5357</a></p>
            </section>
          </>
        ) : (
          <>
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: August 2026</p>
            
            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>Introduction</h2>
              <p>Welcome to ACWAD Academy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and use our services.</p>
            </section>

            <section className="privacy-section" data-aos="fade-up" data-aos-delay="100">
              <h2>Data We Collect</h2>
              <p>We may collect, use, and store different kinds of personal data to provide better educational services:</p>
              <ul>
                <li><strong>Identity Data:</strong> Name, age, or grade level (for kids).</li>
                <li><strong>Contact Data:</strong> Phone number and email address to communicate regarding courses.</li>
                <li><strong>Additional Data:</strong> University and faculty name (for adults).</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>How We Use Your Data</h2>
              <p>We use your personal data in the following ways:</p>
              <ul>
                <li>To register you for the appropriate educational tracks.</li>
                <li>To contact you regarding course schedules and booking confirmations.</li>
                <li>To improve our services and deliver a better user experience.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We do not sell or share your personal data with third parties for marketing purposes without your explicit consent.</p>
            </section>

            <section className="privacy-section">
              <h2>Children's Privacy</h2>
              <p>As we offer educational tracks for children, we ensure that children's data is collected only through their parents during registration. We do not directly collect any personal information from children under the age of 13, and we are strictly committed to keeping their information confidential.</p>
            </section>

            <section className="privacy-section">
              <h2>Third-Party Services</h2>
              <p>We may use third-party services to facilitate our operations, such as Google Analytics to improve website experience, or payment gateways. These parties may have access to some of your data only to perform their tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            </section>

            <section className="privacy-section">
              <h2>Cookies</h2>
              <p>Our website uses cookies to enhance your experience, remember your preferences, and understand how you interact with our site. You can always disable cookies through your browser settings.</p>
            </section>

            <section className="privacy-section">
              <h2>Your Data Rights</h2>
              <p>You have the full right to request access to the personal data we hold about you, request corrections, or even request complete deletion from our records at any time by contacting us.</p>
            </section>

            <section className="privacy-section">
              <h2>Changes to this Policy</h2>
              <p>We reserve the right to update this privacy policy from time to time. Any changes will be posted on this page and the "Last Updated" date at the top will be revised. Your continued use of the website constitutes your acceptance of these changes.</p>
            </section>

            <section className="privacy-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at:</p>
              <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/201011745357" dir="ltr">+20 101 174 5357</a></p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
