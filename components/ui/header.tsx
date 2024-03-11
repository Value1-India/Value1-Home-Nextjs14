import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'

export default function Header() {
  return (
    <header className="absolute w-full z-30 mb-10">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Value1">
              <Image
                src={logo}
                width={250}
                height={500}
                alt="Value1 Branding"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#"
                  className="font-semibold text-gray-700 hover:text-gold-500 px-8 py-3 flex items-center transition duration-250 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-semibold text-gray-700 hover:text-gold-500 px-8 py-3 flex items-center transition duration-250 ease-in-out"
                >
                  How it Works?
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-semibold text-gray-700 hover:text-gold-500 px-8 py-3 flex items-center transition duration-250 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-semibold text-gray-700 hover:text-gold-500 px-8 py-3 flex items-center transition duration-250 ease-in-out"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-semibold w-max inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-gold-500 hover:bg-gold-400 active:scale-95 transition duration-150 ease-in-out"
                >
                  Sign Up / Sign In
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
      <div className='flex bg-gold-800 w-full h-10 '>
        <Marquee speed={10} pauseOnHover pauseOnClick direction='right' loop={0}>
          <MarqueeComponent componentName="Gold" rate={100} marketDifference={-1.8} />
        </Marquee>
      </div>
    </header>
  )
}
