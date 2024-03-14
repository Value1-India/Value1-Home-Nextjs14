'use client'
import RateCard from './RateCard/RateCard'
import Image from 'next/image'
import heroFg from '@/public/images/herosection.png'
import { ReactTyped } from 'react-typed'

export default function Hero() {

  var goldRate = '6748.79'
  var silverRate = '75.26'

  return (
    <section>
      <div className="max-w-full mx-auto md:px-4 px-3 relative">

        {/* Hero content */}
        <div className="relative pt-40 pb-4">

          {/* Section header */}
          <div className="max-w-full flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap items-center justify-around mx-auto pb-4">
            
            <div className='hero-section w-full max-w-2xl md:w-4/6 px-8 mt-8 lg:mt-0'>
              {/* <div>
                <Image src={heroFg} width={2500} alt='' />
              </div> */}
              <h1 className="h1 mb-4" data-aos="fade-up">Your <span className='text-gold-500'>Gold</span> Savings</h1>
              <h1 className="h1 mb-4 text-left" data-aos="fade-up">
                Made
                <span className='text-gold-500 pl-2'>
                  <ReactTyped
                  strings={[
                    "Easy","Safe","Secure","Democratized","Affordable"
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                  />
                </span>
              </h1>
              <p className="font-medium text-xl text-gold-600 mb-8" data-aos="fade-up" data-aos-delay="200">World’s 1st Gold Store Co-Owned by its customers like you. </p>
              <p className="text-xl text-gold-600 mb-8" data-aos="fade-up" data-aos-delay="220">Buy 24k 999 Pure Digital Gold online at the best prices from the comforts of your home</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white rounded-xl bg-gold-600 hover:bg-gold-700 w-full mb-4 sm:w-auto sm:mb-0" href="#">Join @Value1</a>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-white rounded-xl bg-transparent border-2 border-gold-600 hover:bg-gold-700 w-full sm:w-auto sm:ml-4" href="#features">Learn more</a>
                </div>
              </div>
            </div>

            <div className='max-w-lg w-full overflow-hidden md:px-4 px-2' data-aos='fade-left' data-aos-delay='300'> {/*md:w-2/3 lg:w-7/12 xl:w-5/12*/}
              <RateCard goldRate={goldRate} silverRate={silverRate} />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
