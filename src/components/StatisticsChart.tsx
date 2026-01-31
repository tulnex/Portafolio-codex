import React from 'react';

export default function StatisticsChart() {
  const data = [
    { date: '27 Jun', operations: 0.4, dataTransfer: 0.15, isProjected: false },
    { date: '28 Jun', operations: 0.6, dataTransfer: 0.25, isProjected: false },
    { date: '29 Jun', operations: 0.5, dataTransfer: 0.2, isProjected: false },
    { date: '30 Jun', operations: 0.7, dataTransfer: 0.32, isProjected: true },
    { date: '1 Jul', operations: 0.87, dataTransfer: 0.45, isProjected: false },
    { date: '2 Jul', operations: 0.65, dataTransfer: 0.28, isProjected: true },
    { date: '3 Jul', operations: 0.75, dataTransfer: 0.35, isProjected: false },
    { date: '4 Jul', operations: 0.8, dataTransfer: 0.4, isProjected: false },
  ];

  const maxValue = 1.0;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="text-xl font-semibold text-black">Statistics</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <span className="text-sm text-gray-600">Operations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-400"></div>
            <span className="text-sm text-gray-600">Data transfer</span>
          </div>
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
            <option>2025 ⌄</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-end gap-2 h-64">
        {data.map((item, index) => {
          const operationsHeight = (item.operations / maxValue) * 100;
          const dataTransferHeight = (item.dataTransfer / item.operations) * 100;
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
              <div className="relative w-full h-full flex items-end">
                <div
                  className={`w-full relative ${
                    item.isProjected ? 'border-2 border-dashed border-gray-400' : ''
                  }`}
                  style={{ height: `${operationsHeight}%` }}
                >
                  <div
                    className={`w-full ${
                      item.isProjected ? 'bg-gray-300' : 'bg-black'
                    } rounded-t`}
                    style={{ height: '100%' }}
                  >
                    <div
                      className={`w-full ${
                        item.isProjected ? 'bg-lime-300' : 'bg-lime-400'
                      } rounded-t`}
                      style={{ height: `${dataTransferHeight}%` }}
                    />
                  </div>
                  {index === 3 && (
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      32%
                    </span>
                  )}
                  {index === 4 && (
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      87%
                    </span>
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2">{item.date}</div>
            </div>
          );
        })}
      </div>
      
      {/* Y-axis labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>0.1</span>
        <span>0.5</span>
        <span>1.0</span>
      </div>
    </div>
  );
}
