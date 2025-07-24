"use client"
import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FAQItem from '../components/faq/faq';
import FOOTER from '../components/bloxfooter/bloxfooter';
import { signUp } from '../utils/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import './globals.css'
import { signInWithGoogle } from '../utils/firebase';
export default function Accpage(){

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('User signed in with Google:', user);
      router.push('/');
    } catch (error) {
      setError(error.message);
      console.error('Google sign-in failed:', error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const user = await signUp(email, password);
      console.log('User created:', user);
      router.push('/');
      // Redirect or perform additional tasks
    } catch (error) {
      console.error('Sign up failed:', error.message);
    }
  };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div>
            <Navbar/>
            <section className='mainbody'>
                <h1>Create a free account</h1>

                {/* <div className="accform"> */}
                <form className="accform" onSubmit={handleSignUp}>
    <input 
      type="email" 
      id="accemail" 
      name="accemail" 
      placeholder="Email" 
      required 
      value={email} 
      onChange={handleEmailChange} 
    />
    <input 
      type="password" 
      id="pass" 
      name="pass" 
      placeholder="Password" 
      required 
      value={password} 
      onChange={handlePasswordChange} 
    />
                    <input type="password" id="rpass" name="rpass" placeholder="Repeat password" required />
                    <div class="toggle-container">
            <label class="toggle-switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            <div className='toggle-text'>Remember Me</div>
        </div>
                    <button type='submit'>Sign Up</button>
            </form>
            </section>

            <section className='googlebuttons'>
            <div className='googlesignin'>
          <button onClick={handleGoogleSignIn}>
            <span className='google-icon'>
              <Image src='/paymethodgoogle.png' alt='Google Icon' width={35} height={35} loading="lazy" />
            </span>
            Sign in with Google
          </button>
        </div>
        <div className='signupbuttons d-flex'>
          <div>Already have an account?</div>
          <button className='signup' onClick={()=>router.push('/signin')}>Sign in now</button>
        </div>
        </section>
            <section className='access'>
                <h1>Want more access</h1>
                <p>Support us on Patreon to get access to more of our goodues. Make sure to use the same email address as the one you have created your BloxBunny account with.</p>
            </section>

            
                 <section id="payplan" className="pay-grid">
                    <div className='pay-column'>
                        <h1>Free</h1>
                        <h2>$0</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to market overview </p> <p>CCU and New Favorites data</p><p> Top games on Roblox</p>
                        </div>
                        <button>Get Basic</button>
                    </div>
                    <div className='pay-column'>
                        <h1>Indie</h1>
                        <h2>$19</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to Free</p> <p>Access to last 90 days of data</p><p>Access to revenue estimations</p>
                        </div>
                        <button>Get Indie</button>
                    </div>
                    <div className='pay-column'>
                        <h1>Pro</h1>
                        <h2>$99</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to Indie </p> <p>Access last 365 days of data</p><p>Detailed ranking of games</p>
                        </div>
                        <button>Get Pro</button>
                    </div>
                        </section>

            <section className='access'>
                <h1>Which plan should I choose?</h1>
                <p>Decide on which plan best fits your needs.</p>
            </section>

            <section className='plan'>
                <div className='indie'>
                    <h1>Who should get the &quot;Indie&quot; plan?</h1>
                    <p>We imagine you are a creator which have obtained some degree of success on Roblox. You already have a published game but didn&apos;t find real success yet. You are close to nailing it but you are only one person and it is really hard to find the time to have a complete overview of the Roblox platform. You need more data and support to be able to iterate and start making really successful games. You might also be a Roblox YouTuber or a data nerd.</p>
                </div>
                <div className='pro'>
                    <h1>Who should get the &quot;Pro&quot; plan?</h1>
                    <p>You are part of a team that found success on Roblox. You might also be part of non-Roblox gaming studio who is looking at Roblox as a potential distribution platform. You might be a Games VC willing to find a studio/group of people for their next game. You might also be a games professional but a Roblox Noob.</p>
                </div>
            </section>

            <section className="faq-section">
                <h1>FAQ</h1>
                <div className='faqcomp'>
                <FAQItem 
                    question="How do I create a subscription?" 
                    answer="You need to create a free account first. Afterwards, you will need to back us on Patreon using the same email." 
                />
                <FAQItem 
                    question="What do I get using the free account?" 
                    answer="You will get access to high level market overview. It is free and will always be!" 
                />
                <FAQItem 
                    question="Who should upgrade?" 
                    answer="All individuals and companies who are looking t creating better games with the use of competitor and market data." 
                />
                <FAQItem 
                    question="How reliable is the data?" 
                    answer="We make continuous efforts to ensure 100% reliable data. If you see any issues with the data, contact us at: info@bloxbunny.com" 
                />
                <FAQItem 
                    question="I am a game creator and my game is not showing. Why?" 
                    answer="We try to keep the platform as updated as possible but we might miss some of the new game launches. If you think you have a solid game, send it to us at info@bloxbunny.com and we will be happy to add it to our platform." 
                />
                <FAQItem 
                    question="If I experience any issues, how can I contact you?" 
                    answer="Write to info@bloxbunny.com for any issues related to your account, Patreon membership, etc. We are here to help." 
                />
                </div>
                
            </section>

            <section id='contact us' className='access'>
                <h1>Contact us</h1>
            <div className='form-container'>
                <form>
            <div className="form-row">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className='form-rows'>
            <input type="url" id="site" name="site" placeholder="Your Site"/>
            </div>
            <textarea id="description" name="description" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
        </div>
            </section>

            <section>
                <FOOTER></FOOTER>
            </section>
        </div>
    );
}
