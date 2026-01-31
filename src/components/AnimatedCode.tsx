import React, { useState, useEffect } from 'react';

interface AnimatedCodeProps {
  className?: string;
}

export default function AnimatedCode({ className = '' }: AnimatedCodeProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const codeLines = [
    "const developer = 'Cristian Daniel Herrera';",
    "const skills = [",
    "  'Full Stack', 'Web Dev', 'Ecommerce', 'No-Code'",
    "];",
    "const experience = 3+ // años;"
  ];

  useEffect(() => {
    if (!isTyping) return;

    const currentLineText = codeLines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentLineText.length) {
        setDisplayedText(currentLineText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentLine < codeLines.length - 1) {
            setCurrentLine(prev => prev + 1);
            setDisplayedText('');
          } else {
            setTimeout(() => {
              setCurrentLine(0);
              setDisplayedText('');
            }, 2000);
          }
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine, isTyping]);

  const getSyntaxHighlight = (text: string) => {
    const parts: Array<{ text: string; color: string }> = [];
    let i = 0;
    let inString = false;
    let stringChar = '';

    while (i < text.length) {
      const char = text[i];

      if (!inString && text.substring(i).match(/^const\s/)) {
        parts.push({ text: 'const', color: 'text-purple-400' });
        i += 5;
        continue;
      }

      if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
        parts.push({ text: char, color: 'text-yellow-300' });
        i++;
        continue;
      }

      if (inString && char === stringChar) {
        inString = false;
        parts.push({ text: char, color: 'text-yellow-300' });
        i++;
        continue;
      }

      if (inString) {
        parts.push({ text: char, color: 'text-yellow-300' });
        i++;
        continue;
      }

      if (text.substring(i).match(/^\d+/)) {
        const match = text.substring(i).match(/^\d+/);
        if (match) {
          parts.push({ text: match[0], color: 'text-orange-400' });
          i += match[0].length;
          continue;
        }
      }

      if (text.substring(i).match(/^\/\/.*/)) {
        const match = text.substring(i).match(/^\/\/.*/);
        if (match) {
          parts.push({ text: match[0], color: 'text-gray-500' });
          i += match[0].length;
          continue;
        }
      }

      if (['developer', 'skills', 'experience'].some(keyword => text.substring(i).startsWith(keyword))) {
        const keyword = ['developer', 'skills', 'experience'].find(k => text.substring(i).startsWith(k));
        if (keyword) {
          parts.push({ text: keyword, color: 'text-blue-300' });
          i += keyword.length;
          continue;
        }
      }

      if (['[', ']', '(', ')', '{', '}', ';', ',', '=', '+'].includes(char)) {
        parts.push({ text: char, color: 'text-white' });
        i++;
        continue;
      }

      parts.push({ text: char, color: 'text-white' });
      i++;
    }

    return parts;
  };

  const renderLine = (lineIndex: number) => {
    if (lineIndex < currentLine) {
      return codeLines[lineIndex];
    }
    if (lineIndex === currentLine) {
      return displayedText;
    }
    return '';
  };

  return (
    <div className={`bg-gray-900 rounded-lg border border-gray-700 p-6 sm:p-8 md:p-10 font-mono text-sm sm:text-base md:text-lg shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-sm sm:text-base">portfolio.js</span>
      </div>
      <div className="space-y-2">
        {codeLines.map((line, lineIndex) => {
          const displayText = renderLine(lineIndex);
          const isCurrentLine = lineIndex === currentLine;
          const highlightedParts = getSyntaxHighlight(displayText);

          return (
            <div key={lineIndex} className="flex items-start">
              <span className="text-gray-600 mr-4 select-none text-xs sm:text-sm md:text-base">{lineIndex + 1}</span>
              <div className="flex-1">
                {highlightedParts.map((part, partIndex) => (
                  <span key={partIndex} className={part.color}>
                    {part.text === ' ' ? '\u00A0' : part.text}
                  </span>
                ))}
                {isCurrentLine && displayedText.length < line.length && (
                  <span className="inline-block w-[2px] h-5 sm:h-6 bg-blue-400 ml-1 animate-pulse"></span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
