import React from 'react';
import '../pages/Profile.css';
import Tabs from './Tabs.jsx';
import { useNavigate } from 'react-router';

// Optional: profile picture placeholder
import profilePic from '../assets/images/profile.jpg';

const Profile = () => {
    const navigate = useNavigate();

    // Mock user data (replace with real data from context/backend)
    const user = {
        name: 'Eugene Hunter',
        email: 'eugenehunter@gmail.com',
        phone: '+254 742 636878',
        location: 'Nairobi, Kenya'
    };

    return (
        <view className='main'>
            <scroll-view scroll-orientation="vertical" style={{ width: '100%', height: '100vh' }}>
                <view className="profileTop">
                    <image src={profilePic} className="profileImage" />
                    <text className="profileName">{user.name}</text>
                    <text className="profileEmail">{user.email}</text>
                </view>

                <view className="profileDetails">
                    <view className="detailRow">
                        <text className="label">Phone:</text>
                        <text className="value">{user.phone}</text>
                    </view>

                    <view className="detailRow">
                        <text className="label">Location:</text>
                        <text className="value">{user.location}</text>
                    </view>
                </view>

                <view className="profileActions">
                    <text className="actionSettings">Notifications</text>
                    <text className="actionNotifications">Settings</text>
                </view>


                <view className="logoutSection">
                    <text className="logoutBtn" bindtap={() => navigate('/login')}>
                        Logout
                    </text>
                </view>
                <view className="logoutSection">
                    <text className="deleteBtn" bindtap={() => navigate('/login')}>
                        Delete Account
                    </text>
                </view>
            </scroll-view>
            <Tabs />
        </view>
    );
};

export default Profile;
