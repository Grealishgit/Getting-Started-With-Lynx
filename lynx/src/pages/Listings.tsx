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
import property14 from '../assets/images/property14.png'
import property15 from '../assets/images/property01 (15).png'
import property16 from '../assets/images/property01 (16).png'
import property17 from '../assets/images/property01 (17).png'
import property18 from '../assets/images/property01 (18).png'
import property19 from '../assets/images/property01 (19).png'

const Listings = () => {
    const navigate = useNavigate();
    const [activeCat, setActiveCat] = useState('Apartments');
    const [activeLocation, setActiveLocation] = useState('Karen');


    const locations = [
        'Upperhill', 'Karen',
        'Lavington', 'WestLands',
        'Runda', 'Kileleshwa',
        'Mountain View', 'Muthaiga',
        'Riverside', 'Kitusuru'];

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
                    <text className='pageTitle'>All <text className='pageTitle' style={{ color: '#0077cc' }}> Property </text> List</text>
                </view>

                {/* Search Input */}
                <view className='inputContainer'>
                    <input className='searchBox' style={{ color: 'white' }} type="text" placeholder='Search Properties Here.....' />
                </view>

                <text className='categoriesText1'>Property Types</text>
                <scroll-view scroll-orientation="horizontal" style={{ width: '100%', height: 'auto' }}>
                    <view className='estateTypes'>
                        {category.map((category, index) => (
                            <view key={index} className="estateCard">
                                <image className='estateImage' src={category.image} />
                                <view className='estateTextContainer'>
                                    <text className="estateText">{category.label}</text>
                                </view>

                            </view>
                        ))}
                    </view>
                </scroll-view>

                <view className='categoriesContainer' >
                    <text className='categoriesText'>Categories</text>
                </view>
                {/* Property Type Quick Links */}
                <scroll-view scroll-orientation="horizontal" style={{ width: '100%', height: 'auto' }}>
                    <view className="servicesRow">
                        {[
                            { name: 'Apartments', img: property2 },
                            { name: 'Villas', img: property3 },
                            { name: 'Townhouses', img: property4 },
                            { name: 'Studios', img: property6 },
                            { name: 'Commercial Spaces', img: property8 },
                            { name: 'Land Plots', img: property7 },
                        ].map((cat) => (
                            <view
                                key={cat.name}
                                className="serviceCard"
                                bindtap={() => setActiveCat(cat.name)}
                            >
                                <image
                                    src={cat.img}
                                    className={`icon1 ${activeCat === cat.name ? 'activeCard' : ''}`}
                                />
                                <text className="serviceText">{cat.name}</text>
                            </view>
                        ))}
                    </view>
                </scroll-view>

                <view className='categoriesContainer' >
                    <text className='categoriesText'>Locations</text>
                </view>
                <scroll-view scroll-orientation="horizontal" style={{ width: '100%', height: 'auto' }}>
                    <view className='locationList'>
                        {locations.map((location) => (
                            <view
                                key={location}
                                className={`locationBox ${activeLocation === location ? 'activeLocationBox' : ''}`}
                                bindtap={() => setActiveLocation(location)}
                            >
                                <text className='locationText'>{location}</text>
                            </view>
                        ))}
                    </view>

                </scroll-view>

                <view className='sideCards' style={{ flexDirection: 'row' }}>
                    <view className="allCards-side">
                        <image src={property10} className='propertyImage1' />
                        <text className='allCards-p1'>2 Bedroom in Kileleshwa</text>
                        <text className='allCards-p2'>Ksh. 4,500,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 4,000,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property14} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Kileleshwa</text>
                        <text className='allCards-p2'>Ksh. 6,200,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property5} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 5,800,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property13} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 6,000,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property9} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 5,500,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property12} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 6,300,000</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property1} className='propertyImage1' />
                        <text className='allCards-p1'>4 Bedroom Maisonette - Syokimau</text>
                        <text className='allCards-p2'>Ksh. 5,900,000</text>
                    </view>
                </view>

            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Listings;
