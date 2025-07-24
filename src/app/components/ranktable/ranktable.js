// Import Next.js Image component for image rendering
"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import './globals.css';



const GamesAnalyticsTable = ({gamedata}) => {
console.log(gamedata);
  useEffect(() => {
        const tableCells = document.querySelectorAll('.table-container td');
        
        tableCells.forEach(cell => {
          if (cell.textContent.trim() === '0' || cell.textContent.trim().toLowerCase() === 'free') {
            cell.classList.add('grey-text');
          }
        });
      }, []);
      
const displayData = gamedata?.ranks;
console.log('last1dats',displayData?.last_1_days);


function formatNumbers(x) {
  if (x < 100000) {
      return parseInt(x);
  } else if (x < 1000000) {
      return (x / 1000).toFixed(1) + 'K';
  } else if (x < 1000000000) {
      return (x / 1000000).toFixed(3) + 'M';
  } else {
      return (x / 1000000000).toFixed(3) + 'B';
  }
}
const formatRankData = (data) => {
  const totalRevenue = data?.MaxRevenue + data?.MinRevenue;

  const isPositive = {
    Visits_delta: data?.Visits_delta >= 0,
    CCU_delta: data?.CCU_delta >= 0,
    Favorites_delta: data?.Favorites_delta >= 0,
  };

  return {
    CCU: formatNumbers(data?.CCU),
    Favorites: formatNumbers(data?.Favorites),
    Revenue: formatNumbers(totalRevenue),
    rank: data?.rank,
    Visits: formatNumbers(data?.Visits),
    Visits_delta: data?.Visits_delta.toFixed(1),
    CCU_delta: data?.CCU_delta.toFixed(1),
    Favorites_delta: data?.Favorites_delta.toFixed(1),
    isPositive,
  };
};

// Format data for each time period
const yesterdayData = formatRankData(displayData?.last_1_days);
const thisWeekData = formatRankData(displayData?.last_7_days);
const thisMonthData = formatRankData(displayData?.last_30_days);
const thisYearData = formatRankData(displayData?.last_365_days);

  return (
    <div className="ranktable-container">
      <table>
  
         <tbody>
          
          <tr>
            <td>
              <div className="rankgame-info">
               
                <span>Yesterday</span>
              </div>
            </td>
            <td><p className='rankheading'>New visits</p>{yesterdayData ? yesterdayData.Visits : 'N/A'}<span className={`percentage-change ${yesterdayData.isPositive.Visits_delta ? 'positive' : 'negative'}`}>{yesterdayData.Visits_delta}%</span></td>
            <td ><p className='rankheading'>CC. Users</p>{yesterdayData ? yesterdayData.CCU : 'N/A'} <span className={`percentage-change ${yesterdayData.isPositive.CCU_delta ? 'positive' : 'negative'}`}>{yesterdayData.CCU_delta}%</span></td>
            <td><p className='rankheading'>Revenue</p>{yesterdayData ? yesterdayData.Revenue : 'N/A'} </td>
            <td><p className='rankheading'>Favouries</p>{yesterdayData ? yesterdayData.Favorites : 'N/A'}<span className={`percentage-change ${yesterdayData.isPositive.Favorites_delta ? 'positive' : 'negative'}`}>{yesterdayData.Favorites_delta}%</span></td>
            <td><p className='rankheading'>Rank</p>{yesterdayData ? yesterdayData.rank : 'N/A'}</td>
            <td>
            <div className='rankmenu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="rankgame-info">
               
                <span>Last 7 Days</span>
              </div>
            </td>
            <td><p className='rankheading'>New visits</p>{thisWeekData ? thisWeekData.Visits : 'N/A'} <span className={`percentage-change ${thisWeekData.isPositive.Visits_delta ? 'positive' : 'negative'}`}>{thisWeekData.Visits_delta}%</span></td>
            <td ><p className='rankheading'>CC. Users</p>{thisWeekData ? thisWeekData.CCU : 'N/A'} <span className={`percentage-change ${thisWeekData.isPositive.CCU_delta ? 'positive' : 'negative'}`}>{thisWeekData.CCU_delta}%</span></td>
            <td><p className='rankheading'>Revenue</p>{thisWeekData ? thisWeekData.Revenue : 'N/A'} </td>
            <td><p className='rankheading'>Favouries</p>{thisWeekData ? thisWeekData.Favorites : 'N/A'}<span className={`percentage-change ${thisWeekData.isPositive.Favorites_delta ? 'positive' : 'negative'}`}>{thisWeekData.Favorites_delta}%</span></td>
            <td ><p className='rankheading'>Rank</p>{thisWeekData ? thisWeekData.rank : 'N/A'}</td>
            <td> 
            <div className='rankmenu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="rankgame-info">
              
                <span>Last 30 Days</span>
              </div>
              </td>
              <td><p className='rankheading'>New visits</p>{thisMonthData ? thisMonthData.Visits : 'N/A'} <span className={`percentage-change ${thisMonthData.isPositive.Visits_delta ? 'positive' : 'negative'}`}>{thisMonthData.Visits_delta}%</span></td>  
            <td ><p className='rankheading'>CC. Users</p>{thisMonthData ? thisMonthData.CCU : 'N/A'} <span className={`percentage-change ${thisMonthData.isPositive.CCU_delta ? 'positive' : 'negative'}`}>{thisMonthData.CCU_delta}%</span></td>
            <td><p className='rankheading'>Revenue</p>{thisMonthData ? thisMonthData.Revenue : 'N/A'} </td>
            <td><p className='rankheading'>Favouries</p>{thisMonthData ? thisMonthData.Favorites : 'N/A'}<span className={`percentage-change ${thisMonthData.isPositive.Favorites_delta ? 'positive' : 'negative'}`}>{thisMonthData.Favorites_delta}%</span></td>
            <td ><p className='rankheading'>Rank</p>{thisMonthData ? thisMonthData.rank : 'N/A'}</td>
            <td>
            <div className='rankmenu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="rankgame-info">
              
                <span>Last 365 Days</span>
              </div>
              </td>
              <td><p className='rankheading'>New visits</p>{thisYearData ? thisYearData.Visits : 'N/A'} <span className={`percentage-change ${thisYearData.isPositive.Visits_delta ? 'positive' : 'negative'}`}>{thisYearData.Visits_delta}%</span></td>
            <td ><p className='rankheading'>CC. Users</p>{thisYearData ? thisYearData.CCU : 'N/A'} <span className={`percentage-change ${thisYearData.isPositive.CCU_delta ? 'positive' : 'negative'}`}>{thisYearData.CCU_delta}%</span></td>
            <td><p className='rankheading'>Revenue</p>{thisYearData ? thisYearData.Revenue : 'N/A'} </td>
            <td><p className='rankheading'>Favouries</p>{thisYearData ? thisYearData.Favorites : 'N/A'}<span className={`percentage-change ${thisYearData.isPositive.Favorites_delta ? 'positive' : 'negative'}`}>{thisYearData.Favorites_delta}%</span></td>
            <td ><p className='rankheading'>Rank</p>{thisYearData ? thisYearData.rank : 'N/A'}</td>
            <td>
                <div className='rankmenu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div>
            </td>
          </tr>
        </tbody> 
</table>
    </div>
  );
};

export default GamesAnalyticsTable;
