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

    return (
        <div className={loginStyles.container}>
            {toast.visible && (
                <div className={loginStyles.toast(toast.type)}>{toast.message}</div>
            )}
        </div>
    )
}

export default Login;
