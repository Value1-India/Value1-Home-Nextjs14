'use client'

import Partners from '@/components/partners'
import Image from 'next/image'
import Amul from '@/public/images/Amul_official_logo.svg';
import FCBarcelona from '@/public/images/FC_Barcelona_(crest).svg.png'
import RealMadridFC from '@/public/images/Real_Madrid_CF.svg'
import NWMutual from '@/public/images/nort-western.svg'
import NYLife from '@/public/images/New_York_Life_logo_PNG2.png'
import ClearingHouse from '@/public/images/The_Clearing_House_(logo).svg'
import Return from '@/public/images/svgs/return.svg'
import Privacy from '@/public/images/svgs/privacy.svg'
import TC from '@/public/images/svgs/t&c.svg'
import Shipping from '@/public/images/svgs/shipping.svg'
import ReturnContent from '@/components/legal/return-policy'
import PrivacyContent from '@/components/legal/privacy-policy'
import TCContent from '@/components/legal/t&c'
import ShippingContent from '@/components/legal/shipping-policy'
import { useState } from 'react';



export default function LegalPage() {
  const [activeSection, setActiveSection] = useState('privacy-policy');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  return (
    <>
      <section className='flex items-center justify-center'>
        <div className='max-w-full lg:max-w-7xl mt-48 px-2 md:px-4 lg:px-8 lg:mx-4 xl:px-12 xl:mx-8'>
          <div className='px-2'>
            <div className='font-extrabold text-xl md:text-2xl lg:text-3xl text-gold-600 text-center'>Legal</div>
          </div>
          <div className='flex flex-col items-center lg:flex-row lg:items-start justify-center gap-16'>
            <div className='pt-10 lg:pt-32 w-full flex items-center lg:items-start justify-center'>
              <div className="flex flex-col md:flex-row lg:flex-col justify-center gap-4">
                <div className={`${activeSection === 'privacy-policy' ? 'bg-black-500 border hover:bg-gold-500 hover:border-white border-gold-500' : 'bg-gold-500 hover:bg-gold-700'} cursor-pointer px-4 py-3 w-full rounded-2xl flex items-center justify-start`} onClick={() => handleSectionChange('privacy-policy')}>
                  <Image src={Privacy} alt='' className="w-6 mr-5" />
                  <span className="text-white text-center font-medium">Privacy Policy</span>
                </div>
                <div className={`${activeSection === 'terms-condition' ? 'bg-black-500 border hover:bg-gold-500 hover:border-white border-gold-500' : 'bg-gold-500 hover:bg-gold-700'} cursor-pointer px-4 py-3 w-full  rounded-2xl flex items-center justify-start`} onClick={() => handleSectionChange('terms-condition')}>
                  <Image src={TC} alt='' className="w-5 mr-5" />
                  <span className="text-white text-center font-medium">Terms & Condition</span>
                </div>
                <div className={`${activeSection === 'shipping-policy' ? 'bg-black-500 border hover:bg-gold-500 hover:border-white border-gold-500' : 'bg-gold-500 hover:bg-gold-700'} cursor-pointer px-4 py-3 w-full  rounded-2xl flex items-center justify-start`} onClick={() => handleSectionChange('shipping-policy')}>
                  <Image src={Shipping} alt='' className="w-6 mr-5" />
                  <span className="text-white text-center font-medium">Shipping Policy</span>
                </div>
                <div className={`${activeSection === 'return-policy' ? 'bg-black-500 border hover:bg-gold-500 hover:border-white border-gold-500' : 'bg-gold-500 hover:bg-gold-700'} cursor-pointer px-4 py-3 w-full  rounded-2xl flex items-center justify-start`} onClick={() => handleSectionChange('return-policy')}>
                  <Image src={Return} alt='' className="w-6 mr-5" />
                  <span className="text-white text-center font-medium">Cancellation & Return Policy</span>
                </div>
              </div>
            </div>
            <div className='mt-12 px-2 text-gray-600'>
            <div id='privacy-policy' className={`${activeSection === 'privacy-policy' ? '' : 'hidden'} mb-16 w-[800px]`}>
              <PrivacyContent />
            </div>
            <div id='terms-condition' className={`${activeSection === 'terms-condition' ? '' : 'hidden'} mb-16 w-[800px]`}>
              <TCContent />
            </div>
            <div id='shipping-policy' className={`${activeSection === 'shipping-policy' ? '' : 'hidden'} mb-16 w-[800px]`}>
              <ShippingContent />
            </div>
            <div id='return-policy' className={`${activeSection === 'return-policy' ? '' : 'hidden'} mb-16 w-[800px]`}>
              <ReturnContent />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
