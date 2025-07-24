"use client"
import React, {Suspense} from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import LineChart from '../components/linechart/linechart';
import './globals.css'
const LazyLineChart = React.lazy(() => import('../components/linechart/linechart'));

export default function Reviewpage(){

  const chartData = {
    labels: ['Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023'],
    values: [1000000, 2000000, 3000000, 4000000, 3500000, 2500000],
  };
    return (
      <>
      <Navbar />
      <section className='mainbody'>
        <h1>ROBLOX PLATFORM OVERVIEW</h1>
        <section className='blogs'>
        <div className='blogs-grid'>
          <div className='blogscol'>
          <Image src='/review1.png' alt='blog1' width={348} height={300} loading="lazy" />
          <h1>Roblox usage</h1>
          <h3>Get an overview iver how &quot;Visits&quot; develop on the platform</h3>
          <p>How ebgaging is the platform? Are the post-Covid user platforms here to stay? Take a look at our calculated metric-</p>
          <span>Total Visits on Roblox</span>
          <div className='designbutton1'>
            <button>See Data</button>
          </div>
          </div>
          <div className='blogscol'>
          <Image src='/review2.png' alt='blog1' width={348} height={300} loading="lazy" />
          <h1>Stock Prize</h1>
          <h3>Correlate stock price with our data</h3>
          <p>Bloxbunny is the go to place for all Roblox investors. On our platform, you will be able to see if there are any correlations between usage and the stock price.</p>
          <div className='designbutton2'>
            <button>See Data</button>
          </div>
          </div>
          <div className='blogscol'>
          <Image src='/review3.png' alt='blog1' width={348} height={300} loading="lazy" />
          <h1>Daily revenue</h1>
          <h3>Using our properietary algorithm, we can estimate platform revenue</h3>
          <p>The estimated daily revenue is not 100% accurate but using our algorithm, we have created a way to scientifically approximate daily revenue.</p>
          <div className='designbutton3'>
            <button>See Data</button>
          </div>
          </div>
        </div>
        </section>
      </section>

      {/* NEW: TOTAL VISITS Section */}
      <section className='metrics-section'>
        <div className='metrics-container'>
        <h1>TOTAL VISITS</h1>
        <p className='metrics-subtitle'>SUPPORT US ON PATREON TO VIEW THIS DATA</p>
        <button className='metrics-button'>Become a Player</button>
        </div>
      </section>

      {/* NEW: GAME REVENUE Section */}
      <section className='metrics-section'>
        <div className='metrics-container'>
        <h1>GAME REVENUE</h1>
        <p className='metrics-subtitle'>SUPPORT US ON PATREON TO VIEW THIS DATA</p>
        <button className='metrics-button'>Become a Player</button>
        </div>
      </section>

      <section className='patreon'></section>
       <section className='users'>
  <h1>CONCURRENT USERS</h1>
  <Suspense fallback={<div>Loading Chart...</div>}>
  <LazyLineChart data={chartData} />
  </Suspense>
  <h1>NEW FAVORITES</h1>
  <Suspense fallback={<div>Loading Chart...</div>}>
  <LazyLineChart data={chartData} />
  </Suspense>
</section> 
     

     {/* <section className='users'>
  {/* First Chart */}
  {/* <div className='chart-container'>
    <h1 className='chart-section-title'>CONCURRENT USERS</h1>
    <div className='chart'>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <LazyLineChart data={chartData} />
      </Suspense>
    </div> */}
    {/* <div className='chart-legend'>
      <div className='legend-item'>
        <div className='legend-color'></div>
        <span className='legend-text'>Line</span>
      </div>
    </div>
  </div> */}

  {/* Second Chart */}
  {/* <div className='chart-container'>
    <h1 className='chart-section-title'>NEW FAVORITES</h1>
    <div className='chart'>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <LazyLineChart data={chartData} />
      </Suspense>
    </div> */}
    {/* <div className='chart-legend'>
      <div className='legend-item'>
        <div className='legend-color'></div>
        <span className='legend-text'>Line</span>
      </div>
    </div>
  </div>
</section> */}

         
  
  
      <section>
        <FOOTER />
      </section>
      </>
    );

}

