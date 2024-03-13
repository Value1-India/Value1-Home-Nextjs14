import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo-big.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'

export default function Header() {
  return (
    <header className="absolute w-full z-30 overflow-x-hidden ">
      <div className='fixed bg-black-800'>
        <div className="w-full mx-auto border-b-2 border-white px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 px-4">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Value1">
                <Image
                  src={logo}
                  width={100}
                  height={100}
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
                    className="font-semibold text-white text-lg hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-semibold text-white text-lg hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out"
                  >
                    How it Works?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-semibold text-white text-lg hover:text-gold-500 px-3 lg:px-8 py-3 flex items-center transition duration-250 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-semibold text-white text-lg hover:text-gold-500 px-3 lg:px-8 flex items-center transition duration-250 ease-in-out"
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
        <div className='flex w-screen h-8 bg-gold-800 justify-center'>
          <Marquee speed={80} pauseOnHover pauseOnClick direction='right' loop={0} className='md:w-4/6 w-5/6 bg-gold-800' gradient gradientColor='#977202' gradientWidth={30}>
            <div className='flex flex-row justify-evenly items-center lg:gap-8 gap-2 mx-2'>
              <MarqueeComponent componentName="Gold" rate={100} marketDifference={1.8} />
              <MarqueeComponent componentName="Silver" rate={100} marketDifference={-1.5} />
              <MarqueeComponent componentName="Platinum" rate={100} marketDifference={0.05} />
              <MarqueeComponent componentName="Rhodium" rate={100} marketDifference={-0.95} />
            </div>
          </Marquee>
        </div>
      </div>
      
    </header>
  )
}
