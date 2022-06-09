import React from 'react';
import './reg.css';

const Reg = () => {
  return (
    <div className='registration-container container'>
        <div className='registration'>
            <img src='https://t-cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png' alt="register" />
            <div className='registration-details'>
                <h2>Get instant discounts</h2>
                <p>Just sign into your Booking.com account and look for the blue Genius logo to save</p>
                <div className='btns'>
                    <button type='submit' className='sign-btn'>Sing in</button>
                    <button type='submit' className='reg-btn'>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reg