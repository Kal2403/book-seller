import React, { useEffect, useState } from 'react';
import { 
    container, formContainer, geometricOverlay, glassBox, headerText, imageSection, 
    imageStyle, imageWrapper, inputField, inputWrapper, overlayEffect, paragraphText, 
    scrollText, scrollTextSection, searchButton, statBox, statLabel, statNumber, 
    statsContainer, subHeader 
} from '../assets/dummystyles';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { words } from '../assets/dummydata';
import img from '../assets/banner1.png';

const Banner = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [currentWord, setCurrentWord] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();

        if(searchQuery.trim()) {
            navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    return (
        <div className={container}>
            <div className={glassBox}>
                <div className={geometricOverlay}>
                    <div className='absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl' />
                    <div className='absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 h-40 w-40 md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl' />
                </div>
                <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
                    <div className='space-y-6 md:space-y-8'>
                        <div className='space-y-4 md:space-y-6'>
                            <h1 className={headerText}>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#285876] to-[#43C6AC]'>
                                    Mindful
                                </span>
                                <br />
                                <span className={subHeader}>
                                    Reading Experience
                                </span>
                            </h1>
                            <p className={paragraphText}>
                                Curated knowledge journey that challenge perceptons and inspire growth.
                                Discover transformative content crefted for the modern intellect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
