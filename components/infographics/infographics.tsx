
import Pointer from '@/public/images/svgs/pointer.svg'
import Image from 'next/image'
import User from '@/public/images/svgs/add-user.svg'
import GoldBar from '@/public/images/svgs/gold-bars.svg'
import Buy from '@/public/images/svgs/buy.svg'
import Offers from '@/public/images/svgs/offers.svg'
import Verified from '@/public/images/svgs/verified.svg'
import Insured from '@/public/images/svgs/locker-colored.svg'
import Sell from '@/public/images/svgs/sell.svg'
import Redeem from '@/public/images/svgs/redeem.svg'
import Jewellery from '@/public/images/svgs/jewellery.svg'
import GoldCoins from '@/public/images/svgs/gold-coins.svg'
import Withdraw from '@/public/images/svgs/withdraw.svg'
import Certificate from '@/public/images/svgs/certificate.svg'
import ValueCoin from '@/public/images/svgs/value-coin.svg'
import Member from '@/public/images/svgs/member.svg'

const Infographics = () => {

    return (
        <section className='flex items-center justify-center'>

            <div className='w-full max-w-sm lg:max-w-lg xl:max-w-2xl relative'>
                <div className='flex group flex-wrap items-center justify-center bg-white py-4 px-5 rounded-xl pb-20 relative overflow-x-visible' data-aos='fade-zoom-in' data-aos-delay='500'>
                    <div className='font-bold text-3xl text-gold-600 text-center'>How It Works</div>
                    <div className='font-normal text-black-700 text-sm pt-2 text-center'>Value1 facilitates you to invest in gold/silver and store it in safe vault from your home.</div>
                    <div className='font-normal text-black-700 text-sm pt-2 text-center'>Value1 customers have the unique option of Buying, Selling, Gifting, Leasing and the ability to Transact 24/7.</div>
                    <div className='absolute z-10 bottom-4 left-5 xl:left-[315px] w-10 group-hover:animate-ping'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                    <div className='absolute z-10 bg-transparent h-20 -bottom-[70px] left-[38px] xl:left-[333px] border-2 border-gold-500 border-dashed rounded-full'></div>
                </div>
                
                <div className='infographic-section mt-16 xl:pl-[295px] transition-all'>
                    <div className='p-1 step1 relative'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[26px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-14 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Create An Account</div>
                            <div className='font-light text-white text-xs w-28 text-center'>This is free and only takes a few minutes.</div>
                        </div>
                    </div>
                    <div className='p-1 step2 relative'>
                        <div className='absolute z-10 bg-transparent h-20 -top-[52px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[45px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-8 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 -top-3 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Member} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Become a co-owning Member</div>
                            <div className='font-light text-white text-xs w-28 text-center'> Complete KYC & receive your stock option through the grant letter.</div>
                        </div>
                    </div>
                    <div className='p-1 step2 relative'>
                        <div className='absolute z-10 bg-transparent h-32 -top-[96px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[45px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-8 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 -top-3 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={GoldBar} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Gold / Silver</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Choose your Precious Metal</div>
                        </div>
                    </div>
                    <div className='p-1 step3 relative'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[61px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-20 -top-[38px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-12 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-3 xl:top-0 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Buy} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Buy</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Its Easy, Safe and Secured</div>
                        </div>
                    </div>
                    <div className='p-1 step4 mt-4 relative'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[61px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-20 -top-[38px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-12 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-3 xl:top-0 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Offers} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Offers</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Receive extra Gold & Value Coins</div>
                        </div>
                    </div>
                    <div className='p-1 step5 relative flex flex-col '>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-[78px] left-[57px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-20 -top-[24px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-16 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-6 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Insured} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Insured & Secured</div>
                            <div className='font-light text-white text-xs w-28 text-center'>In Secured Vault (SEBI Certified)</div>
                        </div>
                        <div className='l1-step-1 ml-24 mt-10 relative md:static '>
                            <div className='md:hidden absolute z-10 bg-transparent h-14 -top-[10px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='hidden md:block absolute z-10 bg-transparent w-16 xl:w-20 top-[80px] xl:top-[83px] left-[230px] xl:-left-16 border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='xl:hidden absolute z-10 top-[61px] left-5 md:left-[298px] w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                            <div className='relative step-container left-16 md:left-64 xl:-left-[310px] top-0 xl:-top-[118px] md:-top-[135px] z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                <div>
                                    <Image src={Verified} alt='Add User' className='w-12 px-1' />
                                </div>
                                <div className='font-bold text-sm text-center'>Audited & Verified</div>
                                <div className='font-light text-white text-xs w-28 text-center'>Weekly verified and audited by independent trustee</div>
                            </div>
                        </div>
                    </div>
                    <div className='p-1 step6 relative mt-20'>
                        <div className='absolute z-10 bg-transparent h-72 md:h-40 -top-[245px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-8 md:-top-20 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='l1-step1 relative'>
                            <div className='absolute z-10 bg-transparent w-16 xl:w-20 top-12 md:-top-[65px] left-[63px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='absolute z-10 bg-transparent h-36 xl:h-0 xl:w-20 -top-6 md:-top-[130px] xl:-top-[65px] left-[135px] xl:-left-[68px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='l2-step1 relative left-[98px]'>
                                <div className='child1'>
                                    <div className='xl:hidden absolute z-10 -top-16 md:-top-[170px] left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                    <div className='relative step-container left-16 xl:-left-72 -top-20 md:-top-52 xl:-top-28 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                        <div>
                                            <Image src={Sell} alt='Add User' className='w-16 px-1' />
                                        </div>
                                        <div className='font-bold text-sm text-center'>Sell</div>
                                        <div className='font-light text-white text-xs w-28 text-center'>Sell the Gold/Silver at Market Price</div>
                                    </div>
                                </div>
                                <div className='child2'>
                                    <div className='xl:hidden absolute z-10 top-[120px] md:top-[15px] left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                    <div className='relative step-container left-0 -top-10 md:-top-32 xl:-top-[215px] z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                        <div>
                                            <Image src={Redeem} alt='Add User' className='w-16 px-1' />
                                        </div>
                                        <div className='font-bold text-sm text-center'>Redeem</div>
                                        <div className='font-light text-white text-xs w-28 text-center'>Convert your Vaulted Gold/Silver into Physical Products</div>
                                        <div className='l3-step relative flex flex-row md:-rotate-90 md:-top-24  md:left-28'>
                                            <div className='absolute z-10 bg-transparent h-8 top-[10px] left-[118px] border-2 border-gold-500 border-dashed rounded-full'></div>
                                            <div className='absolute z-10 bg-transparent w-28 sm:w-32 top-[50px] left-[55px] border-2 border-gold-500 border-dashed rounded-full'></div>
                                            <div className='step-child1 relative top-32 left-5 sm:left-3'>
                                                <div className='absolute z-10 -top-[96px] left-6 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                                <div className='relative md:rotate-90 step-container -left-5 md:-top-9 -top-12 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                                    <div>
                                                        <Image src={GoldCoins} alt='Add User' className='w-16 px-1' />
                                                    </div>
                                                    <div className='font-bold text-sm text-center'>Gold Coins</div>
                                                    <div className='font-light text-white text-xs w-28 text-center'>Get your choice of Coin Delivered to your Doorstep</div>
                                                </div>
                                            </div>
                                            <div className='step-child2 relative top-32 -left-5 sm:left-0'>
                                                <div className='absolute z-10 -top-[96px] left-10 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                                <div className='relative md:rotate-90 step-container left-0 -top-12 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                                    <div>
                                                        <Image src={Jewellery} alt='Add User' className='w-16 px-1' />
                                                    </div>
                                                    <div className='font-bold text-sm text-center'>Jewellery</div>
                                                    <div className='font-light text-white text-xs w-28 text-center'>Exchange for Jewellery with Value1 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-1 step7 relative mb-2 md:mb-0'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-24 md:top-[26px] xl:-top-24 left-[62px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-[430px] md:h-[300px] -top-80 md:-top-[430px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-28 md:-top-28 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-20 md:-top-40 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Withdraw} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Withdraw</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Withdraw the amount in your Bank Account</div>
                        </div>
                    </div>
                    <div className='p-1 step8 relative mt-16'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-24 md:top-[26px] xl:-top-24 left-[62px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-[180px] md:h-[150px] -top-12 md:-top-[270px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-28 md:-top-28 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-14 md:-top-40 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={ValueCoin} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Redeem Value Coins</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Exercise your stock options with Value Coins</div>
                        </div>
                    </div>
                    <div className='p-1 step9 relative mt-16 mb-28 md:mb-0'>
                        <div className='hidden xl:block relative z-10 bg-transparent w-20 top-24 md:top-[26px] xl:-top-24 left-[62px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 bg-transparent h-[190px] md:h-[150px] -top-16 md:-top-[270px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-28 md:-top-28 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-20 xl:left-36 top-14 md:-top-44 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-36 max-w-xs'>
                            <div>
                                <Image src={Certificate} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Share Holding</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Receive your Share Certificate</div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Infographics
