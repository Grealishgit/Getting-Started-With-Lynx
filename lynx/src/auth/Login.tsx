import React, { useState } from 'react'
import '../auth/Login.css'
import { useNavigate } from 'react-router'
import visibility from '../assets/images/visibility.png'
import eye from '../assets/images/eye.png'

export default function Login() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    return (
        <page>

            <view className="cards" >
                <text className="popup-text"  >Login</text>

                <text className='inputText'>Email Address</text>
                <view className='inputView'>
                    <input className='inputBox' type="text" placeholder='Email' />
                </view>

                <text className='inputText'>Password</text>
                <view className='inputPassword'>
                    <input className='inputBox' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                    <image bindtap={() => setShowPassword(!showPassword)} className='showPassword' src={showPassword ? visibility : eye} />
                </view>

                <view className='passwordForgot'>
                    <text className='footerRef'> Forgot Password</text>
                </view>

                <view className='loginButton'>
                    <text className='loginText'>LOGIN</text>
                </view>

                <view className='footer'>
                    <text className='footerText'>Don't have an Account?→
                        <text bindtap={() => navigate('/signup')} className='footerRef'> Register Here</text></text>
                </view>

            </view>
        </page >
    )
}