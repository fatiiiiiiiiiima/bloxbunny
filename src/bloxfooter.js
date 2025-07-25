// components/RedCoastFooter.js
import React from 'react';
import Image from 'next/image';
import './globals.css'; 
import Link from 'next/link';

const BloxFooter = () => {
  return (
    <footer className='footer'>
       
      <div className='linksSection'>
        <div className='linksColumn'>
          <span>Quick links</span>
          <Link href="/accpage" legacyBehavior><a>Create account</a></Link>
          <a href="https://patreon.com/bloxbunny" target="_blank" rel="noopener noreferrer">Support us on Patreon</a>
          <Link href="/" legacyBehavior><a>Pricing</a></Link>
          <a href="https://bloxbunny.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
        <div className='linksColumn'>
          <span>Quick Support</span>
          <a href="https://bloxbunny.com/get-started#packages" target="_blank" rel="noopener noreferrer">Subscription support</a>
          <a href="mailto:support@bloxbunny.com">Email us</a>
          <a href="https://bloxbunny.com/get-started#FAQ-section" target="_blank" rel="noopener noreferrer">Questions and feedback</a>
        </div>
        <div className='linkspara'>
          <span>About</span>
          <p>We are passionate about empowering developers reach success.</p>
          <div className='linkicons'>
          <a href="https://www.reddit.com/user/Bloxbunnydotcom/" target="_blank" rel="noopener noreferrer">
            <Image src="/icon1.png" alt="Reddit Icon" width={40} height={40} loading="lazy"/>
          </a>
          <a href="https://twitter.com/BloxBunny1" target="_blank" rel="noopener noreferrer">
            <Image src="/icon2.png" alt="Twitter Icon" width={40} height={40} loading="lazy"/>
          </a>
          <a href="https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F776519138687713290%252F776519138687713293" target="_blank" rel="noopener noreferrer">
            <Image src="/icon3.png" alt="Discord Icon" width={40} height={40} loading="lazy"/>
          </a>
          </div>
        </div>
      </div>
    
     
    </footer>
  );
};

export default BloxFooter;
