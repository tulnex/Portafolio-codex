import React, { useState } from 'react';

interface AllyCardProps {
  name: string;
  displayName?: string;
  description?: string;
  link?: string;
  logoUrl?: string;
}

export default function AllyCard({ name, displayName, description, link, logoUrl }: AllyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition cursor-pointer text-sm sm:text-base"
      >
        <span className="text-white font-semibold">{name}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl max-w-md w-full p-4 sm:p-6 relative mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-2">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center overflow-hidden">
                  {logoUrl ? (
                    <img src={logoUrl} alt={`${name} logo`} className="w-full h-full object-contain p-4" />
                  ) : (
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">{displayName || name}</h3>
              {description && <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{description}</p>}
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/50 text-sm sm:text-base w-full sm:w-auto justify-center">
                  <span>Visitar sitio web</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
