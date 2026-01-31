import React from 'react';

interface RGBTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function RGBText({ children, className = '' }: RGBTextProps) {
  return (
    <>
      <style>{`
        .rainbow-text {
          background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          animation: rainbow-shift 3s linear infinite;
        }
        @keyframes rainbow-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <span className={`rainbow-text ${className}`}>{children}</span>
    </>
  );
}
