import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import { useNavigate } from 'react-router'
import preview from './assets/preview2.png'
import logo from './assets/logo.png'


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
            

            <text className='Title' style={{ fontFamily: 'CustomFont' }}>Neuro
              <text className='Title' style={{ color: 'orange', textDecoration: 'underline' }}>Share</text></text>
            
            {/* <image src={preview} style={{width:"300px",height:"50px" }}/> */}
            <view className='button' style={{}} >
              <text
                bindtap={() => nav('/home')}
                style={{
                  color: 'white',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontFamily:'CustomFont'

                }} >
                Get Started</text>
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
