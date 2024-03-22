export const metadata = {
    title: 'Value1 - World`s Most Inclusive Enterprises',
    description: '',
  }

 import Partners from '@/components/partners'
 import Image from 'next/image'
 import Amul from '@/public/images/Amul_official_logo.svg';
 import FCBarcelona from '@/public/images/FC_Barcelona_(crest).svg.png'
 import RealMadridFC from '@/public/images/Real_Madrid_CF.svg'
 import NWMutual from '@/public/images/nort-western.svg'
 import NYLife from '@/public/images/New_York_Life_logo_PNG2.png'
 import ClearingHouse from '@/public/images/The_Clearing_House_(logo).svg'
 import REI from '@/public/images/rei.svg'
 import AP from '@/public/images/ap.svg'
 import Mondragon from '@/public/images/Logo_-_Mondragon_Corp.jpg'
 import Publix from '@/public/images/publix-super-markets4806.jpg'
 import JLP from '@/public/images/jlp-logo.svg'

 import bgPattern from '@/public/images/pattern3.png'
 import bgPattern2 from '@/public/images/pattern-4@2x.png'
 import Brand from '@/public/images/logo-big.png'

  
  export default function About() {
    return (
      <>
          <section className='flex items-center justify-center'>
            <div className='max-w-full lg:max-w-6xl mt-48 px-2 md:px-4 lg:px-8 lg:mx-4 xl:px-12 xl:mx-8 relative'>
                <Image src={bgPattern} alt='' className='-z-100 absolute w-96 rotate-45 -left-56 top-0 xl:top-72 xl:left-0' />
                <div className='px-2 xl:mt-12'>
                    <div className='font-bold font-poppins text-2xl md:text-4xl lg:text-7xl text-gold-500 text-center'>"WE INNOVATE FOR PEOPLE TO SAVE GOLD"</div>
                    <div className='flex items-center justify-center my-10'>
                        <Image src={Brand} alt='' height={200} width={200} />
                    </div>
                    <div className='font-normal text-sm md:text-xl lg:text-3xl text-center mt-4'>India's 1st omni channel gold store co-owned by customers & workforce!I</div>
                I</div>

                <div className='pt-6 xl:mt-20 text-lg'> {/* about us*/}
                    <div className='flex items-center justify-center'>
                        <h2 className='font-bold text-xl md:text-2xl xl:text-4xl text-gold-600'>About Us</h2>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <div>
                            <div className='font-bold text-gold-500 text-center md:text-lg xl:text-xl '>About Value1 – Pioneering Co-Ownership in Gold</div>
                            <div className='mt-2 text-left font-normal px-2'>
                                Welcome to Value1, where we introduce a revolutionary concept in gold ownership. We are not just a gold store; we are a community-driven platform that allows our customers to become shareholders of Value1. Through our innovative co-owning model, we value your association with us and reward your loyalty with an opportunity to become a co-owner.
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <div>
                            <div className='font-bold text-gold-500 text-center md:text-lg '> Our Vision </div>
                            <div className='mt-2 text-left font-normal px-2'>
                                At Value1, we are on a mission to redefine the relationship between customers and business houses. We envision a future where our customers are not just patrons but valued stakeholders, shaping the direction of our organization and sharing in its success.
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <div>
                            <div className='font-bold text-gold-500 text-center md:text-lg'>How Co-Ownership Works?</div>
                            <ul className='list-disc list-inside py-2 px-3'>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Buy More Gold:</span>
                                    <p className='text-justify mt-1'>&emsp; Every purchase you make with us contributes to your ownership journey. Buy more gold to increase your stake in Value1. </p>
                                </li>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Earn Loyalty Points:</span>
                                    <p className='text-justify mt-1'>&emsp; As a token of appreciation, we issue loyalty points for each purchase. These points signify your commitment to our community.</p>
                                </li>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Redeem for Co-Ownership:</span>
                                    <p className='text-justify mt-1'>&emsp; Accumulate loyalty points to redeem stock options, transforming yourself from a valued customer into a co-owner of Value1.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-4 relative overflow-hidden'>
                        <div className='max-w-5xl'>
                            <div className='font-bold text-gold-500 text-center md:text-lg'>Why Co-Own With Us?</div>
                            <Image src={bgPattern} alt='' className='-z-100 absolute w-[500px] -rotate-45 top-0 -right-96' />
                            <ul className='list-disc list-inside py-2 px-3'>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Customer-Centric Innovation:</span>
                                    <p className='text-justify mt-1'>&emsp; Our co-ownership model is a testament to our commitment to customer satisfaction. We value your loyalty and believe in sharing the success of our organization with you.</p>
                                </li>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Transparent and Rewarding:</span>
                                    <p className='text-justify mt-1'>&emsp; Transparency is our foundation. As you accumulate loyalty points, you have a clear path to co-ownership, making the process both transparent and rewarding.</p>

                                </li>
                                <li className='font-normal text-left mb-2'>
                                    <span className='font-bold text-gold-800'>Fostering Growth Through Relationships:</span>
                                    <p className='text-justify mt-1'>&emsp; Our commitment is to empower all our customers, ensuring that they grow alongside us. This growth is solely based on our shared relationship and doesn’t require additional investments for asset creation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <div>
                            <div className='font-bold text-gold-500 text-center md:text-lg '>Secure Your Stake in Success</div>
                            <div className='mt-2 text-center font-normal px-2'>
                                Rest assured, your co-ownership stake is backed by our dedication to security and excellence.
                            </div>
                            <div className='mt-2 text-center font-normal px-2'>
                            Your journey from customer to co-owner is a secure and exciting progression.
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <div>
                            <div className='font-bold text-gold-500 text-center md:text-lg'>Join the Co-Ownership Revolution</div>
                            <div className='mt-2 text-center font-normal px-2'>
                                Whether you’re a frequent buyer or a new customer, Value1 invites you to join the co-ownership revolution. 
                            </div>
                            <div className='mt-2 text-center font-normal px-2'>
                            Experience a new era in financial relationships where your loyalty is not just valued but rewarded with a stake in our collective success.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-4 lg:pt-16 relative'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-gold-500 text-xl lg:text-7xl'>Inspired By</h1>
                        <p className='mt-2 font-bold text-center text-gray-500'>Co-Owning is not new to the world, in fact it’s the oldest and most successful model</p>
                    </div>
                    <Image src={bgPattern} alt='' style={{zIndex:'-9999'}} className='absolute w-[800px] rotate-45 -top-0 -left-[500px]' />
                    <div className='flex flex-wrap flex-row items-center justify-center py-8'>
                        <div className='flex flex-wrap flex-row items-center justify-evenly gap-4'>
                            {[
                                { src: JLP, alt: 'John Lewis Partnership', text: 'John Lewis Partnership - Co-Owned By 80,000 Employees' },
                                { src: Amul, alt: 'Amul - Coop & Co-Owned by 3.6million Farmers', text: 'Amul - Coop & Co-Owned by 3.6million Farmers' },
                                { src: FCBarcelona, alt: 'The FC Barcelona - Owned by Club Members', text: 'The FC Barcelona - Owned by Club Members' },
                                { src: RealMadridFC, alt: 'Real Madrid CF - Owned by Fans', text: 'Real Madrid CF - Owned by Fans' },
                                { src: NWMutual, alt: 'Northwestern Mutual - Owned by Policyholders', text: 'Northwestern Mutual - Owned by Policyholders' },
                                { src: NYLife, alt: 'New York Life - Owned by Policyholders', text: 'New York Life - Owned by Policyholders' },
                                { src: ClearingHouse, alt: 'TheClearingHouse - Owned by Commercial Banks', text: 'TheClearingHouse - Owned by Commercial Banks' },
                                { src: REI, alt: 'REI - Owned by Members', text: 'REI - Owned by Members' },
                                { src: AP, alt: 'Associated Press - Owned by Members', text: 'Associated Press - Owned by Members' },
                                { src: Mondragon, alt: 'Mondragón - Owned by Workers', text: 'Mondragón - Owned by Workers' },
                                { src: Publix, alt: 'Publix Super Markets - Owned by Workers', text: 'Publix Super Markets - Owned by Workers' }
                            ].map((item, index) => (
                                <div key={index} className='p-2 w-64 h-40 bg-white rounded-3xl flex flex-col justify-between'>
                                    <figure className='flex flex-col items-center justify-center h-full'>
                                        <div className='flex items-center justify-center h-3/4'>
                                            <Image src={item.src} alt={item.alt} width={200} height={250} className='max-w-full h-full object-contain' />
                                        </div>
                                        <figcaption className='text-gold-500 font-semibold text-center pt-3 text-sm'>{item.text}</figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='pt-4 lg:pt-16 relative'>
                    <Image src={bgPattern} alt='' style={{zIndex:'-9999'}} className='absolute w-[800px] -rotate-45 -top-0 -right-[500px]' />
                    <Partners />
                </div>
            </div>
          </section>
      </>
    )
  }
  