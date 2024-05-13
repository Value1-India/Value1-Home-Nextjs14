export const metadata = {
  title: 'Value1 - World`s Most Inclusive Enterprises',
  description: '',
}

import Image from 'next/image'
import Value1 from '@/public/images/logo-big.png';
import Arrow from '@/public/images/svgs/right-arrow.svg'
import Card from '@/components/ui/Card';
import Member from '@/public/images/svgs/member.svg'
import ValueCoins from '@/public/images/svgs/value-coin.svg'
import GoldCoin from '@/public/images/svgs/gold-coins.svg'
import Gold from '@/public/images/svgs/gold-bars.svg'
import Redeem from '@/public/images/svgs/withdraw.svg'
import Bgimage from '@/public/images/coowner-bg.svg'
import BenefitCard from '@/components/ui/benefitCard';
import Owner from "@/public/images/svgs/owner.svg"
import Extra from "@/public/images/svgs/extra.svg"
import QualityStars from "@/public/images/svgs/quality-stars.svg"
import Community from "@/public/images/svgs/community.svg"
import Rewards from "@/public/images/svgs/rewards.svg"
import Connection from "@/public/images/svgs/connection.svg"
import PremiumMetals from "@/public/images/svgs/premium-metals.svg"
import Brands from "@/public/images/svgs/brands.svg"
import Person from "@/public/images/Co-own person.png"
import { GoldHistoryGraph } from '@/components/GoldHistoryGraph';
import { TechHistory } from '@/components/TechHistory';
import VideoBlock from '@/components/VideoBlock';
import FAQmini from '@/components/mini-faq';

