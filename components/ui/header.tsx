'use client'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo-big.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'
import React, { useState } from 'react';

import fd from '@/utils/ContextProvider';

export default function Header() {

  const data = {
    GoldRate : fd.GoldRate,
    GoldRateChange: fd.GoldRateChange,
    GoldRateChangePercentage: fd.GoldRateChangePercentage,
    SilverRate: fd.SilverRate,
    SilverRateChange: fd.SilverRateChange,
    SilverRateChangePercentage: fd.SilverRateChangePercentage,
    SensexPoints: fd.SensexPoints,
    SensexChange: fd.SensexChange,
    SensexChangePercentage: fd.SensexChangePercentage,
    Nifty50Points: fd.Nifty50Points,
    Nifty50Change: fd.Nifty50Change,
    Nifty50ChangePercentage: fd.Nifty50ChangePercentage,
    USD2INR: fd.USD2INR,
    USD2INRChange: fd.USD2INRChange,
    USD2INRChangePercentage: fd.USD2INRChangePercentage,
  }

  const [selectedLink, setSelectedLink] = useState('page1');
  return (
    <header className="absolute w-full z-30 overflow-x-hidden ">
      <div className='fixed bg-black-800'>
        <div className="w-full mx-auto border-b-2 border-white px-6">
          <div className="flex items-center justify-between h-20 md:mx-2 lg:mx-12 xl:mx-20 2xl:mx-40">
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
                    className={`${selectedLink === 'page1' ? 'text-gold-500' : 'text-white'} font-semibold  text-md hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page1')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className={`${selectedLink === 'page2' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page2')}
                  >
                    How it Works?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${selectedLink === 'page3' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page3')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${selectedLink === 'page4' ? 'text-gold-500' : 'text-white'} font-semibold text-md hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out`}
                    onClick={() => setSelectedLink('page4')}
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.value1.in"
                    className="font-semibold w-max inline-flex items-center justify-center border border-transparent ml-2 px-4 py-2 my-2 rounded-full text-white bg-gold-500 hover:bg-gold-400 active:scale-95 transition duration-150 ease-in-out"
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
            <MarqueeComponent componentName="Sensex" rate={data.SensexPoints} changePercentage={data.SensexChangePercentage} type='index' marketChange={data.SensexChange} />
            <MarqueeComponent componentName="nifty50" rate={data.Nifty50Points} changePercentage={data.Nifty50ChangePercentage} type='index' marketChange={data.Nifty50Change} />
            <MarqueeComponent componentName="USDINR FUT" rate={data.USD2INR} changePercentage={data.USD2INRChangePercentage} type='index' marketChange={data.USD2INRChange} />
          </div>
          </Marquee>
        </div>
      </div>
      
    </header>
  )
}
