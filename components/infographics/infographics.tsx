import '@/components/infographics/infographics.css'
import Pointer from '@/public/images/svgs/pointer.svg'
import Image from 'next/image'
import User from '@/public/images/svgs/add-user.svg'


const Infographics = () => {

    // https://codepen.io/siiron/pen/zKGrvE

    return (
        <section className='flex items-center justify-center'>

            <div className='w-full max-w-sm relative'>
                <div className='flex flex-wrap items-center bg-white py-4 px-5 rounded-xl pb-20 relative overflow-x-visible'>
                    <div className='font-bold text-3xl text-gold-600'>How It Works</div>
                    <div className='font-normal text-black-700 text-sm pt-2'>Value1 allows you to tailor your investing experience to fit your individual needs.</div>
                    <div className='font-normal text-black-700 text-sm pt-2'>Value1 customers have the unique option of buying immediately, pre-funding, and the ability to transact 24/7.</div>
                    <div className='absolute z-10 bottom-4 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                    <div className='absolute z-10 bg-transparent h-20 -bottom-[70px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                </div>
                
                <div className='infographic-section mt-16'>
                    <div className='p-1 step1 relative'>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-12 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Create An Account</div>
                            <div className='font-light text-white text-xs w-28 text-center'>This is free and only takes a few minutes.</div>
                        </div>
                    </div>
                    <div className='p-1 step2 relative'>
                        <div className='absolute z-10 bg-transparent h-14 -top-[52px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-12 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Gold / Silver</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Choose your Precious Metal</div>
                        </div>
                    </div>
                    <div className='p-1 step3 relative'>
                        <div className='absolute z-10 bg-transparent h-14 -top-[52px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-12 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Buy</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Its Easy, Safe and Secured</div>
                        </div>
                    </div>
                    <div className='p-1 step4 relative flex flex-col '>
                        <div className='absolute z-10 bg-transparent h-14 -top-[52px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-12 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Insured & Secured</div>
                            <div className='font-light text-white text-xs w-28 text-center'>In Secured Vault (SEBI Certified)</div>
                        </div>
                        <div className='l1-step-1 ml-24 mt-6 relative'>
                            <div className='absolute z-10 bg-transparent h-14 -top-[52px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                            <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                <div>
                                    <Image src={User} alt='Add User' className='w-12 px-1' />
                                </div>
                                <div className='font-bold text-sm text-center'>Audited & Verified</div>
                                <div className='font-light text-white text-xs w-28 text-center'>Weekly verified and audited by independent trustee</div>
                            </div>
                        </div>
                    </div>
                    <div className='p-1 step5 relative mt-20'>
                        <div className='absolute z-10 bg-transparent h-72 -top-[283px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='l1-step1 relative'>
                            <div className='absolute z-10 bg-transparent w-10 top-[26px] left-[63px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='absolute z-10 bg-transparent h-36 -top-[44px] left-[110px] border-2 border-gold-500 border-dashed rounded-full'></div>
                            <div className='l2-step1 relative left-[72px]'>
                                <div className='child1'>
                                    <div className='absolute z-10 -top-[74px] left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                    <div className='relative step-container left-16 -top-24 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                        <div>
                                            <Image src={User} alt='Add User' className='w-12 px-1' />
                                        </div>
                                        <div className='font-bold text-sm text-center'>Sell</div>
                                        <div className='font-light text-white text-xs w-28 text-center'>Sell the metals at Good Price</div>
                                    </div>
                                </div>
                                <div className='child2'>
                                    <div className='absolute z-10 top-[90px] left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                    <div className='relative step-container left-0 -top-14 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                        <div>
                                            <Image src={User} alt='Add User' className='w-12 px-1' />
                                        </div>
                                        <div className='font-bold text-sm text-center'>Redeem</div>
                                        <div className='font-light text-white text-xs w-28 text-center'>Redeem your cash into Gold Assets</div>
                                        <div className='l3-step relative flex flex-row'>
                                            <div className='absolute z-10 bg-transparent h-5 top-[5px] left-[116px] border-2 border-gold-500 border-dashed rounded-full'></div>
                                            <div className='absolute z-10 bg-transparent w-36 top-[30px] left-[36px] border-2 border-gold-500 border-dashed rounded-full'></div>
                                            <div className='step-child1 relative top-28'>
                                                <div className='absolute z-10 -top-[100px] left-4 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                                <div className='relative step-container -left-5 -top-12 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                                    <div>
                                                        <Image src={User} alt='Add User' className='w-12 px-1' />
                                                    </div>
                                                    <div className='font-bold text-sm text-center'>Gold Coins</div>
                                                    <div className='font-light text-white text-xs w-28 text-center'>Coin Delivery at your Doorstep</div>
                                                </div>
                                            </div>
                                            <div className='step-child2 relative top-28'>
                                                <div className='absolute z-10 -top-[100px] left-10 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                                                <div className='relative step-container left-0 -top-12 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                                                    <div>
                                                        <Image src={User} alt='Add User' className='w-12 px-1' />
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
                    <div className='p-1 step6 mt-12 relative'>
                        <div className='absolute z-10 bg-transparent h-[345px] -top-[335px] left-[38px] border-2 border-gold-500 border-dashed rounded-full'></div>
                        <div className='absolute z-10 top-3 left-5 w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-16 -top-8 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-12 px-1' />
                            </div>
                            <div className='font-bold text-sm text-center'>Withdraw</div>
                            <div className='font-light text-white text-xs w-28 text-center'>Withdraw the amount in your Bank Account</div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Infographics
