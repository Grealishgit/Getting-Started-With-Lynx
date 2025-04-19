import React from 'react';
import '../pages/Favorites.css';
import { useNavigate } from 'react-router';
import Tabs from './Tabs.jsx';

// Import images
import img1 from '../assets/images/property01 (1).png';
import img2 from '../assets/images/property01 (2).png';
import img3 from '../assets/images/property01 (3).png';
import img4 from '../assets/images/property01 (4).png';
import img5 from '../assets/images/property01 (5).png';
import img6 from '../assets/images/property01 (6).png';


const Favorites = () => {
    const navigate = useNavigate();

    const favoriteItems = [
        { id: 1, title: 'Luxury Apartment', description: 'Located in Westlands, Nairobi.', image: img1 },
        { id: 2, title: 'Modern Bungalow', description: 'Kitisuru with a spacious garden.', image: img2 },
        { id: 3, title: 'Studio Apartment', description: 'Affordable unit in Roysambu.', image: img3 },
        { id: 4, title: 'Townhouse', description: 'Lavington with a pool.', image: img4 },
        { id: 5, title: 'Skyline Condo', description: 'Penthouse with city views.', image: img5 },
        { id: 6, title: 'Beachfront Villa', description: 'Diani paradise retreat.', image: img6 },
    ];

    return (
        <view className='main'>
            <scroll-view scroll-orientation="vertical" style={{ width: '100%', height: '100vh', paddingBottom: '120px' }}>
                <view className='Title'>
                    <text className='pageTitle'>Favorites</text>
                </view>

                <view className="favoritesList">
                    {favoriteItems.map((item) => (
                        <view className="favoriteCard" key={item.id}>
                            <image src={item.image} className="favoriteImage" />
                            <text className="favoriteTitle">{item.title}</text>
                            <text className="favoriteDesc">{item.description}</text>
                            <view className="viewDetails">
                                <text className="viewDetailsText" bindtap={() => navigate(`/property/${item.id}`)}>View Details</text>
                            </view>
                        </view>
                    ))}
                </view>
            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Favorites;
