import Image from "next/image"
import Buy from '@/public/images/Chart Value1.png';
import Sell from '@/public/images/Chart Value2.png'
export default function Features() {
  return (
    <section data-aos='fade-up' data-aos-delay='200'>
      <div className="max-w-8xl px-4">
        <div className="py-12 h-5/6">

          {/* Section header */}
          <div className="w-full mx-auto text-center pb-6">
            <h2 className="mb-4 font-bold text-2xl md:text-3xl lg:text-7xl ">Start investing at <span className="text-gold-500 px-3 md:px-0">Value1</span> </h2>
          </div>

          {/* Items */}
          <div className="flex flex-col items-center justify-center gap-6 px-2 md:flex-row">
            <div className="text-center font-bold text-xl text-gold-800" data-aos='fade-in' data-aos-delay='300'>
              <h3>Buying @Value1</h3>
              <Image src={Buy} width={450} height={450} alt="Buying methods at Value1" className="p-4 max-w-xs md:max-w-full" />
            </div>
            <div className="text-center font-bold text-xl text-gold-800" data-aos='fade-in' data-aos-delay='300'>
              <h3>Selling @Value1</h3>
              <Image src={Sell} width={450} height={450} alt="Selling methods at Value1" className="p-4 max-w-xs md:max-w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
