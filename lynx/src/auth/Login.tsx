import React from 'react'
import '../auth/Login.css'
import { useNavigate } from 'react-router'

export default function Login() {

    const navigate = useNavigate();

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
                    <input className='inputBox' type="text" placeholder='Password' />
                </view>

                <view className='passwordForgot'>
                    <text className='footerRef'> Forgot Password</text>
                </view>

                <view className='loginButton'>
                    <text className='loginText'>LOGIN</text>
                </view>

                <view className='footer'>
                    <text className='footerText'>Don't have an Account?→
                        <text bindtap={() => navigate('/signup')} className='footerRef'> Register</text></text>
                    <text bindtap={() => navigate('/home')} className='footerRef'> Register</text>
                </view>

            </view>
        </page >
    )
}