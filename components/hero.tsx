import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import RateCard from './RateCard/RateCard'
import Image from 'next/image'
import heroFg from '@/public/images/herosection.png'

export default function Hero() {

  var goldRate = '6748.79'
  var silverRate = '75.26'

  return (
    <section>
      <div className="max-w-full mx-20 px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 ">

          {/* Section header */}
          <div className="max-w-full flex flex-row items-center justify-around mx-auto text-center pb-12 md:pb-16">
            <div className='hero-section w-3/6'>
              {/* <div>
                <Image src={heroFg} width={2500} alt='' />
              </div> */}
              <h1 className="h1 mb-4" data-aos="fade-up"><span className='text-gold-500'>Gold</span> Savings</h1>
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="600">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
            <div className='w-2/6' data-aos='fade-left' data-aos-delay='300'>
              <RateCard goldRate={goldRate} silverRate={silverRate} />
            </div>

          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
