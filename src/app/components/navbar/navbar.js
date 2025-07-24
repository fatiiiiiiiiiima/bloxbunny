// Navbar.js
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from '../../utils/firebase'; // Import necessary Firebase functions
import './globals.css';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold the user object

  useEffect(() => {
    const auth = getAuth(); // Get the Firebase auth object
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when the authentication state changes
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(); // Sign out the user using Firebase signOut function
      router.push('/'); // Redirect to the home page after sign out
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <Link legacyBehavior href="/">
          <a>
            <Image src="/navbarlogo.png" alt="BloxBunny Logo" width={150} height={60.8} loading="lazy" />
          </a>
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navlinks ${isOpen ? 'open' : ''}`}>
        <ul className='navList'>
          <li><Link legacyBehavior href="/reviewpage"><a>ROBLOX OVERVIEW</a></Link></li>
          <li><Link legacyBehavior href="/blogpage"><a>BLOG</a></Link></li>
          <li><Link legacyBehavior href="/accpage#payplan"><a>PRICING</a></Link></li>
          <li><Link legacyBehavior href="/accpage#contact us"><a>CONTACT US</a></Link></li>
          {/* <Image src='/twittericon.png' alt="Twitter Logo" width={28} height={28} loading="lazy" /> */}
          <div className='ButtonContainer'>
            {user ? ( // Check if user is signed in
              <>
                <button className='login' onClick={handleSignOut}>SIGN OUT</button>
                <Link legacyBehavior href="/dashboard">
                  <a><button className='getstarted' >DASHBOARD</button></a>
                </Link>
              </>
            ) : (
              <>
                <Link legacyBehavior href="/signin">
                  <a><button className='login'>LOGIN</button></a>
                </Link>
                <Link legacyBehavior href="/accpage">
                  <a><button className='getstarted' >GET STARTED</button></a>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default Navbar;
