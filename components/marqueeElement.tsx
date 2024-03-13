import React from 'react';

interface MarqueeProps {
  componentName: string;
  rate: number;
  marketDifference: number;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ componentName, rate, marketDifference }) => {
  const isPositive = marketDifference >= 0;

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }} className='font-medium font-rubik text-white lg:text-base lg:mx-14 text-sm mx-3'>
      <span className="marquee-content">{componentName}</span> <span className='px-2'>{'₹' + rate}</span>
      {isPositive ? (
        <span style={{ color: '#66ff66' }} className='px-1'>▲</span>
      ) : (
        <span style={{ color: '#ff0000' }} className='px-1'>▼</span>
      )}
      <span>({Math.abs(marketDifference)}%)</span>
    </div>
  );
};

export default MarqueeComponent;
