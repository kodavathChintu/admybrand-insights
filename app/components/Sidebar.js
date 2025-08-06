'use client';

import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/dashboard.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-50 text-gray-600 dark:text-gray-300"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'} style={{ fontSize: '1.5rem' }}></i>
      </button>
      <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-md z-40`}>
        <ul className="nav flex flex-col">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link active flex items-center">
              <i className="bi bi-house-door mr-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link flex items-center">
              <i className="bi bi-bar-chart mr-2"></i> Analytics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link flex items-center">
              <i className="bi bi-gear mr-2"></i> Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}