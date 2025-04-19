import { useNavigate, useLocation } from 'react-router';
import '../pages/Tabs.css';
import home from '../assets/home.png';
import home1 from '../assets/home1.png';
import bookmark1 from '../assets/bookmark1.png';
import user from '../assets/user.png';
import user1 from '../assets/user1.png';
import favorite from '../assets/bookmark.png';
import listings from '../assets/apartment.png';
import listings1 from '../assets/apartment1.png';
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
        {activeTab === 'Home' ? <image src={home} className="tab-icon" style={{ color: '#0077cc' }} /> : <image src={home1} className="tab-icon" />}
        <text className="tab-label">Home</text>
      </view>

      <view className={`tab-item ${activeTab === 'Listings' ? 'active' : ''}`} bindtap={() => { setActiveTab('Listings'); navigate('/listings'); }}>
        {activeTab === 'Listings' ? <image src={listings1} className="tab-icon" /> : <image src={listings} className="tab-icon" />}
        <text className="tab-label">Listings</text>
      </view>

      <view className={`tab-item ${activeTab === 'Favorites' ? 'active' : ''}`} bindtap={() => { setActiveTab('Favorites'); navigate('/favorites'); }}>
        {activeTab === 'Favorites' ? <image src={favorite} className="tab-icon" /> : <image src={bookmark1} className="tab-icon" />}
        <text className="tab-label">Favorites</text>
      </view>

      <view className={`tab-item ${activeTab === 'Profile' ? 'active' : ''}`} bindtap={() => { setActiveTab('Profile'); navigate('/profile'); }}>
        {activeTab === 'Profile' ? <image src={user1} className="tab-icon" /> : <image src={user} className="tab-icon" />}
        <text className="tab-label">Profile</text>
      </view>
    </view>
  );
};

export default Tabs;
