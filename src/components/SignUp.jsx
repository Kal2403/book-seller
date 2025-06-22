import React, { useEffect, useState } from 'react';
import { Signup } from '../assets/dummystyles';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

const SignUp = () => {

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
