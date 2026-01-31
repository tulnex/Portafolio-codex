import React from 'react';

interface LeftSidebarProps {
  currentPage?: string;
}

export default function LeftSidebar({ currentPage = 'home' }: LeftSidebarProps) {
  const isActive = (page: string) => currentPage === page;
  
  return (
    <aside className="w-16 bg-gray-800 flex flex-col items-center py-4 h-screen fixed left-0 top-0">
      {/* Logo */}
      <a href="/" className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-6 hover:bg-gray-900 transition">
        <span className="text-white text-xl font-bold">+</span>
      </a>
      
      {/* Navigation Icons */}
      <nav className="flex flex-col gap-4 mb-auto">
        <a 
          href="/" 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
            isActive('home') 
              ? 'text-white bg-gray-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
        <a 
          href="/categories" 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
            isActive('categories') 
              ? 'text-white bg-gray-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </a>
        <a 
          href="/about" 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
            isActive('about') 
              ? 'text-white bg-gray-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
        <a 
          href="/links" 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
            isActive('links') 
              ? 'text-white bg-gray-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </a>
        <a 
          href="/settings" 
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
            isActive('settings') 
              ? 'text-white bg-gray-700' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </a>
      </nav>
      
      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 mt-auto">
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3 2.959V15m-6 0H5m6 0v1m-6-1v-1m6 1h6M9 9H5m4 0V8m0 1v1" />
          </svg>
        </button>
      </div>
      
      {/* Profile Picture */}
      <div className="w-10 h-10 rounded-full bg-gray-600 mt-4 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
      </div>
    </aside>
  );
}
