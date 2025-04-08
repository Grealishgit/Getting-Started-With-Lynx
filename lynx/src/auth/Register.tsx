import React from 'react';
import '../auth/Register.css'

import { useNavigate } from 'react-router';

export default function componentName() {

    const navigate = useNavigate();

    return (
        <page>
            <view className='cardRegister'>
                <text className="registerText"  >Sign Up</text>

                <text className='inputsText'>Username</text>
                <view className='inputView'>
                    <input className='inputBox' type="text" placeholder='Email' />
                </view>

                <text className='inputsText'>Email</text>
                <view className='inputPassword'>
                    <input className='inputBox' type="email" placeholder='Password' />
                </view>

                <text className='inputsText'>Password</text>
                <view className='inputPassword'>
                    <input className='inputBox' type="password" placeholder='Password' />
                </view>

                <view className='loginButton'>
                    <text className='loginText'>SIGN UP</text>
                </view>

                <view className='footer'>
                    <text className='footerText'>Already have an Account?→
                        <text bindtap={() => navigate('/login')} className='footersRef'> Login Here</text></text>
                </view>
            </view>
        </page>
    );
}
