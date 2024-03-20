import React from 'react';

interface MarqueeProps {
  componentName: string;
  type: string,
  rate: number; //points
  marketChange: number,
  changePercentage: number;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ componentName, rate, changePercentage, marketChange,type }) => {
  const isPositive = changePercentage >= 0;

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }} className='font-normal uppercase font-poppins text-white lg:text-base lg:mx-14 text-sm mx-3'>
      <span className="marquee-content italic font-semibold">{componentName}</span>
      {type === 'metal' ? (
        <span className='pl-2 pr-1'>{'₹' + rate}</span>
      ) : (
        <span className='pl-2 pr-1'>{rate}</span>
      )}
      {isPositive ? (
        <>
          <span style={{ color: '#80ff80' }} className='pr-1'>▲</span>
          <span style={{ color: '#80ff80' }} className='pr-2'>{marketChange < 0 ? '-' : '+'}{Math.abs(marketChange)}</span>
          <span style={{ color: '#80ff80' }}>({changePercentage < 0 ? '-' : '+'}{Math.abs(changePercentage)}%)</span>
        </>
      ) : (
        <>
          <span style={{ color: '#ff0000' }} className='pr-1'>▼</span>
          <span style={{ color: '#ff0000' }} className='pr-2'>{marketChange < 0 ? '-' : '+'}{Math.abs(marketChange)}</span>
          <span style={{ color: '#ff0000' }}>({changePercentage < 0 ? '-' : '+'}{Math.abs(changePercentage)}%)</span>
        </>
      )}
    </div>
  );
};

export default MarqueeComponent;
