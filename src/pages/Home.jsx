import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import OurBestSellers from '../components/OurBestSellers';
import HomeBook from '../components/HomeBook';
import HomeAbout from '../components/HomeAbout';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <OurBestSellers />
            <HomeBook />
            <HomeAbout />
        </>
    )
}

export default Home;
