import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import { useNavigate } from 'react-router'
import preview from './assets/preview2.png'
import logo from './assets/images/logo1.png'
import logo1 from './assets/images/logo2.png'
import logo2 from './assets/images/logo3.png'
import logo3 from './assets/images/logo4.png'
import logo4 from './assets/images/logo5.png'
import logo5 from './assets/images/logo6.png'


export function App() {
  const [alterLogo, setAlterLogo] = useState(false)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const nav = useNavigate();

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  return (
    <view>
      <scroll-view scroll-orientation="vertical" style="padding:5px;width:100%; height:100%;">
      <view className='Background' />
      <view className='App'>
          <view className='Banner'>
          
            <image src={logo5} className='Logo' style={{ width: "100px", height: "100px" }} />
            <text className='Title' style={{ fontFamily: 'CustomFont', textDecoration: 'underline' }}>Safari
              {/*   <image src={logo4} className='Logo' style={{ width: "30px", height: "30px" }} /> */}
              <text className='Title' style={{ color: '#00bfff', textDecoration: 'none' }}> Luxury</text>
            </text>
            
            {/* <image src={preview} style={{width:"300px",height:"50px" }}/> */}
            <view className='button' style={{}} >
              <text className='buttonTap' bindtap={() => nav('/home')}>
                Get Started
              </text>
            </view>
          </view>

        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Hunter😉!</text>
          <text className='Hint'>
            Made By <text style={{color:'orange',fontWeight:'bold'}}> →Hunter← </text>
            Click to explore!
          </text>
          </view>



        </view>
      </scroll-view>
    </view>
  )
}
