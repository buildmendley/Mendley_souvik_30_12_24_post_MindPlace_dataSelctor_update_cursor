import React from 'react';
import PhoneScreen from './PhoneScreen';

const PhoneMockup = () => {
  return (
    <div className="relative w-[320px] h-[650px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-800">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
      <div className="p-4 h-full">
        <div className="flex items-center justify-between mb-8 pt-2">
          <span className="text-sm text-gray-500">11:59</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          </div>
        </div>
        
        <PhoneScreen />
      </div>
    </div>
  );
};

export default PhoneMockup;