import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import OurBestSellers from '../components/OurBestSellers';
import HomeBook from '../components/HomeBook';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <OurBestSellers />
            <HomeBook />
        </>
    )
}

export default Home;
