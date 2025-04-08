import React from 'react';
import '../pages/Home.css';
import { useNavigate } from 'react-router';


const Home = () => {

    const navigate = useNavigate();


    return (
        <view className='main' >
            <scroll-view scroll-orientation="vertical"
                  style={{ width: "100%", height: "100vh"}} 
            >
                <view >
                    <text className='pageTitle' >
                        Home Page
                    </text>

                    <text className='subTitle' > <text bindtap={() => navigate('/')} className='subTitle-link' style={{textDecoration:"underline"}} > Home→</text> dashboard</text>                
                </view>

                {/* Cards Section */}
                <view className='cardMain'>

                    <view className="allCards">
                        <text className='allCards-text' >
                            On Going Tasks
                        </text>

                        <text className='allCards-p'>
                            This is the content of the first card.
                        </text>

                        <view className='viewMore'>
                    <text bindtap={()=>navigate('/login')} className='viewText'>View More</text>
                </view>

                    </view>

                    <view className="allCards">
                        <text className='allCards-text' >To Do Tasks</text>
                        <text className='allCards-p'>
                            This is the content of the second card.</text>
                    </view>

                    <view className='sideCards' style={{flexDirection:'row'}}>
                        <view className="allCards-side" >
                        <text className='allCards-text' >Finished Tasks</text>
                        <text className='allCards-p'>
                            This is the content of the third card.
                        </text>
                    </view>

                    <view className="allCards-side" >
                        <text className='allCards-text' >Finished Tasks</text>
                        <text className='allCards-p'>
                            This is the content of the third card.
                        </text>
                    </view>
                    </view>

                   

                    <view className="allCards" style={{marginBottom:'50px'}} >
                        <text className='allCards-text' >Finished Tasks</text>
                        <text className='allCards-p'>
                            This is the content of the third card.
                        </text>
                    </view>

                </view>
            </scroll-view>
        </view>
    );
};

export default Home;
