'use client';

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from 'next/navigation';
import '../styles/dashboard.css';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', !darkMode ? 'light' : 'dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.replace('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <h4 className="mb-0">ADmyBRAND Dashboard</h4>
      <div className="navbar-actions">
        <div className="search-container">
          <i className="bi bi-search search-icon"></i>
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
        <i className="bi bi-bell notification-icon"></i>
        <i className={darkMode ? 'bi bi-moon-stars dark-toggle-icon' : 'bi bi-sun dark-toggle-icon'} onClick={toggleTheme}></i>
        <i className="bi bi-envelope message-icon"></i>
        <div className="user-dropdown" onClick={toggleDropdown}>
          <i className="bi bi-person-circle user-icon" style={{ cursor: 'pointer' }}></i>
          <div className={`dropdown-menu ${dropdownOpen ? 'dropdown-open' : ''}`}>
            <a href="#" onClick={() => alert('Profile clicked')}>Profile</a>
            <a href="#" onClick={() => alert('Settings clicked')}>Settings</a>
            <a href="#" onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}