// Create a new file: components/topbar/topbar.js

import React, { useState } from 'react';
import './topbar.css';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search query:', e.target.value);
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    console.log('Notifications clicked');
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    console.log('Profile clicked');
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
      </div>
      
      <div className="topbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Notification Bell */}
        <div className="notification-container">
          <button className="notification-btn" onClick={handleNotificationClick}>
            <svg className="bell-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-badge">3</span>
          </button>
          
          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                <span className="notification-count">3 new</span>
              </div>
              <div className="notification-item">
                <div className="notification-dot"></div>
                <div className="notification-content">
                  <p>New user registered</p>
                  <span>2 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot"></div>
                <div className="notification-content">
                  <p>Game analytics updated</p>
                  <span>5 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot"></div>
                <div className="notification-content">
                  <p>New payment received</p>
                  <span>10 minutes ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="profile-container">
          <button className="profile-btn" onClick={handleProfileClick}>
            <img 
              src="/api/placeholder/32/32" 
              alt="User Profile" 
              className="profile-avatar"
            />
            <div className="profile-info">
              <span className="profile-name">Meri Fumtons</span>
              <span className="profile-role">Admin</span>
            </div>
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Profile</span>
              </div>
              <div className="profile-dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5842 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6642 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2583 9.77251 19.9887C9.5799 19.7191 9.31074 19.5124 9 19.39C8.69838 19.2569 8.36381 19.2172 8.03941 19.276C7.71502 19.3348 7.41568 19.4895 7.18 19.72L7.12 19.78C6.93425 19.966 6.71368 20.1135 6.47088 20.2141C6.22808 20.3148 5.96783 20.3666 5.705 20.3666C5.44217 20.3666 5.18192 20.3148 4.93912 20.2141C4.69632 20.1135 4.47575 19.966 4.29 19.78C4.10405 19.5943 3.95653 19.3737 3.85588 19.1309C3.75523 18.8881 3.70343 18.6278 3.70343 18.365C3.70343 18.1022 3.75523 17.8419 3.85588 17.5991C3.95653 17.3563 4.10405 17.1357 4.29 16.95L4.35 16.89C4.58054 16.6542 4.73519 16.355 4.794 16.0306C4.85282 15.7062 4.81312 15.3716 4.68 15.07C4.55324 14.7742 4.34276 14.522 4.07447 14.3443C3.80618 14.1666 3.49179 14.0713 3.17 14.07H3C2.46957 14.07 1.96086 13.8593 1.58579 13.4842C1.21071 13.1091 1 12.6004 1 12.07C1 11.5396 1.21071 11.0309 1.58579 10.6558C1.96086 10.2807 2.46957 10.07 3 10.07H3.09C3.42099 10.0623 3.74172 9.95512 4.01133 9.76251C4.28094 9.5699 4.48719 9.30074 4.61 8.99C4.74312 8.68838 4.78282 8.35381 4.724 8.02941C4.66519 7.70502 4.51054 7.40568 4.28 7.17L4.22 7.11C4.03405 6.92425 3.88653 6.70368 3.78588 6.46088C3.68523 6.21808 3.63343 5.95783 3.63343 5.695C3.63343 5.43217 3.68523 5.17192 3.78588 4.92912C3.88653 4.68632 4.03405 4.46575 4.22 4.28C4.40575 4.09405 4.62632 3.94653 4.86912 3.84588C5.11192 3.74523 5.37217 3.69343 5.635 3.69343C5.89783 3.69343 6.15808 3.74523 6.40088 3.84588C6.64368 3.94653 6.86425 4.09405 7.05 4.28L7.11 4.34C7.34568 4.57054 7.64502 4.72519 7.96941 4.784C8.29381 4.84282 8.62838 4.80312 8.93 4.67H9C9.29577 4.54324 9.54802 4.33276 9.72569 4.06447C9.90337 3.79618 9.99872 3.48179 10 3.16V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5842 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Settings</span>
              </div>
              <hr className="dropdown-divider" />
              <div className="profile-dropdown-item logout">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;