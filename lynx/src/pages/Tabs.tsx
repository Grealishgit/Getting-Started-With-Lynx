import { useNavigate } from 'react-router';
import '../pages/Tabs.css';
import home from '../assets/home (2).png'
import user from '../assets/user.png'
import favorite from '../assets/bookmark.png'
import listings from '../assets/apartment.png'


const Tabs = () => {
  const navigate = useNavigate();

  return (
    <view className="tab-bar">
      <view className="tab-item" bindtap={() => navigate('/home')}>
       <image src={home} className="tab-icon" />
        <text className="tab-label">Home</text>
      </view>

      <view className="tab-item" bindtap={() => navigate('/listings')}>
        <image src={listings} className="tab-icon" />
        <text className="tab-label">Listings</text>
      </view>

      <view className="tab-item" bindtap={() => navigate('/favorites')}>
        <image src={favorite} className="tab-icon" />
        <text className="tab-label">Favorites</text>
      </view>

      <view className="tab-item" bindtap={() => navigate('/profile')}>
        <image src={user} className="tab-icon" />
        <text className="tab-label">Profile</text>
      </view>
    </view>
  );
};

export default Tabs;
