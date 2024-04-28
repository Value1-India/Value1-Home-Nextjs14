import RateCard from './RateCard/RateCard'
import Image from 'next/image'
import offerBadge from "@/public/images/Gift Box.gif"
import ValueCoin from "@/public/images/svgs/value-coin.svg"
import RightAr from "@/public/images/svgs/right-arrow.svg"
import LeftAr from "@/public/images/svgs/left-arrow.svg"
import { ReactTyped } from 'react-typed'
import { useData } from '@/utils/ApiContextV2';
import Loader from './ui/Loader/Loader'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HeaderCarousal() {
    const { MetalRate } = useData();

    if (!MetalRate) {
        return <div className='max-w-xl mx-auto flex items-center justify-center mt-40'><Loader width='40' textSize='5xl' /></div>
    }

    const data = {
        goldRate: {
            Buy: MetalRate.gBuy,
            Sell: MetalRate.gSell
        },
        silverRate: {
            Buy: MetalRate.sBuy,
            Sell: MetalRate.sSell
        }
    }
    return (
        <Carousel
            axis='horizontal' infiniteLoop emulateTouch={true} showArrows={true} interval={3000} transitionTime={1000} stopOnHover showThumbs={false} showStatus={false} showIndicators={true}
            className='w-full h-auto'
            renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${
                      hasPrev ? "absolute" : "hidden"
                    } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <Image src={LeftAr} alt='Previous Slide' className="w-12 h-12" />
                  </div>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${
                      hasNext ? "absolute" : "hidden"
                    } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <Image src={RightAr} alt='Next Slide' className="w-12 h-12" />
                  </div>
                );
              }}
        >
            <div className='h-max xl:h-[700px] pt-0 md:pt-10'>
                <div className="max-w-full flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap items-center justify-around mx-auto pb-4">

                    <div className='hidden lg:flex flex-col hero-section w-full max-w-2xl md:w-4/6 px-8 mt-8 lg:mt-0'>
                        <h1 className="h1 mb-4 text-center" data-aos="fade-up">Your <span className='text-gold-500'>Gold</span> Savings</h1>
                        <h1 className="h1 mb-4 text-center" data-aos="fade-up">
                            Made
                            <span className='text-gold-500 pl-2'>
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
                        <p className="font-medium text-xl text-gold-600 mb-8" data-aos="fade-up" data-aos-delay="200">World’s 1st Gold Store Co-Owned by its customers like you. </p>
                        <p className="text-xl text-gold-600 mb-8" data-aos="fade-up" data-aos-delay="220">Buy 24k 999 Pure Digital Gold online at the best prices from the comforts of your home</p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex items-center sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-gold-600 rounded-xl bg-white hover:bg-gold-500 hover:text-white w-full mb-4 sm:w-40 lg:w-max text-center sm:mb-0 transition duration-300 ease-in-out" href="https://app.value1.in/auth">Start saving Gold now!</a>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <a className="btn text-white rounded-xl bg-transparent border-2 border-gold-600 hover:bg-white hover:text-gold-500 w-full sm:w-auto sm:ml-4 transition duration-300 ease-in-out" href="#features">Learn more</a>
                            </div>
                        </div>
                    </div>

                    <div id='rate-section' className='max-w-lg w-full md:px-4 px-2 relative' data-aos='fade-left' data-aos-delay='300'> {/*md:w-2/3 lg:w-7/12 xl:w-5/12*/}
                        {/* <RateCard goldRate={data.GoldBuy.toString()} silverRate={data.SilverBuy.toString()} /> */}
                        <RateCard goldRate={data.goldRate} silverRate={data.silverRate} />
                        <div className='absolute -top-16 lg:-top-24 -left-12 lg:-left-24 -rotate-12'>
                            <Image src={offerBadge} alt='offers' width={250} className='w-40 lg:w-64' style={{ zIndex: 9999 }} unoptimized />
                        </div>
                        <div className='absolute -bottom-5 right-0 rotate-12'>
                            <Image src={ValueCoin} alt='offers' width={250} className='w-16 lg:w-24 animate-wobble-right' />
                        </div>
                    </div>
                </div>
            </div>
            <></>
            {/* <div className='flex items-center justify-center'>
                <img src="images/logo-big.png" className='w-96' />
                <p className="legend">Legend 2</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src="images/logo-big.png" className='w-96' />
                <p className="legend">Legend 2</p>
            </div> */}
        </Carousel>
    )
}