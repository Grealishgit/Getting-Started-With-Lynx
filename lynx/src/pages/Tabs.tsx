import { useNavigate, useLocation } from 'react-router';
import '../pages/Tabs.css';
import home from '../assets/home (2).png';
import user from '../assets/user.png';
import favorite from '../assets/bookmark.png';
import listings from '../assets/apartment.png';
import { useState, useEffect } from 'react';

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');

  // Automatically update active tab based on current route
  useEffect(() => {
    if (location.pathname.includes('listings')) setActiveTab('Listings');
    else if (location.pathname.includes('favorites')) setActiveTab('Favorites');
    else if (location.pathname.includes('profile')) setActiveTab('Profile');
    else setActiveTab('Home');
  }, [location.pathname]);

  return (
    <view className="tab-bar">
      <view className={`tab-item ${activeTab === 'Home' ? 'active' : ''}`} bindtap={() => { setActiveTab('Home'); navigate('/home'); }}>
        <image src={home} className="tab-icon" />
        <text className="tab-label">Home</text>
      </view>

      <view className={`tab-item ${activeTab === 'Listings' ? 'active' : ''}`} bindtap={() => { setActiveTab('Listings'); navigate('/listings'); }}>
        <image src={listings} className="tab-icon" />
        <text className="tab-label">Listings</text>
      </view>

      <view className={`tab-item ${activeTab === 'Favorites' ? 'active' : ''}`} bindtap={() => { setActiveTab('Favorites'); navigate('/favorites'); }}>
        <image src={favorite} className="tab-icon" />
        <text className="tab-label">Favorites</text>
      </view>

      <view className={`tab-item ${activeTab === 'Profile' ? 'active' : ''}`} bindtap={() => { setActiveTab('Profile'); navigate('/profile'); }}>
        <image src={user} className="tab-icon" />
        <text className="tab-label">Profile</text>
      </view>
    </view>
  );
};

export default Tabs;
