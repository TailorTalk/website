import React, { useState } from 'react';
import useCaseData from '../Config/useCaseData';

const UseCases = () => {
  const [selectedHeader, setSelectedHeader] = useState(1);

  const Header = [
    { id: 1, label: useCaseData[0].title },
    { id: 2, label: useCaseData[1].title },
    { id: 3, label: useCaseData[2].title },
    { id: 4, label: useCaseData[3].title },
    { id: 5, label: useCaseData[4].title },
  ];

  return (
    <div className="w-11/12 px-2 md:px-12 lg:px-24 bg-[#f1f1ee] rounded-3xl mx-auto">
      
      <div className="flex flex-col md:flex-row pt-6 md:pt-16 w-full">
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
          <div className="flex flex-col gap-4 justify-center items-center">
            {Header.map((item) => (
              <div
                key={item.id}
                className={`p-[2px] w-full md:w-10/12 hover:cursor-pointer ml-4 md:ml-0 rounded-lg ${
                  selectedHeader === item.id ? 'globalBgColor' : 'bg-white'
                }`}
              >
                <div
                  onClick={() => setSelectedHeader(item.id)}
                  className={`flex justify-center items-center w-full px-4 py-3 text-center text-sm md:text-lg rounded-lg transition-all duration-300 ${
                    selectedHeader === item.id
                      ? 'globalBgColor text-white border-white border'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300 border-transparent'
                  }`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center pl-4">
          {selectedHeader >= 1 && (
            <div className="flex flex-col w-full h-auto md:h-[26rem] pb-7 md:p-4 overflow-hidden">
              <div className="w-full md:pl-10 flex flex-col justify-center">
                <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4" style={{ lineHeight: '1.5' }}>
                  {useCaseData[selectedHeader - 1].title}
                </h1>
                <p className="text-gray-600 text-base md:text-l mt-6" style={{ lineHeight: '1.6' }}>
                  {useCaseData[selectedHeader - 1].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
