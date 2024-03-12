import Image from "next/image"
import Buy from '@/public/images/Buy infographics.svg';
import Sell from '@/public/images/Sell Infographics.svg'
export default function Features() {
  return (
    <section>
      <div className="max-w-8xl px-4">
        <div className="py-12 md:py-20 h-5/6">

          {/* Section header */}
          <div className="w-full mx-auto text-center pb-6 md:pb-20">
            <h2 className="mb-4 font-bold text-4xl md:text-7xl ">Get Started</h2>
          </div>

          {/* Items */}
          <div className="flex flex-col items-center justify-center md:flex-row">
           <div><Image src={Buy} alt="Buying methods at Value1" className="buy-element" /></div>
           <div><Image src={Sell} alt="Selling methods at Value1" className="sell-element"/></div>
          </div>

        </div>
      </div>
    </section>
  )
}
