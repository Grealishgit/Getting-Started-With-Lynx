import React, { useState } from 'react';
import '../auth/Register.css'
import visibility from '../assets/images/visibility.png'
import eye from '../assets/images/eye.png'

import { useNavigate } from 'react-router';

export default function componentName() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <page>
            <view className='cardRegister'>
                <text className="registerText"  >Sign Up</text>

                <text className='inputsText'>Username</text>
                <view className='inputView'>
                    <input className='inputBox' type="text" placeholder='e.g user100' />
                </view>

                <text className='inputsText'>Email</text>
                <view className='inputPassword'>
                    <input className='inputBox' type="email" placeholder='e.g user@example.com' />
                </view>

                <text className='inputsText'>Phone</text>
                <view className='inputPassword'>
                    <input className='inputBox' type="number" placeholder='0712345678' />
                </view>

                <text className='inputsText'>Password</text>
                <view className='inputPassword'>
                    <input className='inputBox' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                    <image bindtap={() => setShowPassword(!showPassword)} className='showPassword' src={showPassword ? visibility : eye} />
                </view>

                {/* <text className='inputsText'>Confirm Password</text>
                <view className='inputPassword'>
                    <input className='inputBox' type="password" placeholder='Password' />
                    <image className='showPassword' src={showPassword ? eye : visibility} bindtap={() => setShowPassword(!showPassword)} />
                </view> */}

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
