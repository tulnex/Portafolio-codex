import React, { useState, useEffect, useRef } from 'react';

interface LeftSidebarProps {
  currentPage?: string;
}

export default function LeftSidebar({ currentPage = 'home' }: LeftSidebarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isActive = (page: string) => currentPage === page;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
          
          // Si está en la parte superior, siempre mostrar
          if (currentScrollY <= 50) {
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }
          
          // Calcular diferencia de scroll
          const scrollDelta = currentScrollY - lastScrollY.current;
          
          // Si se desplaza hacia abajo más de 10px, ocultar
          if (scrollDelta > 10) {
            setIsVisible(false);
          } 
          // Si se desplaza hacia arriba más de 10px, mostrar
          else if (scrollDelta < -10) {
            setIsVisible(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Inicializar la posición
    lastScrollY.current = window.scrollY || document.documentElement.scrollTop || 0;
    
    // Agregar el listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className="fixed left-1/2 bg-gray-800 z-50 shadow-2xl"
      style={{
        bottom: '16px',
        left: '50%',
        transform: isVisible 
          ? 'translateX(-50%) translateY(0px)' 
          : 'translateX(-50%) translateY(120px)',
        transition: 'transform 0.3s ease-in-out',
        width: 'calc(100% - 16px)',
        maxWidth: '600px',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {/* Home */}
          <a 
            href="/" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('home') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="Inicio"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] sm:text-xs">Inicio</span>
          </a>

          {/* Categories */}
          <a 
            href="/categories" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('categories') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="NotiTech"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-[10px] sm:text-xs">NotiTech</span>
          </a>

          {/* About */}
          <a 
            href="/about" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('about') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="Ciberseguridad"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] sm:text-xs">Ciberseguridad</span>
          </a>

          {/* AI */}
          <a 
            href="/ai" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('ai') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="Ai"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-[10px] sm:text-xs">Ai</span>
          </a>

          {/* Links */}
          <a 
            href="/links" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('links') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="Desarrollo"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-[10px] sm:text-xs">Desarrollo</span>
          </a>

          {/* Settings */}
          <a 
            href="/settings" 
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition min-w-[50px] sm:min-w-[60px] ${
              isActive('settings') 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            title="Portafolio"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-[10px] sm:text-xs">Portafolio</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
