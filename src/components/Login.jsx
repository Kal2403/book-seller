import React, { useEffect, useState } from 'react';
import { loginStyles } from '../assets/dummystyles';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {

    return (
        <div className={loginStyles.container}>
            {toast.visible && (
                <div className={loginStyles.toast(toast.type)}>{toast.message}</div>
            )}
        </div>
    )
}

export default Login;
