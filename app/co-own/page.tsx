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
import BenefitCard from '@/components/ui/benefitCard';
import { GoldHistoryGraph } from '@/components/GoldHistoryGraph';
import VideoBlock from '@/components/VideoBlock';
import FAQmini from '@/components/mini-faq';

export default function CoOwnPage() {
  return (
    <>
      <section className='max-w-full mx-auto md:mt-20'>
        <div className='flex items-center justify-center'>
          <div className='h-screen w-full flex items-center justify-center gap-10 relative px-3'>
            <video src="/coown-bg.mp4" autoPlay loop muted id='video-overlay' className='h-full w-auto object-cover lg:w-full'></video>
            <div className='flex flex-col items-center justify-center text-center gap-10'>
              <div className='font-semibold text-3xl md:font-bold md:text-5xl'>Introducing</div>
              <Image src={Value1} alt="value1 logo" height={150} width={150} className='w-44 md:w-64' />
              <div className='font-semibold text-2xl md:text-4xl'>Customer Co-Owned Gold Store</div>
              <div className='px-4 text-sm font-medium md:text-xl'>24K 99.99% pure Digital gold straight to your pocket</div>
              <a href='#' className='px-5 py-3 md:text-xl rounded-full bg-white border border-gold-500 text-gold-500'>Join Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto mt-14'>
        <div className='flex flex-col items-center justify-center text-center px-3'>
          <div className='font-bold text-3xl mb-10 md:text-5xl lg:7xl'>Become a <span className='text-gold-500'>Co-Owner</span> and Earn</div>
          <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4'>
            <Card icon={Member} cardTitle='Register as member (Free)' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={Gold} cardTitle='Purchase gold & silver' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={GoldCoin} cardTitle='Earn gold rewards' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={ValueCoins} cardTitle='Earn value coins as loyalty points' />
            <div className='w-14 rotate-90 lg:rotate-0'><Image src={Arrow} alt='Direction Arrow' width={150} /></div>
            <Card icon={Redeem} cardTitle='Redeem value coins to your allocated stock option' />
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto mt-14'>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-10 font-bold text-3xl'>Member <span className='text-gold-500'>Benefits</span></div>
          <div className='max-w-sm md:max-w-xl lg:max-w-3xl flex flex-wrap items-center justify-center gap-3 px-2 '>
            <BenefitCard icon={Gold} cardTitle='Benefit 1' />
            <BenefitCard icon={Gold} cardTitle='Benefit 2' />
            <BenefitCard icon={Gold} cardTitle='Benefit 3' />
            <BenefitCard icon={Gold} cardTitle='Benefit 4' />
            <BenefitCard icon={Gold} cardTitle='Benefit 5' />
            <BenefitCard icon={Gold} cardTitle='Benefit 6' />
            <BenefitCard icon={Gold} cardTitle='Benefit 7' />
            <BenefitCard icon={Gold} cardTitle='Benefit 8' />
          </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto px-3 text-center mt-14'>
        <div className='text-3xl font-bold mb-10'>History of <span className='text-gold-500'>Gold</span> in India</div>
        <div className='h-72 lg:h-full w-full flex items-center justify-center px-3'>
          <GoldHistoryGraph />
        </div>
      </section>

      <section className='max-w-sm md:max-w-6xl mx-auto mt-14'>
        <div className='text-center flex flex-col items-center justify-center'>
          <div className='text-3xl font-bold mb-10'>What Our <span className='text-gold-500'>Members</span> Says</div>
          <div className='px-3 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-5'>
            <VideoBlock embedId='8Z3UOmmeTXw' />
            <VideoBlock embedId='8Z3UOmmeTXw' />
            <VideoBlock embedId='8Z3UOmmeTXw' />
            <VideoBlock embedId='8Z3UOmmeTXw' />
          </div>
        </div>

      </section>

      <section className='max-w-5xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-10 px-3'>
          <div className='text-3xl font-semibold text-center'>Become The Co-Owner of <span className='text-gold-500'>Value1</span></div>
          <a href='#' className='px-5 py-3 md:text-xl rounded-full bg-white border border-gold-500 text-gold-500'>Join Now</a>
        </div>
      </section>

      <section>
        <FAQmini />
      </section>
    </>
  )
}
