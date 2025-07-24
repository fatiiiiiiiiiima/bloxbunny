"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './globals.css';

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/dashboard'); // Default to '/dashboard'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Fallback to window.location.pathname if router.pathname is not available
    const path = window.location.pathname || '/dashboard';
    setActivePath(path);

    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    // Add event listener for popstate to handle back/forward browser buttons
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

    console.log(activePath)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className='logoContainer'>
        <Link legacyBehavior href="/">
          <a>
            <Image src="/navbarlogo.png" alt="BLOXBUNNY" width={150} height={50} />
          </a>
        </Link>
      </div>
      <button onClick={toggleSidebar} className="burger-icon">
  <Image src="/menu.png" alt="Menu" width={50} height={50} />
</button>


      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className='sideList'>
          <li>
            <Link legacyBehavior href="/dashboard">
              <a className={`sideItem ${activePath === '/dashboard/' ? 'active' : ''}`}>
                <Image src={activePath === '/dashboard/' ? "/activedashboardicon.png" : "/dashboardicon.png"} alt="Dashboard" width={24} height={24} />
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/games">
              <a className={`sideItem ${activePath === '/games/' ? 'active' : ''}`}>
                <Image src={activePath === '/games/' ? "/activegameicon.png" : "/gameicon.png"} alt="Games" width={24} height={24} />
                <span>Games</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/settings">
              <a className={`sideItem ${activePath === '/settings/' ? 'active' : ''}`}>
                <Image src={activePath === '/settings/' ? "/activedashboardicon.png" : "/baricon.png"} alt="Settings" width={24} height={24} />
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
