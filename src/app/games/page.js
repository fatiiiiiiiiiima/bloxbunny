"use client"
import Layout from '../components/layout/layout';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DateRange from '../components/datarange/datarange';
import Gamecard from '../components/gamecard/gamecard';
import Image from 'next/image';
import Lottie from 'react-lottie';
import animationData from '../../../public/animation/loadinganimation.json';

import './globals.css';

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [checkedGenres, setCheckedGenres] = useState({ 'All Genres': true });
  const [games, setGames] = useState({ data: [], total: 0, page_size: 20 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const loader = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const genres = ['All Genres', 'Comedy', 'Sports', 'Town and City', 'RPG', 'Fighting', 'FPS', 'Adventure', 'Military', 'Horror', 'Building', 'Sci-Fi', 'Western', 'Naval'];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };



  useEffect(() => {
    debouncedFetchData();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1); 
    setGames({ data: [], total: 0, page_size: pageSize }); 
    // Only call fetchData if the selected genre is not "All Genres"
    if (!checkedGenres['All Genres']) {
      debouncedFetchData(); 
    }
  }, [checkedGenres, dateRange]);
  

  useEffect(() => {
    setCurrentPage(1); 
    setGames({ data: [], total: 0, page_size: pageSize }); 
    debouncedFetchData(); 
  }, [dateRange]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [games.data, currentPage]);

  const fetchData = async () => {
  try {
    setLoading(true);
    
    const queryParams = new URLSearchParams();
    if (dateRange.startDate) queryParams.append('start_date', dateRange.startDate);
    if (dateRange.endDate) queryParams.append('end_date', dateRange.endDate);
    if (!checkedGenres['All Genres']) {
      const selectedGenres = Object.keys(checkedGenres).filter(genre => checkedGenres[genre]);
      queryParams.append('genres', selectedGenres.join(','));
    }

    
    const requestBody = {
      page: currentPage,
      page_size: pageSize,
      ...Object.fromEntries(queryParams),
    };

    const response = await fetch('https://us-central1-bloxbunny.cloudfunctions.net/bloxbunny/get-games-dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

      console.log ('check request body', JSON.stringify(requestBody))
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setGames(prevState => ({
      ...prevState,
      data: [...prevState.data, ...data.data],
      total: data.total,
      page_size: data.page_size,
    }));
  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
};

  const debouncedFetchData = debounce(fetchData, 500);

  const handleObserver = (entities) => {
    const target = entities[0];
    console.log('Checking page outcomes', games.data.length,games.total,games.page_size)
    if (target.isIntersecting && games.data.length <= games.total) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleDateChange = (newStartDate, newEndDate) => {
    setDateRange({ startDate: newStartDate, endDate: newEndDate });
  };
  
  const handleCheckboxChange = (genre) => {
    if (genre === 'All Genres' && checkedGenres['All Genres']) {
      // If the selected genre is already "All Genres", no need to update state
      return;
    }
    if (genre === 'All Genres') {
      const newGenres = { 'All Genres': true };
      genres.forEach(g => { if (g !== 'All Genres') newGenres[g] = false; });
      setCheckedGenres(newGenres);
    } else {
      setCheckedGenres(prevGenres => ({
        ...prevGenres,
        'All Genres': false,
        [genre]: !prevGenres[genre],
      }));
    }
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('checking state', isOpen)
  };

  if (loading && games.data.length === 0) return <div className="loading-container"><Lottie options={defaultOptions} height={400} width={400} /></div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div className="filter-toggle" onClick={toggleMenu}>
        <Image src="/filter.png" alt="filter" width={20} height={20} />
      </div>
      <section className="gameheading">
        <div className="gametextcontents">
          <h1>Games</h1>
          <p>List of all the games</p>
        </div>
      </section>
      <div className="gamesview">
        <div className="screen">
          <div className="display">
            <section className="filters">
              <div className="filterheading">
                <h1>Filters</h1>
                <Image src="/filter.png" alt="filter" width={20} height={20} />
              </div>
              <div className="daterange">
                <h1>Date Range Picker</h1>
                <DateRange onDateChange={handleDateChange}  />
              </div>
              <div>
                <div className="genreFilter">
                  <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
                    <h3>Genre</h3>
                    <Image src="/downarrow.png" alt="toggle" width={10} height={10} />
                  </div>
                  {isExpanded && (
                    <div className="genreList">
                      {genres.map((genre, index) => (
                        <label key={index} className="genre">
                          <input
                            type="checkbox"
                            checked={!!checkedGenres[genre]}
                            onChange={() => handleCheckboxChange(genre)}
                          />
                          <span>{genre}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section className="carddisplay">
            {games.data.slice(0, currentPage * pageSize).map((game) => (
              <Link legacyBehavior href={`/gamedetails?id=${game.Id}`} key={game.Id}>
                <a className="gamecard-link">
                    <Gamecard
                      logoUrl={game.url}
                      title={game.Title}
                      dislikes={game.DisLikes}
                      rating={game.Likes}
                      rank={game.Rank}
                      genre={game.Genre}
                      ccu={game.CCU}
                      revenue={`${game.MaxRevenue}` - `${game.MinRevenue}`}
                      favorites={game.Favorites}
                      id={game.Id}
                    />
                </a>
              </Link>
            ))}
            {loading && games.data.length < games.total && (
              <div className="loading-container"><Lottie options={defaultOptions} height={400} width={400} /></div>
            )}
            <div ref={loader} />
          </section>
        </div>
      </div>
     <div className={`displayside ${isOpen ? 'open' : ''}`}>
  <button className="close-button" onClick={toggleMenu}>&times;</button>
        <button className="close-button" onClick={toggleMenu}>&times;</button>
        <section className="filters">
          <div className="filterdispheading">
            <h1>Filters</h1>
          </div>
          <div className="daterangedisp">
            <h1>Date Range Picker</h1>
            <DateRange onDateChange={handleDateChange} />
          </div>
          <div>
            <div className="genreFilterdisp">
              <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
                <h3>Genre</h3>
                <Image src="/downarrow.png" alt="toggle" width={10} height={10} />
              </div>
              {isExpanded && (
                <div className="genreList">
                  {genres.map((genre, index) => (
                    <label key={index} className="genre">
                      <input
                        type="checkbox"
                        checked={!!checkedGenres[genre]}
                        onChange={() => handleCheckboxChange(genre)}
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
