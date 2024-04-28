'use client'

import HeaderCarousal from "./HeaderCarousal"
import { ReactTyped } from 'react-typed'

export default function Hero() {


  return (
    <section >
      <div className="max-w-full mx-auto md:px-4 px-3">

        {/* Hero content */}
        <div className="relative pt-40 pb-4 flex flex-col items-center justify-center">

          <HeaderCarousal />

          <div className='flex lg:hidden flex-col hero-section w-full max-w-2xl md:w-4/6 px-4 mt-8 lg:mt-0 text-white'>
            <h1 className="font-bold text-4xl mb-4 text-center" data-aos="fade-up">Your <span className='text-gold-500'>Gold</span> Savings</h1>
            <h1 className="font-bold text-4xl mb-4 text-center" data-aos="fade-up">
              Made<br />
              <span className='text-gold-500'>
                <ReactTyped
                  strings={[
                    "Easy", "Safe", "Secure", "Democratized", "Affordable"
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>
            <p className="font-medium text-lg text-center text-gold-600 mb-8" data-aos="fade-up" data-aos-delay="200">World’s 1st Gold Store Co-Owned by its customers like you. </p>
            <p className="text-lg text-gold-600 mb-8 text-center" data-aos="fade-up" data-aos-delay="220">Buy 24k 999 Pure Digital Gold online at the best prices from the comforts of your home</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex items-center sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-gold-600 rounded-xl bg-white hover:bg-gold-500 hover:text-white w-full mb-4 sm:w-40 lg:w-max text-center sm:mb-0 transition duration-300 ease-in-out" href="https://app.value1.in/auth">Start saving Gold now!</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white rounded-xl bg-transparent border-2 border-gold-600 hover:bg-white hover:text-gold-500 w-full sm:w-auto sm:ml-4 transition duration-300 ease-in-out" href="#features">Learn more</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
