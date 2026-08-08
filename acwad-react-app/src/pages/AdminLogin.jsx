import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { auth } from '../firebase';
import acwadLogo from '../../../2.jpg';
import './AdminDashboard.css';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // If user is already logged in, redirect to dashboard
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/admin', { replace: true });
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await setPersistence(auth, inMemoryPersistence);
            await signInWithEmailAndPassword(auth, email, password);
            // onAuthStateChanged will handle the redirect
        } catch (err) {
            console.error("Login error:", err);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
            } else if (err.code === 'auth/too-many-requests') {
                setError('محاولات كثيرة خاطئة، يرجى المحاولة لاحقاً.');
            } else {
                setError('حدث خطأ أثناء تسجيل الدخول: ' + err.message);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="admin-layout" dir="rtl">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <img src={acwadLogo} alt="ACWAD Logo" className="header-icon" />
                        <h1>ACWAD Admin</h1>
                        <p>تسجيل الدخول للوحة التحكم</p>
                    </div>

                    {error && <div className="error-msg">{error}</div>}

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>البريد الإلكتروني (Email)</label>
                            <div className="input-wrapper">
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label>كلمة المرور (Password)</label>
                            <div className="input-wrapper">
                                <input 
                                    type="password" 
                                    required 
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                        </div>

                        <button type="submit" className="login-btn" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px', animation: 'adminSpin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> 
                                    <span>جاري الدخول...</span>
                                </>
                            ) : (
                                <>
                                    <span>تسجيل الدخول</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', transform: 'rotate(180deg)' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
