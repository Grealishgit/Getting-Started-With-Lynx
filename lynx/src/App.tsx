import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import { useNavigate } from 'react-router'


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

            <text className='Title'>Welcome</text>
            <text className='Subtitle'>To Neuro Share</text>

            <view className='button' style={{}} >
              <text
                bindtap={() => nav('/home')}
                style={{
                  color: 'white',
                  fontSize: '20px',
                  textAlign: 'center'

                }} >
                Get Started</text>
            </view>
          </view>

        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Hunter😉!</text>
          <text className='Hint'>
            Glad to <text></text>
            see you Here!
          </text>
          </view>



        </view>
      </scroll-view>
    </view>
  )
}
