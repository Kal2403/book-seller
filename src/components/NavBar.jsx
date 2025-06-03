import React, { useEffect, useState } from 'react';
import { navbarStyles } from '../assets/dummystyles';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoicon.png';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={navbarStyles.nav(scrolled)}>
            <div className={navbarStyles.container}>
                <div className='flex items-center justify-between'>
                    <Link to='/' className={navbarStyles.logoContainer}>
                        <div className='relative group'>
                            <div className={navbarStyles.logoGradient} />
                            <div className='relative flex items-center'>
                                <img src={logo} alt='Logo' className={navbarStyles.logoImage} />
                                <div className='ml-2'>
                                    <h1 className={navbarStyles.logoText}>BOOKSHELL</h1>
                                    <div className={navbarStyles.logoUnderline} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
