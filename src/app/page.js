import React from 'react';
import Navbar from '../app/components/navbar/navbar'
import Image from 'next/image';
import FOOTER from './components/bloxfooter/bloxfooter';
import './globals.css'

export default function Home(){ 
    return(
        <div>
            <section className='mainimage'>
               <Navbar/>
               <div className='mainheadings'>
               <h1>ROBLOX INSIGHTS</h1>
               <p>REVENUE ESTIMATIONS FOR EACH GAME</p>
               <button>START NOW</button>
               </div>
            </section>

            <section className='feature'>
                <h1>Features</h1>
                <div className="feature-grid">
                    <div className='feature-column'>
                        <Image src='./feature2.png' alt='feature' width={348} height={195.91} loading="lazy"></Image>
                        <h1>DETAILED COMPETITOR TRACKING</h1>
                        <p>See how many players and how much money your competitors make</p>
                    </div>
                    <div className='feature-column'>
                        <Image src='./feature2.png' alt='feature' width={348} height={195.91} loading="lazy"></Image>
                        <h1>GAMES REVENUE ESTIMATES</h1>
                        <p>Did you ever wonder how much Roblox developers earn?</p>
                    </div>
                    <div className='feature-column'>
                        <Image src='./feature3.png' alt='feature3' width={348} height={195.91} loading="lazy"></Image>
                        <h1>SPOT OPPORTUNITIES IN THE MARKET</h1>
                        <p>Analyze the market before starting to work on your next project</p>
                    </div>
                </div> 
            </section>

            {/* <section className='payplan'> */}
                 <section className="pay-grid">
                    <div className='pay-column'>
                        <h1>Free</h1>
                        <h2>$0</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to market overview </p> <p>CCU and New Favorites data</p><p> Top games on Roblox</p>
                        </div>
                        <button>Get started</button>
                        
                    </div>
                    <div className='pay-column'>
                        <h1>Indie</h1>
                        <h2>$19</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to Free</p> <p>Access to last 90 days of data</p><p>Access to revenue estimations</p>
                        </div>
                        <button>Get started</button>
                    </div>
                    <div className='pay-column'>
                        <h1>Pro</h1>
                        <h2>$99</h2>
                        <h3>Per month</h3>
                        <div className='paytext'>
                        <p>Access to Indie </p> <p>Access last 365 days of data</p><p>Detailed ranking of games</p>
                        </div>
                        <button>Get started</button>
                    </div>
                </section>
                {/* </section> */}


            <section className='view'>
            <h1>View in Action</h1>
            <p>Watch an introduction to out platform</p>

            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LnemDzWNE2A?si=dhdhVKp8khYvv4Gx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            </section>

            <section className='estimate'>
                <h1>How do we estimate revenue?</h1>
                <p>We are using proprietary algorithms and estimations. We consider our revenue estimates to be close to reality but they cannot be treated 100% accurate.</p>
            </section>

            <section className='updateform'>
                <h1>Get The Latest Updates</h1>
                <p>Do you want to learn more from us? Subscribe to our newsletter and get the latest news.</p>

                <div className="form-row">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <button type='submit'>Subscribe</button>
            </div>
            </section>

            <section>
                <FOOTER></FOOTER>
            </section>
        </div> 
              
    );
}

               
      