export default function CoOwnPage() {
  return (
    <>
      <section className='max-w-full mx-auto md:mt-20'>
        <div className='flex items-center justify-center'>
          <div className='h-screen w-full flex items-center justify-center gap-10 relative px-3'>
            <video src="/coown-bg.mp4" autoPlay playsInline loop muted id='video-overlay' className='h-full w-auto object-cover lg:w-full'></video>
            <div className='flex flex-col items-center justify-center text-center gap-2 text-white'>
              {/* <div className='font-semibold text-3xl md:font-bold md:text-5xl'></div> */}
              <Image src={Value1} alt="value1 logo" height={150} width={150} className='w-44 md:w-64' />
              <div className='font-semibold text-2xl md:text-5xl'>Introducing Co-Ownership, a</div>
              <div className='font-semibold text-2xl md:text-5xl'>new way to own <span className='text-gold-500'>gold</span> store.</div>
              <div className='px-4 text-sm font-medium md:text-xl mt-10'>Buy gold & become a <span className='text-gold-500'>shareholder</span>, no extra Investment required.</div>
              <div className='px-4 text-sm font-medium md:text-xl'>Secure your stake in the brilliance of gold today!</div>
              <a href='https://app.value1.in' className='px-5 py-3 md:text-xl rounded-full bg-white border border-gold-500 text-gold-500 mt-10'>Co-Own Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto mt-14 md:mt-24'>
        <div className='flex flex-col items-center justify-center text-center px-3'>
          <div className='font-bold text-3xl mb-16 md:text-5xl'>Become a <span className='text-gold-500'>Co-Owner</span></div>
          <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4'>
            <Card icon={Member} cardTitle='Register as member (Free)' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={Gold} cardTitle='Purchase gold & silver' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={GoldCoin} cardTitle='Earn gold rewards' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={ValueCoins} cardTitle='Earn value coins as loyalty points' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={Redeem} cardTitle='Redeem value coins and become a shareholder' />
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto mt-14 md:mt-32'>
        <div className='flex flex-col items-center justify-center'>
          <div className='font-bold text-3xl md:text-5xl text-center'>Celebrate the Benefits of <span className='text-gold-500'>Co-Ownership</span></div>
          <div className='mb-5 font-semibold text-xl text-center'>As a co-owner of our <span className='text-gold-500'>gold</span> store, you'll shop with unprecedented advantages</div>

          <div className='max-w-sm md:max-w-sm lg:max-w-5xl mx-auto flex flex-wrap items-center justify-center mb-10'>
              <Image src={Person} alt={'Co-own'} width={700} />
          </div>
          <div className='max-w-sm md:max-w-sm lg:max-w-5xl mx-auto flex flex-col items-center justify-center'>
            <BenefitCard icon={Gold} description='Embrace the opportunity to co-own the Value1 gold store without additional investment' />
            <BenefitCard icon={Gold} description='Enjoy up to 3% extra gold on every gold purchase. (This includes covering your GST, ensuring you receive the full amount of gold for the price paid, accompanied by a GST invoice.)' />
            <BenefitCard icon={Gold} description="Explore over 100+ exclusive designs from India's top jewellery manufacturers, offering the lowest making cost with highest quality guaranteed." />
            <BenefitCard icon={Gold} description="Gain direct access to buy premium precious metals (gold, silver, and diamond) sourced directly from refineries. " />
            <BenefitCard icon={Gold} description="Access our gold reward platform, guaranteeing 24K gold rewards for each transaction, which includes 400+ top brands, travel, ticketing, and other exclusive services. Opportunity to save up to 40% from your expenses as gold, as a reward" />
            <BenefitCard icon={Gold} description="Join our exclusive community" />
            <BenefitCard icon={Gold} description="Connect with handpicked value professionals for trusted services such as healthcare, legal, and financial consultancy" />
            <BenefitCard icon={Gold} description="Experience top-tier quality with our carefully selected value brands" />
            <BenefitCard icon={Gold} description="Contribute to the novel cause of co-owning and earn extra value coins by spreading the word" />
            <BenefitCard icon={Gold} description="Opportunity to set up the city chapter and franchise in your location" />
          </div>
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl mx-auto px-3 text-center mt-14 md:mt-24'>
        <div className='text-3xl font-bold md:text-5xl'>Ride the <span className='text-gold-500'>Wave of Gold</span></div>
        <div className='text-xl text-white font-bold mb-20'>Join Us on Our Journey of Growth and Prosperity</div>

        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 h-max'>
          <div className='flex flex-col items-center justify-between md:w-[600px] h-96 md:h-[400px]'>
            <div className='text-2xl font-semibold mb-10'>India Witnesses an Astounding Growth of Gold, Over <span className='text-gold-500'>1,17,952%</span>, from 1964 to 2024.</div>
            <div className='h-48 lg:h-64 w-auto flex items-center justify-center px-3'>
              <GoldHistoryGraph />
            </div>
          </div>
          <div className='flex flex-col items-center justify-between md:w-[600px] h-96 md:h-[400px]'>
            <div className='text-2xl font-semibold mb-10'>Be part of the next wave of spectacular growth. Join us in <span className='text-gold-500'>co-owning</span> a piece of the future with our <span className='text-gold-500'>gold store</span>.</div>
            <div className='h-48 lg:h-64 w-auto flex items-center justify-center px-3'>
              <TechHistory />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-sm md:max-w-7xl mx-auto mt-14 md:mt-24'>
        <div className='text-center flex flex-col items-center justify-center'>
          <div className='text-3xl font-bold mb-10 md:text-5xl'>What Our <span className='text-gold-500'>Members</span> Says</div>
          <div className='px-3 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-5'>
            <VideoBlock embedId='uLGRivuMRtA' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='30OA92WUYB4' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='04qPBSNDepw' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='vTRCk8sDL3c' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='ywDLpeUZVOE' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='X9mFpaVA7rw' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='JkVtYxBdugU' className='w-80 h-48 md:w-96 px-2' description="" />
            <VideoBlock embedId='iUxbLJ-1zhg' className='w-80 h-48 md:w-96 px-2' description="" />
          </div>
        </div>
      </section>

      <section className='max-w-5xl mx-auto mt-14 md:mt-24'>
        <div className='flex flex-col items-center justify-center gap-10 px-3'>
          <div className='text-3xl font-semibold text-center mb-10 md:text-5xl'>Become The Co-Owner of <span className='text-gold-500'>Value1</span></div>
          <div className='relative w-full flex items-center justify-center'>
            <Image src={Bgimage} alt='bg' width={200} className='absolute -top-10 md:w-64 md:-top-12 ' style={{zIndex:"-99"}} />
            <a href='https://app.value1.in' className='w-max px-4 py-2 md:px-5 md:py-3 md:text-xl rounded-full bg-white border border-gold-500 text-gold-500 hover:scale-95'>Join Now</a>
          </div>
        </div>
      </section>

      <section className='mt-20'>
        <FAQmini />
      </section>
    </>
  )
}
