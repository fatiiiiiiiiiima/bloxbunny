"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import { signIn } from '../utils/firebase';
import './globals.css';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../utils/firebase';
import Lottie from 'react-lottie';
import lottieAnimation from '../../../public/animation/logginganimation.json'; // Import your lottie.json file

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');
    if (message) {
      setPopupMessage(message);
      setTimeout(() => {
        setPopupMessage('');
      }, 500);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoggingIn(true); // Start the login animation
      const user = await signInWithGoogle();
      console.log('User signed in with Google:', user);
      router.push('/');
    } catch (error) {
      setError(error.message);
      console.error('Google sign-in failed:', error.message);
    } finally {
      setIsLoggingIn(false); // Stop the login animation
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      setIsLoggingIn(true); // Start the login animation
      const user = await signIn(email, password);
      console.log('User signed in:', user);
      router.push('/');
    } catch (error) {
      setError(error.message);
      setPopupMessage('Incorrect email or password. Please try again.');
      console.error('Sign in failed:', error.message);
    } finally {
      setIsLoggingIn(false); // Stop the login animation
    }
  };

  return (
    <div>
      <Navbar />
      <section className='mainbody'>
        {popupMessage && <div className="popup">{popupMessage}</div>}
        {isLoggingIn && (
          <div className="lottie-container">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottieAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={200}
              width={200}
            />
          </div>
        )}
        <h1>Login</h1>
        <form className='signform' onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <div className='password-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className='password-input'
            required
          />
          <Image src='/eye_icon.png' className='password-toggle' alt="password" width={15} height={12} onClick={togglePasswordVisibility}/>
          </div>

          <div className='d-flex'>
          <div class="toggle-container">
            <label class="toggle-switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            <div className='toggle-text'>Remember Me</div>
        </div>
            <div className='signup'>Forgot Password?</div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </section>

      <section className='signbuttons'>
        <div className='googlesign'>
          <button onClick={handleGoogleSignIn}>
            <span className='google-icon'>
              <Image src='/paymethodgoogle.png' alt='Google Icon' width={30} height={30} loading="lazy" />
            </span>
            Sign in with Google
          </button>
        </div>
        <div className='signupbuttons d-flex'>
          <div>Don't have an account?</div>
          <button className='signup' onClick={()=>router.push('/accpage')}>Sign up now</button>
        </div>
        {/* {error && <p>Error: {error}</p>} */}
        {/* <div className='signupbuttons'>
          <button className='signup'>Sign up</button>
          <button className='pass'>Forgot Password</button>
        </div> */}
      </section>
      <section>
        <FOOTER />
      </section>
    </div>
  );
}
