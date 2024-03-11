import React from 'react';

interface MarqueeProps {
  componentName: string;
  rate: number;
  marketDifference: number;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ componentName, rate, marketDifference }) => {
  const isPositive = marketDifference >= 0;

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <span className="marquee-content">{componentName}</span> <span className='px-2'>{'₹' + rate}</span>
      {isPositive ? (
        <span style={{ color: 'green' }} >▲</span>
      ) : (
        <span style={{ color: 'red' }}>▼</span>
      )}
      <span>({Math.abs(marketDifference)}%)</span>
    </div>
  );
};

export default MarqueeComponent;
