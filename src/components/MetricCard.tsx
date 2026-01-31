import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  max: string;
  percentage: number;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  progressColor?: string;
}

export default function MetricCard({
  title,
  value,
  max,
  percentage,
  icon,
  bgColor,
  textColor = 'text-black',
  progressColor = 'bg-black'
}: MetricCardProps) {
  const filledBlocks = Math.round((percentage / 100) * 10);
  
  return (
    <div className={`${bgColor} rounded-lg p-6 ${textColor}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">{percentage}%</span>
          <div className={`w-6 h-6 rounded-full ${progressColor} flex items-center justify-center`}>
            <span className="text-white text-xs font-bold">O</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm opacity-80">out of {max}</div>
      </div>
      
      <div className="flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded ${
              i < filledBlocks ? progressColor : 'bg-gray-300 opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
