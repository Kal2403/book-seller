import React, { useEffect, useState } from 'react';
import { navbarStyles } from '../assets/dummystyles';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoicon.png';
import { navItems } from '../assets/dummydata';

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
                    <div className={navbarStyles.desktopNavWrapper}>
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path
                            return (
                                <Link key={item.name} to={item.path} className={navbarStyles.navLink}>
                                    <div className='relative z-10 flex items-center'>
                                        <div className='relative'>
                                            <div className={navbarStyles.navIconWrapper(item.color)} />
                                            <item.icon className={navbarStyles.navIcon(isActive)} />
                                        </div>
                                        <span className={navbarStyles.navText(isActive, item.color)}>
                                            {item.name}
                                        </span>
                                        {isActive && <span className={navbarStyles.navUnderline(item.color)} />}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
