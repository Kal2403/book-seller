import React from 'react';
import { homeAboutStyles as s } from '../assets/dummystyles';
import HomeAboutImage from '../assets/HomeAboutImage.png';
import { featuredBooks, hastats } from '../assets/dummydata';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeAbout = () => {
    return (
        <div className={s.wrapper}>
            <div className='absolute inset-0 overflow-hidden'>
                <div className={s.bgBlur1}></div>
                <div className={s.bgBlur2}></div>
            </div>
        </div>
    )
}

export default HomeAbout;
