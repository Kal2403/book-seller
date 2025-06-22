import React, { useEffect, useState } from 'react';
import { Signup } from '../assets/dummystyles';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

const SignUp = () => {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });
    const navigate = useNavigate();

    return (
        <div className={Signup.container}>
            {toast.visible && (
                <div className={`${Signup.toastBase} ${toast.type === success ? Signup.toastSuccess : Signup.toastError}`}>
                    {toast.message}
                </div>
            )}
        </div>
    )
}

export default SignUp;
