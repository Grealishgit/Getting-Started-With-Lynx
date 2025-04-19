import React, { useState } from 'react';
import '../pages/Home.css';
import { useNavigate } from 'react-router';
import Tabs from './Tabs.jsx';
import property1 from '../assets/images/property1.png'
import property2 from '../assets/images/property2.png'
import property3 from '../assets/images/property3.png'
import property4 from '../assets/images/property4.png'
import property5 from '../assets/images/property5.png'
import property6 from '../assets/images/property6.png'
import property7 from '../assets/images/property7.png'
import property8 from '../assets/images/property8.png'
import property9 from '../assets/images/property9.png'
import property10 from '../assets/images/property10.png'
import property11 from '../assets/images/property11.png'
import property12 from '../assets/images/property12.png'
import property13 from '../assets/images/property13.png'
import property13b from '../assets/images/property01 (13).png'
import property14 from '../assets/images/property01 (14).png'
import property15 from '../assets/images/property01 (15).png'
import property16 from '../assets/images/property01 (16).png'
import property17 from '../assets/images/property01 (17).png'
import property18 from '../assets/images/property01 (18).png'
import property19 from '../assets/images/property01 (19).png'
import like from '../assets/images/like.png'
import likedpic from '../assets/images/liked.png'
import view from '../assets/images/view.png'

const Home = () => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);


    const category = [
        { image: property19, label: "Residential" },
        { image: property18, label: "Commercial" },
        { image: property17, label: "Industrial" },
        { image: property14, label: "Agricultural" },
        { image: property15, label: "Mixed-Use" },
        { image: property16, label: "Luxury" },
        { image: property17, label: "Affordable" },
        { image: property18, label: "Eco-Friendly" },
        { image: property19, label: "Smart Homes" },
        { image: property11, label: "Vacation Rentals" },
        { image: property12, label: "Retirement Homes" },
        { image: property12, label: "Student Housing" },
        { image: property16, label: "Co-Working Spaces" },
    ]

    return (
        <view className='main'>
            <scroll-view scroll-orientation="vertical" style={{ width: "100%", height: "100vh", paddingBottom: "120px" }}>
                {/* Header Section */}
                <view style={{ flex: 1, justifyItems: 'center', alignItems: 'center' }}>
                    <text className='pageTitle'>Find Your <text className='pageTitle' style={{ color: '#0077cc' }}> Dream Home </text> </text>
                </view>

                {/* <view>
                    <text className='subTitle'>
                        <text bindtap={() => navigate('/')} className='subTitle-link' style={{ textDecoration: "underline" }}> Home→</text> Listings
                    </text>
                </view> */}

                {/* Search Input */}
                {/*   <view className='inputContainer'>
                    <input className='searchBox' style={{ color: 'white' }} type="text" placeholder='Search Properties Here.....' />
                </view> */}

                {/* Promo Banner */}
                <view className='bannerCard'>
                    <image auto-size src={property1} className='bannerImage' />
                    <text className='bannerText'>Luxury Villas in Karen from Ksh 40M</text>
                </view>

                <text className='categoriesText'>Property Types</text>
                <scroll-view scroll-orientation="horizontal" style={{ width: '100%', height: 'auto' }}>
                    <view className='estateTypes'>
                        {category.map((category, index) => (
                            <view key={index} className="estateCard">

                                <image className='estateImage' src={category.image} />
                                <view className='estateTextContainer'>
                                    <text className="estateText">{category.label}</text>
                                </view>
                                <view className='viewBox' >
                                    <text bindtap={() => navigate('/listings')} className='viewTextBox'>view</text>
                                    <image src={view} className='view-icons' />
                                </view>
                            </view>
                        ))}
                    </view>
                </scroll-view>


                {/* Featured Listings */}
                <view className="allCards">
                    <view className="imageContainer">
                        <image src={property13b} className="propertyImage" />
                        {liked ? (
                            <image bindtap={() => setLiked(false)} src={likedpic} className="view-icon" />
                        ) : (
                            <image bindtap={() => setLiked(true)} src={like} className="view-icon" />
                        )}
                        <text className="allCards-text">Featured Property</text>
                        <text className="allCards-p">5 Bedroom Villa in Runda - Ksh 55,000,000</text>

                        <view className="viewMore">
                            <text bindtap={() => navigate('/listings')} className="viewText">Explore More</text>

                        </view>
                    </view>
                </view>


                <view className="allCards">
                    <view className="imageContainer">
                        <image src={property9} className="propertyImage" />
                        {liked ? (
                            <image bindtap={() => setLiked(false)} src={likedpic} className="view-icon" />
                        ) : (
                            <image bindtap={() => setLiked(true)} src={like} className="view-icon" />
                        )}
                        <text className="allCards-text">Hot Deal</text>
                        <text className="allCards-p">Modern Apartment in Kilimani - Ksh 14,500,000</text>
                        <view className="viewMore">
                            <text bindtap={() => navigate('/listings')} className="viewText">Explore More</text>
                        </view>

                    </view>

                </view>
                {/*   <view className="allCards">
                    <text className='allCards-text'>Hot Deal</text>
                    <image src={property9} className='propertyImage' />
                    <text className='allCards-p'>Modern Apartment in Kilimani - Ksh 14,500,000</text>
                    <view className='viewMore'>
                        <text bindtap={() => navigate('/login')} className='viewText'>Explore More</text>
                    </view>
                </view> */}

                <view className='categoriesContainer1' >
                    <text className='categoriesText'>Recently Added</text>
                </view>
                <view className='sideCards' style={{ flexDirection: 'row' }}>
                    <view className="allCards-side">
                        <image src={property10} className='propertyImage1' />
                        <text className='allCards-p1'>2 Bedroom in Kileleshwa - Ksh 8M</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property13} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property19} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                </view>



                <view className="allCards1">
                    <view className="imageContainer">
                        <image src={property12} className="propertyImage" />
                        {liked ? (
                            <image bindtap={() => setLiked(false)} src={likedpic} className="view-icon" />
                        ) : (
                            <image bindtap={() => setLiked(true)} src={like} className="view-icon" />
                        )}
                        <text className="allCards-text">Recently Listed</text>
                        <text className="allCards-p">Townhouse in Lavington - Ksh 30,000,000</text>

                        <view className="viewMore">
                            <text bindtap={() => navigate('/listings')} className="viewText">Explore More</text>
                        </view>
                    </view>
                </view>

            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Home;
