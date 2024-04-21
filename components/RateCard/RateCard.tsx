'use client'

import xicon from '@/public/images/exchange-icon.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';

// interface RateCardProps {
//   goldRate: string;
//   silverRate: string;
// }

interface RateCardProps {
  goldRate: {
    Buy: string,
    Sell: string,
  };
  silverRate: {
    Buy: string,
    Sell: string,
  };
}

export default function RateCard({ goldRate, silverRate }: RateCardProps): JSX.Element {
  const [activeInput, setActiveInput] = useState<'rupees' | 'grams'>('rupees');
  const [chooseMetal, setChooseMetal] = useState<string>('gold');
  const [chooseOption, setChooseOption] = useState<string>('buy');
  const [rupeesValue, setRupeesValue] = useState<string>('1000');
  const [gramsValue, setGramsValue] = useState<string>('10');

  const handleMetalClick = (metal: string): void => {
    setChooseMetal(metal);
  };

  const handleOptionClick = (option: string): void => {
    setChooseOption(option);
  };

  const calculateFinalRate = (): string => {
    let rate = chooseMetal === 'gold' ? goldRate : silverRate;

    if (chooseOption === 'buy') {
      //const rateWithGST = parseFloat(rate) * 1.03; // Adding 3% GST for Buy option
      const buyRate = parseFloat(rate.Buy)
      return buyRate.toLocaleString("en-IN", { style: 'currency', currency: 'INR' });
    }

    return parseFloat(rate.Sell).toLocaleString("en-IN", { style: 'currency', currency: 'INR' });
  };

  const handleExchangeClick = (): void => {
    if (activeInput === 'rupees') {
      let convertedGrams;
      if (chooseMetal === 'gold') {
        convertedGrams = parseFloat(rupeesValue) / parseFloat(goldRate.Buy);
      } else {
        convertedGrams = parseFloat(rupeesValue) / parseFloat(silverRate.Buy);
      }
      if (!isNaN(convertedGrams)) {
        setGramsValue(convertedGrams.toFixed(2));
        setActiveInput('grams');
      }
    } else if (activeInput === 'grams') {
      let convertedRupees;
      if (chooseMetal === 'gold') {
        convertedRupees = parseFloat(gramsValue) * parseFloat(goldRate.Buy);
      } else {
        convertedRupees = parseFloat(gramsValue) * parseFloat(silverRate.Buy);
      }
      if (!isNaN(convertedRupees)) {
        setRupeesValue(convertedRupees.toFixed(4));
        setActiveInput('rupees');
      }
    }
  };

  // useEffect(() => {
  //   // Set initial values based on default selections
  //   if (chooseMetal === 'gold') {
  //     if ( activeInput === 'rupees'){
  //       let gramsVal = parseFloat(rupeesValue) / parseFloat(goldRate);
  //       if (!isNaN(gramsVal)) {
  //         setGramsValue(gramsVal.toFixed(2));
  //       }
  //     } else {
  //       let rupeesVal = parseFloat(gramsValue) * parseFloat(goldRate);
  //       if (!isNaN(rupeesVal)) {
  //         setRupeesValue(rupeesVal.toFixed(2));
  //       }
  //     }
  //   } else if (chooseMetal === 'silver') {
  //     if (activeInput === 'rupees'){
  //       let gramsVal = parseFloat(rupeesValue) / parseFloat(silverRate);
  //       if (!isNaN(gramsVal)) {
  //         setGramsValue(gramsVal.toFixed(2));
  //       }
  //     } else {
  //       let rupeesVal = parseFloat(gramsValue) * parseFloat(silverRate);
  //       if (!isNaN(rupeesVal)) {
  //         setRupeesValue(rupeesVal.toFixed(2));
  //       }
  //     }
  //   }
  // }, [chooseMetal, gramsValue, rupeesValue, goldRate, silverRate, activeInput]);


  useEffect(() => {
    // Set initial values based on default selections
    if (chooseMetal === 'gold') {
      if (activeInput === 'rupees') {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(rupeesValue) / parseFloat(goldRate.Buy);
        } else {
          convertedValue = parseFloat(rupeesValue) / parseFloat(goldRate.Sell);
        }
        if (!isNaN(convertedValue)) {
          setGramsValue(convertedValue.toFixed(4));
        }
      } else {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(gramsValue) * parseFloat(goldRate.Buy);
        } else {
          convertedValue = parseFloat(gramsValue) * parseFloat(goldRate.Sell);
        }
        if (!isNaN(convertedValue)) {
          setRupeesValue(convertedValue.toFixed(4));
        }
      }
    } else if (chooseMetal === 'silver') {
      if (activeInput === 'rupees') {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(rupeesValue) / parseFloat(silverRate.Buy);
        } else {
          convertedValue = parseFloat(rupeesValue) / parseFloat(silverRate.Sell);
        }
        if (!isNaN(convertedValue)) {
          setGramsValue(convertedValue.toFixed(4));
        }
      } else {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(gramsValue) * parseFloat(silverRate.Buy);
        } else {
          convertedValue = parseFloat(gramsValue) * parseFloat(silverRate.Sell);
        }
        if (!isNaN(convertedValue)) {
          setRupeesValue(convertedValue.toFixed(4));
        }
      }
    }
  }, [chooseMetal, gramsValue, rupeesValue, goldRate, silverRate, activeInput, chooseOption]);




  // const handleCommonButtonClick = (value: number): void => {          //adds the common value to existing value
  //   if (activeInput === 'rupees') {
  //     setRupeesValue((parseFloat(rupeesValue) + value).toFixed(2));
  //   } else if (activeInput === 'grams') {
  //     setGramsValue((parseFloat(gramsValue) + value).toFixed(2));
  //   }
  // };

  const handleCommonButtonClick = (value: number): void => {
    if (activeInput === 'rupees') {
      setRupeesValue(Math.floor(value).toString());
    } else if (activeInput === 'grams') {
      setGramsValue(Math.floor(value).toString());
    }
  };

  // const gstConversion = (): string => {
  //   let rate = chooseMetal === 'gold' ? goldRate : silverRate;

  //   const rateWithGST = parseFloat(rate) * 1.03; // Adding 3% GST for Buy option
  //   return rateWithGST.toFixed(2);
  // };


  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-xs md:max-w-md h-full bg-white rounded-3xl overflow-hidden border-2 md:border-4 border-white'>
        <div className='flex flex-col justify-center items-center py-4 bg-gold-600'>{/* live price section */}
          <div className='flex items-center justify-around text-black-800 gap-2 md:gap-4'>
            <div className={`px-2 md:px-4 cursor-pointer ${chooseMetal === 'gold' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('gold')}>
              <div className='mb-1 text-md font-semibold md:mb-2 md:text-xl md:font-bold'>Gold</div>
            </div>
            <div className={`px-2 md:px-4 cursor-pointer ${chooseMetal === 'silver' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('silver')}>
              <div className='mb-1 text-md font-semibold md:mb-2 md:text-xl md:font-bold'>Silver</div>
            </div>

          </div>
          <div id='metalrate' className='font-medium text-white py-3 lg:text-4xl text-3xl md:py-3'>{calculateFinalRate()}/g</div>
          <div className='flex items-center justify-center gap-3 pb-2 text-black-700 font-medium text-sm md:text-md lg:text-lg'> {/* live rate animation */}
            <div className='bg-red-600 rounded-full animate-ping w-2 h-2'></div>
            <div>Live Rates</div>
          </div>
          {chooseOption === 'buy' && <div className='font-light text-white text-xs md:text-sm'>* Additional 3% GST applicable</div>}
        </div>

        {/* Buy/Sell section and other components remain unchanged */}
        <div className='flex flex-col items-center justify-center pb-2'>{/* Buy/Sell section */}
          <div className='w-full flex items-center justify-between text-center text-white mb-2 md:mb-4 bg-gold-700'>
            <div className={`w-full px-4 cursor-pointer ${chooseOption === 'buy' ? 'text-gold-500 bg-black-500' : ''}`} onClick={() => handleOptionClick('buy')}>
              <div className='py-2 md:py-3 font-semibold md:text-xl md:font-bold'>Buy</div>
            </div>
            <div className={`w-full px-4 cursor-pointer ${chooseOption === 'sell' ? 'text-gold-500 bg-black-500' : ''}`} onClick={() => handleOptionClick('sell')}>
              <div className='py-2 md:py-3 font-semibold md:text-xl md:font-bold'>Sell</div>
            </div>
          </div>
          <div className='text-black-700 font-semibold text-xl md:text-3xl pt-4  '>{activeInput === 'rupees' ? 'Enter the Amount' : 'Enter the Quantity'}</div>
          {/* <form action="#" method="post" className='flex flex-row justify-between gap-4 items-center'> */}
          <form id="exchangeForm" action="#" method="post" className={`flex ${activeInput === 'rupees' ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} justify-between md:justify-between md:gap-4 items-center px-2`}>
            <div className="coolinput flex justify-center flex-col">
              <label htmlFor="rupeesInput" className="text text-xs md:text-sm font-normal bg-white text-black-500">Rupees</label>
              <CurrencyInput
                id="rupeesInput"
                className='input form-input text-black-700 text-md focus:outline-none focus:ring-1 focus:ring-gold-500 w-40 p-2'
                name="rupees"
                placeholder="₹"
                value={rupeesValue || ''}
                onValueChange={(value) => setRupeesValue(value || '')}
                disabled={activeInput === 'grams'}
              />
            </div>

            <Image src={xicon} width={100} height={100} alt='exchange icon' onClick={handleExchangeClick} className='w-6 mt-4 cursor-pointer xs:rotate-90 md:rotate-0 ' />

            <div className="coolinput flex flex-col">
              <label htmlFor="gramsInput" className="text text-xs md:text-sm font-normal bg-white text-black-500">Grams</label>
              <CurrencyInput
                id="gramsInput"
                className='input form-input text-black-700 text-md focus:outline-none focus:ring-1 focus:ring-gold-500 w-40 p-2'
                name="grams"
                placeholder="g"
                value={gramsValue || ''}
                onValueChange={(value) => setGramsValue(value || '')}
                disabled={activeInput === 'rupees'}
              />
            </div>
          </form>
          <div className='flex flex-wrap md:flex-nowrap flex-row gap-1 md:gap-8 my-4 md:my-8 items-center justify-center md:justify-between'>
            <div className='btn w-max font-medium text-black-400 rounded-lg bg-gold-200 px-2 py-1 md:px-4 md:py-2 hover:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 100 : 1)}>
              {activeInput === 'rupees' ? '₹100' : '1g'}
            </div>
            <div className='btn w-max font-medium text-black-400 rounded-lg bg-gold-200 px-2 py-1 md:px-4 md:py-2 hover:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 500 : 10)}>
              {activeInput === 'rupees' ? '₹500' : '10g'}
            </div>
            <div className='btn w-max font-medium text-black-400 rounded-lg bg-gold-200 px-2 py-1 md:px-4 md:py-2 hover:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 1000 : 50)}>
              {activeInput === 'rupees' ? '₹1000' : '50g'}
            </div>
            <div className='btn w-max font-medium text-black-400 rounded-lg bg-gold-200 px-2 py-1 md:px-4 md:py-2 hover:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 5000 : 100)}>
              {activeInput === 'rupees' ? '₹5000' : '100g'}
            </div>
          </div>
          <a href='https://app.value1.in' className='btn w-20 p-1 md:w-32 md:mb-2 md:px-6 md:py-3 bg-gold-500 text-black-700 font-bold text-lg md:text-xl rounded-xl hover:bg-gold-600'>
            {chooseOption === 'buy' ? 'Buy' : 'Sell'}
          </a>
        </div>
      </div>
    </div>
  );
}
