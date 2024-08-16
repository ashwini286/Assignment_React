import React, { useState } from 'react';

const Home = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // Example random book calculations
  const bookCalculations = [
    "Water Area: 120 cr",
    "Sand Area: 150 cr",
    "Black Soil Area: 200 cr",
    "Red Soil Area: 175 cr",
    "Brown Soil Area: 130 cr"
  ];

  return (
    <div className="bg-white shadow-xl w-[500px] h-[100px] mt-[30px] ml-[490px] pb-[16px] flex items-center justify-center relative">
      <div className="relative bg-gray-200 flex h-[30px] w-[360px] rounded-2xl overflow-hidden">
        {['20%', '20%', '20%', '20%'].map((width, index) => (
          <div
            key={index}
            className="absolute top-0 h-full"
            style={{
              width,
              left: `${index * 20}%`,
              backgroundColor: `hsl(${index * 72}, 70%, 50%)`
            }}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          />
        ))}
      </div>
      {hoveredSection !== null && (
        <div 
          className="absolute bg-black text-white text-sm rounded-lg p-2"
          style={{
            top: '40px',
            left: `${hoveredSection * 20}%`,
            transform: 'translateX(-50%)'
          }}
        >
          {bookCalculations[hoveredSection]}
        </div>
      )}
    </div>
  );
};

export default Home;
