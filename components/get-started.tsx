import Image from "next/image"
import Buy from '@/public/images/Buy infographics.svg';
import Sell from '@/public/images/Sell Infographics.svg'
export default function Features() {
  return (
    <section>
      <div className="max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 sm:max-w-full">
        <div className="py-12 md:py-20 h-5/6">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-6 md:pb-20">
            <h2 className="mb-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">Get Started</h2>
          </div>

          {/* Items */}
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"><Image src={Buy} alt="Buying methods at Value1" className="buy-element" /></div>
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"><Image src={Sell} alt="Selling methods at Value1" className="sell-element"/></div>
          </div>

        </div>
      </div>
    </section>
  )
}
