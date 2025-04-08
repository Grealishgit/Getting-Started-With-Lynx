import { root } from "@lynx-js/react";
import { useState } from "react";
import "../pages/Tabs.css";
import { useNavigate } from "react-router";

const Tabs = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePageClick = () => {
        setShowPopup(prev => !prev);
    };

    const navigate = useNavigate();
    return (
        <page className="container" bindtap={handlePageClick}>
            <view
                style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <text className="title">Click To Add Task</text>
                <text bindtap={() => navigate('/')} className="title">
                    Return Home
                </text>
            </view>
            {showPopup && (
                <view className="popup" style={{
                    flexGrow: 1,
                    backgroundColor: '#fff',
                    width: '300px',
                    height: '450px'
                }}>
                    <view>
                        <text className="popup-text" style={{
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }} >Your Task Here</text>


                    </view>
                </view>
            )}
        </page>
    );
};

export default Tabs;