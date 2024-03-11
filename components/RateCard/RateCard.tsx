'use client'

import Link from 'next/link';
import MobileMenu from '@/components/ui/mobile-menu';
import xicon from '@/public/images/exchange-icon.png';
import Image from 'next/image';
import { useState } from 'react';

interface RateCardProps {
  goldRate: string;
  silverRate: string;
}

export default function RateCard({ goldRate, silverRate }: RateCardProps): JSX.Element {
  const [chooseMetal, setChooseMetal] = useState<string>('');
  const [chooseOption, setChooseOption] = useState<string>('');

  const handleMetalClick = (metal: string): void => {
    setChooseMetal(metal);
  };

  const handleOptionClick = (option: string): void => {
    setChooseOption(option);
  };

  const calculateFinalRate = (): string => {
    let rate = chooseMetal === 'gold' ? goldRate : silverRate;

    if (chooseOption === 'buy') {
      const rateWithGST = parseFloat(rate) * 1.03; // Adding 3% GST for Buy option
      return rateWithGST.toFixed(2);
    }

    return rate;
  };

  return (
    <div className='w-5/6 h-full bg-white rounded-3xl mt-32 overflow-hidden'>
      <div className='flex flex-col justify-center items-center py-4 bg-gold-600'>{/* live price section */}
        <div className='flex items-center justify-around text-black-800 gap-4'> {/* metal list */}
          <div className={`px-4 font-semibold cursor-pointer ${chooseMetal === 'gold' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('gold')}>
            <div className='mb-2 text-2xl font-bold'>Gold</div>
          </div>
          <div className={`px-4 font-semibold cursor-pointer ${chooseMetal === 'silver' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('silver')}>
            <div className='mb-2 text-2xl font-bold'>Silver</div>
          </div>
        </div>
        <div className='font-medium text-white text-5xl py-5'>&#8377;{calculateFinalRate()}/g</div>
        <div className='flex items-center justify-center gap-3 pb-3 text-black-700'> {/* live rate animation */}
          <div className='bg-red-600 rounded-full animate-pulse w-2 h-2'></div>
          <div>Live Rates</div>
        </div>
        {chooseOption === 'buy' && <div className='font-light text-white text-sm'>* Additional 3% GST applicable</div>}
      </div>

      {/* Buy/Sell section and other components remain unchanged */}
      <div className='flex flex-col items-center justify-center pb-4'>{/* Buy/Sell section */}
        <div className='w-full flex items-center justify-between text-white mb-4 bg-gold-800'>
          <div className={`w-full px-4 font-semibold cursor-pointer ${chooseOption === 'buy' ? 'text-gold-500 bg-black-500': ''}`} onClick={() => handleOptionClick('buy')}>
            <div className='py-3 text-2xl font-bold'>Buy</div>
          </div>
          <div className={`w-full px-4 font-semibold cursor-pointer ${chooseOption === 'sell' ? 'text-gold-500 bg-black-500' : ''}`} onClick={() => handleOptionClick('sell')}>
            <div className='py-3 text-2xl font-bold'>Sell</div>
          </div>
        </div>
        <div className='text-black-700 font-semibold text-3xl '>Enter the amount</div>
        <form action="#" method="post" className='flex justify-between gap-4 items-center'>
          <div className="coolinput">
            <label htmlFor="input" className="text font-normal text-black-500">Rupees</label>
            <input type="text" placeholder="" name="input" className="input form-input text-black-700 text-md focus:outline-none w-40" />
          </div>

          <Image src={xicon} width={100} height={100} alt='exchange icon' className='w-8 h-auto mt-4' />

          <div className="coolinput">
            <label htmlFor="input" className="text font-normal text-black-500">Grams</label>
            <input type="text" placeholder="" name="input" className="input form-input text-black-700 text-md focus:outline-none w-40" />
          </div>
        </form>
        <div className='flex flex-row gap-8 my-5 items-center justify-between'>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer'>100</div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer'>500</div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer'>1000</div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer'>5000</div>
        </div>
        <button className='w-32 px-6 py-3 bg-gold-500 text-black-700 font-bold text-xl rounded-xl active:bg-gold-600'>
        {chooseOption === 'buy' ? 'Buy' : 'Sell'}
      </button>
      </div>
    </div>
  );
}
