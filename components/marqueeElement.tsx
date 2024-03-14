import React from 'react';

interface MarqueeProps {
  componentName: string;
  rate: number;
  marketDifference: number;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ componentName, rate, marketDifference }) => {
  const isPositive = marketDifference >= 0;

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }} className='font-normal uppercase font-poppins text-white lg:text-base lg:mx-14 text-sm mx-3'>
      <span className="marquee-content italic font-semibold">{componentName}</span> <span className='pl-2 pr-1'>{'₹' + rate}</span>
      {isPositive ? (
        <span style={{ color: '#66ff66' }} className='pr-1'>▲</span>
      ) : (
        <span style={{ color: '#ff0000' }} className='pr-1'>▼</span>
      )}
      <span>({Math.abs(marketDifference)}%)</span>
    </div>
  );
};

export default MarqueeComponent;
