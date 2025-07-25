import React from 'react';
import { footerStyles as styles } from '../assets/dummystyles';
import { Link } from 'react-router-dom';
import { quickLinks, socialLinks } from '../assets/dummydata';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.logoBlock}>
                        <Link to='/' className={styles.logoLink}>
                            <img src={logo} alt="logo" className={styles.logoImg} />
                            <h1 className={styles.logoText}>
                                BOOKSHELL
                            </h1>
                        </Link>
                        <p className={styles.aboutText}>
                            Your gateway to literary adventure. Discover, explore, and inmerse yourself in the world of books.
                        </p>
                        <div className={styles.socialWrap}>
                            {socialLinks.map(({ Icon, url }, i) => (
                                <a href={url} key={i} target='_blank' className={styles.socialButton}>
                                    <Icon className={styles.socialIcon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.quickLinksBlock}>
                        <h3 className={styles.quickLinksTitle}>Quicl Links</h3>
                        <ul className={styles.quickLinksList}>
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.url} className={styles.quickLinkItem}>
                                        <span className={styles.quickLinkDot}></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.newsletterBlock}>
                        <h3 className={styles.newsletterTitle}>Stay Update</h3>
                        <p className={styles.newsletterText}>
                            Subscribe to our newsletter for the latest releases and exclusive offers.
                        </p>
                        <form className={styles.formWrap}>
                            <input type="email" placeholder='Enter your email' className={styles.input} />
                            <button type='submit' className={styles.button}>
                                <ArrowRight className='h-4 w-4' />
                            </button>
                        </form>
                    </div>
                    <div className={styles.contactBlock}>
                        <h3 className={styles.contactTitle}>Contact Us</h3>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <MapPin className={styles.contactIcon} />
                                <span>123 Literary Lane, BookVille, BK 12345</span>
                            </div>
                            <div className={styles.contactRow}>
                                <Phone className={styles.contactIconInline} />
                                <span>+34 7777777777</span>
                            </div>
                            <div className={styles.contactRow}>
                                <Mail className={styles.contactIconInline} />
                                <span>contact@bookshell.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyrightWrap}>
                    <p className={styles.copyrightText}>
                        &copy; {new Date().getFullYear()} BookShell. All Right Reserved.
                    </p>
                    <a href="https://kaltechservices.com" target='_blank' className='text-sm cursor-pointer text-gray-500 hover:text-purple-600'>
                        Powered By {" "} <br />
                        KalTech Digital Services
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
