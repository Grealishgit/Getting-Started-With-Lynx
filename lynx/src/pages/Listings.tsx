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


    return (
        <view className='main'>
            <scroll-view scroll-orientation="vertical" style={{ width: "100%", height: "100vh", paddingBottom: "120px" }}>
                {/* Header Section */}
                <view style={{ flex: 1, justifyItems: 'center', alignItems: 'center' }}>
                    <text className='pageTitle'>All Property List</text>
                </view>

                {/* Search Input */}
                <view className='inputContainer'>
                    <input className='searchBox' style={{ color: 'white' }} type="text" placeholder='Search Properties Here.....' />
                </view>

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
                        <text className='allCards-p'>2 Bedroom in Kileleshwa - Ksh 8M</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property11} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property14} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property5} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property13} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property9} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property12} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                    <view className="allCards-side">
                        <image src={property1} className='propertyImage1' />
                        <text className='allCards-p'>4 Bedroom Maisonette - Syokimau</text>
                    </view>
                </view>
            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Listings;
