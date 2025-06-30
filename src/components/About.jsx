import React from 'react';
import aboutStyles from '../assets/dummystyles';
import { apbranches, apstats, apteamMembers } from '../assets/dummydata';
import aboutUsImage from '../assets/AboutUsImage.png'
import { Clock, Facebook, Instagram, MapPin, Twitch } from 'lucide-react';

const About = () => {
    return (
        <div className={aboutStyles.container}>
            <section className={aboutStyles.section}>
                <div className={aboutStyles.innerContainer}>
                    <div className={aboutStyles.headingWrapper}>
                        <div className='relative inline-block'>
                            <h1 className={aboutStyles.heading}>
                                Crafting Literary <br /> Futures
                            </h1>
                            <div className={aboutStyles.underline} />
                        </div>
                        <p className={aboutStyles.subText}>
                            Pioneering the next chapter in global storytelling. We bridge imagination with innovation through curated literary experiences.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
