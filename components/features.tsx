import MiniCard from "./ui/miniCard"
import Coin from '@/public/images/svgs/coin.svg'
import Ownership from '@/public/images/svgs/ownership.svg'
import Access247 from '@/public/images/svgs/24-7-access.svg'
import Support from '@/public/images/svgs/24-hrs-support.svg'
import AuditCheck from '@/public/images/svgs/audit-check.svg'
import Bank from '@/public/images/svgs/bank.svg'
import Piggy from '@/public/images/svgs/piggy-bank.svg'
import DollarRuppee from '@/public/images/svgs/dollar-rupee-ex.svg'
import Liquidity from '@/public/images/svgs/liquidity.svg'
import Locker from '@/public/images/svgs/locker.svg'
import Payment from '@/public/images/svgs/payment.svg'
import Safe from '@/public/images/svgs/safe.svg'
import TaxFree from '@/public/images/svgs/tax-free.svg'
import Trade from '@/public/images/svgs/trade-graph.svg'
import EaseUse from '@/public/images/svgs/ease-use.svg'


export default function Features() {
  return (
    <section>
      <div className="max-w-8xl px-4 sm:px-6">
        <div className="py-12 md:py-20 h-5/6">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4 font-bold text-7xl ">Why Our Customers Love <span className="text-gold-500">Value1</span></h2>
          </div>

          {/* Items */}
          <div className="flex flex-row items-center justify-center ">
            <div className="flex flex-col items-center justify-center mr-6 ">
              <MiniCard cardTitle="Low Cost" icon={Coin} description="Take advantage of some of the industry's lowest premiums" />
              <MiniCard cardTitle="IRA Eligible" icon={Piggy} description="Take advantage of a low-cost, simple IRA solution" />
              <MiniCard cardTitle="Dollar Cost Average" icon={DollarRuppee} description="Automate a regular investment similar to a corporate 401K plan" />
              <MiniCard cardTitle="24/7 Access" icon={Access247} description="Buy, sell and trade, even when the markets are closed" />
            </div>
            <div className="flex flex-col items-center justify-center mr-6 ">
              {/* <MiniCard cardTitle="Low Cost" icon={Coin} description="Take advantage of some of the industry's lowest premiums" /> */}
              <MiniCard cardTitle="Convenient Payments" icon={Payment} description="Pay by ACH, wire, check, credit card, PayPal, and crypto" />
              <MiniCard cardTitle="Physically Secure Locations" icon={Locker} description="Enjoy peace of mind knowing that your metal is stored in highly secure vaults" />
              <MiniCard cardTitle="Trusted Banking" icon={Bank} description="Founded by top industry leaders with 60+ years of experience" />
            </div>
            <div className="flex flex-col items-center justify-center mr-6 ">
              <MiniCard cardTitle="Direct Ownership" icon={Ownership} description="Have direct title to precious metals, unlike some ETFs" />
              <MiniCard cardTitle="Ease of Use" icon={EaseUse} description="Own precious metals in minutes" />
              <MiniCard cardTitle="Trade & Speculate" icon={Trade} description="Buy and sell positions in minutes, take advantage of market movements" />
              <MiniCard cardTitle="No Sales Tax" icon={TaxFree} description="Save on sales tax by buying vaulted metal" />
            </div>
            <div className="flex flex-col items-center justify-center mr-4 ">
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
