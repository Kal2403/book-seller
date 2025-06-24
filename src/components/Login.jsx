import React, { useEffect, useState } from 'react';
import { loginStyles } from '../assets/dummystyles';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => setToast({ ...toast, visible: false }), 3000)
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setToast({ visible: true, message: "All fields are required", type: 'error' })
            return
        }
        setIsSubmitting(true)
        try {
            localStorage.setItem('authToken', 'demo-token')
            setToast({ visible: true, message: "Login Succcessful", type: 'success' })
            setTimeout(() => navigate('/'), 2000)
        }
        catch {
            setToast({ visible: true, message: 'Login failed', type: 'error' })
        }
        finally {
            setIsSubmitting(false)
        }
    }

    const handleSignOut = () => {
        localStorage.removeItem('authToken')
        setToast({ visible: true, message: 'Signed out seccessfull', type: 'seccess' })
    }

    const isLoggedIn = localStorage.getItem('authToken')

    return (
        <div className={loginStyles.container}>
            {toast.visible && (
                <div className={loginStyles.toast(toast.type)}>{toast.message}</div>
            )}
            <div className={loginStyles.card}>
                <Link to="/" className={loginStyles.backLink}>
                    <ArrowRight className='rotate-180 mr-1 h-4 w-4' />
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default Login;
