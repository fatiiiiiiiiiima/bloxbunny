// components/RedCoastFooter.js
import React from 'react';
import Image from 'next/image';
import './globals.css'; 

const BloxFooter = () => {
  return (
    <footer className='footer'>
       
      <div className='linksSection'>
        <div className='linksColumn'>
          <span>Quick links</span>
          <p>Create account</p>
          <p>Support us on Patreon</p>
          <p>Pricing</p>
          <p>Privcy Policy</p>
          
        </div>
        <div className='linksColumn'>
          <span>Quick Support</span>
          <p>Subscription support</p>
          <p>Email us</p>
          <p>Questions and feedback</p>
        </div>
        <div className='linkspara'>
          <span>About</span>
          <p>We are passionate about empowering developers reach success.</p>
          <div className='linkicons'>
          <Image src="/icon1.png" alt="Icon 1" width={40} height={40} loading="lazy"/>
          <Image src="/icon2.png" alt="Icon 2" width={40} height={40} loading="lazy"/>
          <Image src="/icon3.png" alt="Icon 3" width={40} height={40} loading="lazy"/>
          </div>
        </div>
      </div>
    
     
    </footer>
  );
};

export default BloxFooter;
