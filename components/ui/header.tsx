'use client'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo-big.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'
import { useData } from '@/utils/ApiContext';
import React, { useState } from 'react';
import fd from '@/utils/ContextProvider';

export default function Header() {
  const { SensexData, Nifty50Data, BSE500Data } = useData();
  const [selectedLink, setSelectedLink] = useState('page1');

  //console.log('apiData',apiData)
  //console.log(SensexData)
  if (!SensexData || !Nifty50Data || !BSE500Data) {
    return <div>Loading...</div>;
  }

  const data = {
    GoldRate : fd.GoldRate,
    GoldRateChange: fd.GoldRateChange,
    GoldRateChangePercentage: fd.GoldRateChangePercentage,
    SilverRate: fd.SilverRate,
    SilverRateChange: fd.SilverRateChange,
    SilverRateChangePercentage: fd.SilverRateChangePercentage,
    SensexPoints: SensexData.current_price || 0,
    SensexChange: SensexData.price_change || 0,
    SensexChangePercentage: SensexData.price_change_percentage || 0,
    Nifty50Points: Nifty50Data.current_price || 0,
    Nifty50Change: Nifty50Data.price_change || 0,
    Nifty50ChangePercentage: Nifty50Data.price_change_percentage || 0,
    BSE500Points: BSE500Data.current_price || 0,
    BSE500PointsChange: BSE500Data.price_change || 0,
    BSE500PointsChangePercentage: BSE500Data.price_change_percentage || 0,
  }


  return (
    <header className="absolute w-full z-30 overflow-x-hidden ">
      <div className='fixed bg-black-800'>
        <div className="w-full mx-auto border-b-2 border-white px-6">
          <div className="flex items-center justify-between h-20 xl:mx-20 2xl:mx-40">
            {/* Site branding */}
            <div className="shrink-0 px-4">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Value1">
                <Image
                  src={logo}
                  width={100}
                  alt="Value1 Branding"
                  className='object-contain'
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap md:flex-nowrap items-center">
                <li>
                  <Link
                    href="/"
                    className={`${selectedLink === 'page1' ? 'text-gold-500' : 'text-white'} font-semibold  text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page1')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className={`${selectedLink === 'page2' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page2')}
                  >
                    How it Works?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${selectedLink === 'page3' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page3')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${selectedLink === 'page4' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page4')}
                  >
                    Co-Own
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${selectedLink === 'page5' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page5')}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${selectedLink === 'page6' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-4 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page6')}
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.value1.in"
                    className="font-semibold w-max inline-flex items-center justify-center border border-transparent ml-2 px-3 py-2 my-2 rounded-full text-white bg-gold-500 hover:bg-gold-400 active:scale-95 transition duration-150 ease-in-out"
                  >
                    Sign Up / Sign In
                  </Link>
                </li>
              </ul>
            </nav>

            <MobileMenu />

          </div>
        </div>
        <div className='flex w-screen h-8 bg-gold-600 justify-center'>
          <Marquee speed={80} pauseOnHover pauseOnClick direction='right' loop={0} className='md:w-4/6 w-5/6 bg-gold-600' gradient gradientColor='#e2aa03' gradientWidth={30}>
          <div className='flex flex-row justify-evenly items-center lg:gap-8 gap-2 mx-2'>
            <MarqueeComponent componentName="Gold" rate={data.GoldRate} changePercentage={data.GoldRateChangePercentage} type='metal' marketChange={data.GoldRateChange} />
            <MarqueeComponent componentName="Silver" rate={data.SilverRate} changePercentage={data.SilverRateChangePercentage} type='metal' marketChange={data.SilverRateChange} />
            <MarqueeComponent componentName="Sensex" rate={data.SensexPoints} changePercentage={data.SensexChangePercentage} type='metal' marketChange={data.SensexChange} />
            <MarqueeComponent componentName="nifty 50" rate={data.Nifty50Points} changePercentage={data.Nifty50ChangePercentage} type='metal' marketChange={data.Nifty50Change} />
            <MarqueeComponent componentName="BSE 500" rate={data.BSE500Points} changePercentage={data.BSE500PointsChangePercentage} type='metal' marketChange={data.BSE500PointsChange} />
          </div>
          </Marquee>
        </div>
      </div>
      
    </header>
  )
}
