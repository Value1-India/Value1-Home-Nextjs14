import React from 'react';

interface MarqueeProps {
  componentName: string;
  rate: number; //points
  marketChange: number,
  changePercentage: number;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ componentName, rate, changePercentage, marketChange}) => {
  const isPositive = changePercentage >= 0;

  const formatCurrency = (value: number): string => {
    try {
      return value.toLocaleString("en-IN", { style: "currency", currency: "INR" });
    } catch (error) {
      console.error("Currency formatting error:", error);
      // Fallback to a default format if formatting fails
      return `${value} INR`;
    }
  };

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }} className='font-normal uppercase font-poppins text-black-800 lg:text-base lg:mx-14 text-sm mx-3'>
      <span className="marquee-content italic font-semibold">{componentName}</span>
      <span className='pl-2 pr-1'>{formatCurrency(rate)}</span>
      {isPositive ? (
        <>
          <span style={{ color: '#33cc00' }} className='pr-1'>▲</span>
          <span style={{ color: '#33cc00' }} className='pr-2'>{marketChange < 0 ? '-' : '+'}{Math.abs(marketChange)}</span>
          <span style={{ color: '#33cc00' }}>({changePercentage < 0 ? '-' : '+'}{Math.abs(changePercentage)}%)</span>
        </>
      ) : (
        <>
          <span style={{ color: '#e62e00' }} className='pr-1'>▼</span>
          <span style={{ color: '#e62e00' }} className='pr-2'>{marketChange < 0 ? '-' : '+'}{Math.abs(marketChange)}</span>
          <span style={{ color: '#e62e00' }}>({changePercentage < 0 ? '-' : '+'}{Math.abs(changePercentage)}%)</span>
        </>
      )}
    </div>
  );
};

export default MarqueeComponent;
