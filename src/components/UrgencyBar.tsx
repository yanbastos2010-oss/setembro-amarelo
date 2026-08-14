import React from 'react';

export const UrgencyBar: React.FC = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return (
    <div 
      id="urgency-bar" 
      className="bg-[#DC2626] text-white py-3 sm:py-3.5 px-4 text-center font-[700] text-sm sm:text-base md:text-lg tracking-wide shadow-md flex items-center justify-center"
    >
      <span className="uppercase tracking-wider">
        DESCONTO SÓ HOJE NESSA PÁGINA - {day}/{month}/{year}
      </span>
    </div>
  );
};
