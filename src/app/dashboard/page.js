"use client"
import Layout from '../components/layout/layout';
import './globals.css'
import StatisticCard from '../components/card/card'
import React, { Suspense, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../../../public/animation/loadinganimation.json'; 
const LazyAnalytics = React.lazy(() => import('../components/graphanalytics/graphanalytics'));
const LazyGameTable = React.lazy(() => import('../components/gametable/gametable'));
import CustomSelect from '../components/dropdown/dropdown'
import withAuth from '../utils/withAuth';
import TopBar from '../components/topbar/topbar';

const Dashboard = () =>{
  const [isDashboardVisible, setIsDashboardVisible] = useState(true); // State variable to track dashboard visibility

   const [activeToggle, setActiveToggle] = useState('Weekly'); // New state for toggle

//Chart.js initialization
  // useEffect to toggle dashboard visibility
  useEffect(() => {
    setIsDashboardVisible(true); // Set visibility to true when component mounts
     // Initialize donut chart after component mounts
    if (typeof window !== 'undefined') {
      initializeDonutChart();
    }

    return () => {
      setIsDashboardVisible(false); // Set visibility to false when component unmounts
    };
  }, []);

  const initializeDonutChart = () => {
    // Load Chart.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
    script.onload = () => {
      const ctx = document.getElementById('earningsDonutChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Online', 'Offline', 'Idle'],
            datasets: [{
              data: [45, 30, 25],
              backgroundColor: ['#4F9EF8', '#F97316', '#10B981'],
              borderWidth: 0,
              cutout: '70%'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    };
    document.head.appendChild(script);
  };

  const handleSelectChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

   const handleToggleChange = (period) => {
    setActiveToggle(period);
    console.log(`Toggle changed to:`, period);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout>

      <TopBar /> 
      
        
      
      <div className='setdash'>
        <section className='heading'>
          <div className='textcontent'>
            <h1>Dashboard</h1>
            <p>Here is the information about all Roblox Games</p>
          </div>
        </section>
        {/* STATISTIC CARDS ROW */}
        <div className='cardcontainer'>
          <div className='cards'>
            <StatisticCard
              iconPath="increase" 
              mainText="89,935"
              label="Total users"
              trendText="10.2+1.01% this week"
              cornerIconPath="card1"
            />
            <StatisticCard
              iconPath="increase" 
              mainText="23,283.5"
              label="Total Games"
              trendText="3.1+0.49% this week"
              cornerIconPath="card2"
            />
            <StatisticCard
              iconPath="decrease" 
              mainText="46,827"
              label="Total users"
              trendText="2.56-0.91% this week"
              cornerIconPath="card3"
            />
            <StatisticCard
              iconPath="increase" 
              mainText="124,854"
              label="Paid Users"
              trendText="7.2+1.51% this week"
              cornerIconPath="card4"
            />
          </div>
        </div>
        {/* ANALYTICS + EARNINGS ROW */}
        <div className="analytics-row">
          <section className='dashgraphs'>
            <div className='dashheadingsect'>
              <h1>Game Analytics</h1>
              <div className='dashfilter'>
                <div className="analytics-toggle">
                  <button 
                    className={`toggle-btn ${activeToggle === 'Weekly' ? 'active' : ''}`}
                    onClick={() => handleToggleChange('Weekly')}
                  >
                    Weekly
                  </button>
                  <button 
                    className={`toggle-btn ${activeToggle === 'Monthly' ? 'active' : ''}`}
                    onClick={() => handleToggleChange('Monthly')}
                  >
                    Monthly
                  </button>
                  <button 
                    className={`toggle-btn ${activeToggle === 'Yearly' ? 'active' : ''}`}
                    onClick={() => handleToggleChange('Yearly')}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>
            <div className='dashgraph'> 
              <Suspense fallback={<div className="lottie-container"><Lottie options={defaultOptions} height={400} width={400} /></div>}>
                {isDashboardVisible && <LazyAnalytics />}
              </Suspense>
            </div>
          </section>
          {/* Earnings donut chart now next to the graph */}
          <div className="earnings-section">
            <div className="earnings-header">
              <h3>Earnings</h3>
              <div className="earnings-toggle">
                <button 
                  className={`toggle-btn ${activeToggle === 'Weekly' ? 'active' : ''}`}
                  onClick={() => handleToggleChange('Weekly')}
                >
                  Weekly
                </button>
                <button 
                  className={`toggle-btn ${activeToggle === 'Monthly' ? 'active' : ''}`}
                  onClick={() => handleToggleChange('Monthly')}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="donut-container">
              <div className="donut-chart-wrapper">
                <canvas id="earningsDonutChart"></canvas>
              </div>
              <div className="donut-legend">
                <div className="legend-item">
                  <span className="legend-color online"></span>
                  <span>Online</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color offline"></span>
                  <span>Offline</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color idle"></span>
                  <span>Idle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='dashtable'>
          <div className='dashheadingsect'>
            <h1>Game Analytics</h1>
            <div className='dashfilter'>
              <CustomSelect onChange={handleSelectChange} />
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyGameTable />
          </Suspense>
        </section>
      </div>

      
    
    </Layout>

    
  );
}

export default withAuth(Dashboard);
