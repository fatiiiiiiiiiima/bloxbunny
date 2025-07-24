"use client"
import React, { useEffect,useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'
import Gamecard from '../components/gamedetailcard/gamedetailcard';
import Image from 'next/image';
import Lottie from 'react-lottie';
import animationData from '../../../public/animation/loadinganimation.json'
const LazyAnalytics = React.lazy(() => import('../components/analytics/analytics'));
const LazyRankTable = React.lazy(() => import('../components/ranktable/ranktable'));
import DateRange from '../components/datarange/datarange';
import CustomSelect from '../components/dropdown/dropdown'
import Layout from '../components/layout/layout';

export default function gamedetail(){
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [gamesid, setgamesid] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  
  const [gameData, setGameData] = useState([]);

  const handleDateChange = (newStartDate, newEndDate) => {
    setDateRange({ startDate: newStartDate, endDate: newEndDate });
    // Additional logic to handle date change...
};
const [activeFilter, setActiveFilter] = useState('Visits');

const handleFilterClick = (filterName) => {
  setActiveFilter
(filterName);
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const filteredData = gameData.Data?.filter(item => {
  const itemDate = new Date(item?.Date);
  const start = new Date(dateRange.startDate);
  const end = new Date(dateRange.endDate);
  return (!dateRange.startDate || itemDate >= start) && (!dateRange.endDate || itemDate <= end);
});

console.log('Filtered Data:', filteredData);


// In your component, filter the data before passing it to the Analytics component


useEffect(() => {
  async function fetchData(gameId) {
      try {
          const url = `https://us-central1-bloxbunny.cloudfunctions.net/bloxbunny/get-game-data?game_id=${encodeURIComponent(gameId)}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error('Data could not be fetched');
          const data = await response.json();
          setGameData(data);
          console.log('game data retrieved successsfully', gameData);
      } catch (error) {
          console.error("Fetching error: ", error.message);
      } finally {
        setLoading(false);
      }
  }

  if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const gameId = params.get('id');
      if (gameId) {
          setgamesid(gameId);
          console.log("Fetching data for gameId:", gameId);
          fetchData(gameId);
      } else {
          console.error("No gameId found in URL");
      }
  }
}, []);

    console.log('checking id',gamesid)
    
  
    const handleSelectChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
      };
    // console.log('checking game id',gameId)
    if (loading) return <div className="loading-container">
    <Lottie options={defaultOptions} height={400} width={400} />
    </div>
    
       
    return(
        <Layout>
              <section className='detailsheading'>
      <div className='detailstextcontent'>
        <div className='detailsheadingdisplay'>
        <h1>Game Details</h1>
        <p> Game &gt; <span>Game Details</span> </p>
        </div>
        <p>List of all the games</p>
        </div>
        
      </section>

      <section className='detailsgamecard'>
      <Gamecard
    //  key={index}
      logoUrl={gameData.ImageURL}
      title={gameData.Title}
      rank={gameData.ranks?.last_1_days.rank}
      genre={gameData.Genre}
      subtitle={gameData.CreatorName}
      ccu={gameData.ranks?.last_1_days.CCU}
      maxrevenue={gameData.ranks?.last_1_days.MaxRevenue}
      minrevenue={gameData.ranks?.last_1_days.MinRevenue}
      favorites={gameData.ranks?.last_1_days.Favorites}
      // Add other props as needed
    />
      </section>

      <section className='detailsgraphs'>
        <div className='detailsheadingsect'>
      <h1>   Game Rank</h1>
      <div className='detailsfilter'>
      <CustomSelect onChange={handleSelectChange} />
      
      </div>
      </div>
      <div className='detailsgraph'> 
      <Suspense fallback={<div>Loading...</div>}>

  <LazyRankTable gamedata={gameData} />
</Suspense>
      
      </div>
      </section>

      <section className='detailsgraphs'>
        <div className='detailsheadingfilt'>
      <h1>   Game Analytics</h1>
      <div className="filter-container">
      {['Visits', 'Users', 'Revenue', 'Favorites'].map((filterName) => (
     <button
     key={filterName}
    className={`filter-option ${activeFilter ===

  filterName ? 'selected' : ''}`}
  onClick={() => handleFilterClick(filterName)}
        >
     {filterName}
     </button>
     ))}
        </div>

      <div className='detailsfilter'>
      <DateRange onDateChange={handleDateChange} />

      </div>
      </div>
      <div className='detailsgraph'> 
      {/* <Analytics gamedata={{ ...gameData, Data: filteredData }} activeFilter={activeFilter}/> */}
      <Suspense fallback={<div>Loading...</div>}>
  <LazyAnalytics gamedata={{...gameData,Data:filteredData}} activeFilter={activeFilter} />

</Suspense>

      </div>
      </section>
        </Layout>
    )
}