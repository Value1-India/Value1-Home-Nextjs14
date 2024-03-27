'use client'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo-big.png'
import Image from 'next/image'
import React, { useState } from 'react';
import MarqueeScroller from './Marquee'

export default function Header() {
  const [selectedLink, setSelectedLink] = useState('page1');

  return (
    <header className="absolute w-full z-30 overflow-x-hidden ">
      <div className='fixed bg-black-800'>
        <div className="w-full mx-auto border-b-2 border-gold-500 px-6">
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
                    href="https://app.value1.in/auth"
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
        <div className='flex w-screen h-8 bg-gold-100 border-gold-500 border-b-2 justify-center'>
          <MarqueeScroller />
        </div>
      </div>
      
    </header>
  )
}
