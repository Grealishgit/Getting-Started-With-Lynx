import React from 'react';
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

const Home = () => {
    const navigate = useNavigate();

    return (
        <view className='main'>
            <scroll-view scroll-orientation="vertical" style={{ width: "100%", height: "100vh", paddingBottom: "120px" }}>
                {/* Header Section */}
                <view style={{ flex: 1, justifyItems: 'center', alignItems: 'center' }}>
                    <text className='pageTitle'>Find Your Dream Home</text>
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

                <view className='categoriesContainer' >
                    <text className='categoriesText'>Categories</text>
                </view>
                {/* Property Type Quick Links */}
                <scroll-view scroll-orientation="horizontal" style={{ width: '100%', height: 'auto' }}>
                    <view className='servicesRow'>
                        <view className="serviceCard">
                            <image src={property2} className="icon" />
                            <text className="serviceText">Apartments</text>
                        </view>

                        <view className="serviceCard">
                            <image src={property3} className="icon" />
                            <text className="serviceText">Villas</text>
                        </view>

                        <view className="serviceCard">
                            <image src={property4} className="icon" />
                            <text className="serviceText">Townhouses</text>
                        </view>

                        <view className="serviceCard">
                            <image src={property6} className="icon" />
                            <text className="serviceText">Studios</text>
                        </view>

                        <view className="serviceCard">
                            <image src={property8} className="icon" />
                            <text className="serviceText">Commercial Spaces</text>
                        </view>

                        <view className="serviceCard">
                            <image src={property7} className="icon" />
                            <text className="serviceText">Land Plots</text>
                        </view>
                    </view>
                </scroll-view>


                {/* Featured Listings */}
                <view className="allCards">
                    <text className='allCards-text'>Featured Property</text>
                    <image src={property1} className='propertyImage' />
                    <text className='allCards-p'>5 Bedroom Villa in Runda - Ksh 55,000,000</text>
                    <view className='viewMore'>
                        <text bindtap={() => navigate('/login')} className='viewText'>Explore More</text>
                    </view>
                </view>

                <view className="allCards">
                    <text className='allCards-text'>Hot Deal</text>
                    <image src={property9} className='propertyImage' />
                    <text className='allCards-p'>Modern Apartment in Kilimani - Ksh 14,500,000</text>
                    <view className='viewMore'>
                        <text bindtap={() => navigate('/login')} className='viewText'>Explore More</text>
                    </view>
                </view>

                <view className='sideCards' style={{ flexDirection: 'row' }}>
                    <view className="allCards-side">
                        <image src={property10} className='propertyImage1' />
                        <text className='allCards-p'>2 Bedroom in Kileleshwa - Ksh 8M</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                </view>

                <view className="allCards1">
                    <text className='allCards-text'>Recently Listed</text>
                    <image src={property12} className='propertyImage' />
                    <text className='allCards-p'>Townhouse in Lavington - Ksh 30,000,000</text>
                </view>
            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Home;
