import MiniCard from "./ui/miniCard"
import Coin from '@/public/images/svgs/coin.svg'
import Ownership from '@/public/images/svgs/ownership.svg'
import Access247 from '@/public/images/svgs/24-7-access.svg'
import Support from '@/public/images/svgs/24-hrs-support.svg'
import AuditCheck from '@/public/images/svgs/audit-check.svg'
import Bank from '@/public/images/svgs/bank.svg'
import GoldBars from '@/public/images/svgs/gold-bars2.svg'
import Refinery from '@/public/images/svgs/refinery.svg'
import Liquidity from '@/public/images/svgs/liquidity.svg'
import Locker from '@/public/images/svgs/locker.svg'
import Payment from '@/public/images/svgs/payment.svg'
import Safe from '@/public/images/svgs/safe.svg'
import Award from '@/public/images/svgs/award.svg'
import Billion from '@/public/images/svgs/billion-dollar.svg'
import EaseUse from '@/public/images/svgs/ease-use.svg'
import Share from '@/public/images/svgs/share.svg'


export default function Features() {
  return (
    <section id="features">
      <div className="w-full px-4">
        <div className="py-12 h-5/6">

          {/* Section header */}
          <div className="max-w-full mx-auto text-center pb-8 md:pb-20">
            <h2 className="md:mb-4 font-bold text-2xl md:text-3xl lg:text-7xl ">Why Our Customers Love <span className="text-gold-500">Value1</span></h2>
          </div>

          {/* Items */}
          <div className="flex flex-col lg:flex-row items-center justify-center md:px-12">
            <div className="flex flex-wrap md:flex-nowrap lg:flex-col items-center justify-evenly md:gap-2 md:justify-between lg:justify-center md:mr-6">
              <MiniCard cardTitle="Low Cost" icon={Coin} description="Take advantage of some of the industry's lowest premiums" />
              <MiniCard cardTitle="Extra Gold for your GST" icon={GoldBars} description="Celebrate gold ownership with value1, we pay your GST, you save more" />
              <MiniCard cardTitle="Refining to Retail" icon={Refinery} description="Augmont is India’s largest fully integrated Gold player with a strong presence from refining to retail" />
              <MiniCard cardTitle="24/7 Access" icon={Access247} description="Buy, sell and trade, even when the markets are closed" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-col items-center justify-evenly md:gap-2 md:justify-between lg:justify-center md:mr-6">
              <MiniCard cardTitle="Convenient Payments" icon={Payment} description="Pay by ACH, wire, check, credit card, PayPal, and crypto" />
              <MiniCard cardTitle="Ease of Use" icon={EaseUse} description="Own precious metals in minutes" />
              <MiniCard cardTitle="Government Accredited" icon={Bank} description="Augmont is NABL and BIS accredited and a member of India Good Delivery standard on NSE, BSE and MCX" />
              <MiniCard cardTitle="$3Bn Revenues" icon={Billion} description="Augmont is one of the top 150 unlisted companies in India – Dun & Bradstreet" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-col items-center justify-evenly md:gap-2 md:justify-between lg:justify-center md:mr-6">
              <MiniCard cardTitle="Direct Ownership" icon={Ownership} description="Have direct title to precious metals, unlike some ETFs" />
              <MiniCard cardTitle="Physically Secure Locations" icon={Locker} description="Enjoy peace of mind knowing that your metal is stored in highly secure vaults" />
              <MiniCard cardTitle="Multi Award Winner" icon={Award} description="2017 to 2021 – Best Gold Seller in India awarded year on year by Bullion Federation Global Convention" />
              <MiniCard cardTitle="Shareholding" icon={Share} description="Save in gold and co-own the Value1 at no extra cost, India’s 1st customer co-owned gold store" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-col items-center justify-evenly md:gap-2 md:justify-between lg:justify-center md:mr-6">
              <MiniCard cardTitle="Live Support" icon={Support} description="Speak or chat with a representative 5 days a week" />
              <MiniCard cardTitle="High Liquidity" icon={Liquidity} description="Cash out and receive funds on the same or next business day" />
              <MiniCard cardTitle="Regularly Audited" icon={AuditCheck} description="Metals undergo regular internal and third party audits" />
              <MiniCard cardTitle="Fully Insured" icon={Safe} description="Rest assured knowing that your metal is fully insured by Lloyd’s of London and RCM" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
