export const metadata = {
    title: 'Value1 - World`s Most Inclusive Enterprises',
    description: 'Contact Us',
}

import Image from 'next/image'
import Support from '@/public/images/svgs/support.svg';
import Partnership from '@/public/images/svgs/partnership.svg';
import Career from '@/public/images/svgs/career.svg';

import bgPattern from '@/public/images/pattern3.png'
import Brand from '@/public/images/logo-big.png'


export default function About() {
    return (
        <>
            <section className='flex items-center justify-center'>
                <div className='max-w-full lg:max-w-7xl mt-48 px-2 md:px-4 lg:px-8 lg:mx-4 xl:px-12 xl:mx-8 relative'>
                    <Image src={bgPattern} alt='' className='-z-100 absolute w-96 rotate-45 -left-56 top-0 xl:top-72 xl:left-0' />
                    <div className='px-2 xl:mt-12'>
                        <div className='flex items-center justify-center my-10'>
                            <Image src={Brand} alt='' height={200} width={200} />
                        </div>
                        <div className='font-bold font-poppins text-2xl md:text-4xl lg:text-6xl text-gold-500 text-center'>Get In Touch,</div>
                        <div className='font-bold font-poppins text-2xl md:text-4xl lg:text-6xl text-white text-center'>World-class support at every stage</div>
                    </div>

                    <div className='max-w-sm lg:max-w-6xl mx-auto flex items-center justify-center flex-col mt-20 gap-10 mb-20'>
                        <div className='text-2xl lg:text-4xl font-bold text-gold-500'>Our Office Locations</div>
                        <div className='px-3 mt-10'>
                            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 max-h-96'>
                                <div className='bg-white group hover:bg-gold-500 text-center flex flex-col items-center justify-center w-72 lg:w-96 h-max lg:h-52 py-3 px-2 rounded-xl text-black-800 hover:scale-105 transition duration-200 ease-in-out'>
                                    <div className='text-center font-bold text-xl text-gold-500 group-hover:text-white'>Registered Office</div>
                                    <div className='px-3 text-md mt-4'>Value1, OOSH Learnings Private Limited, Plot No.42, Thirugnana Sambandar Street, Ram Nagar North, Madipakkam, Chennai – 600091</div>
                                </div>
                                <div className='bg-white group hover:bg-gold-500 text-center flex flex-col items-center justify-center w-72 lg:w-96 h-max lg:h-52 py-3 px-2 rounded-xl text-black-800 hover:scale-105 transition duration-200 ease-in-out'>
                                    <div className='text-center font-bold text-xl text-gold-500 group-hover:text-white'>Operating Office & Research Centre</div>
                                    <div className='px-3 text-md mt-4'>Value1, AIC – AU, Atal Incubation Centre – Anna University, 2nd Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai – 600025</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-6xl mx-auto flex items-center justify-center flex-col mt-20 gap-10 mb-20'>
                        <div className='text-2xl lg:text-4xl font-bold text-gold-500'>Reach Us</div>
                        <div className='px-3 mt-10'>
                            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 '>
                                <div className='bg-white flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-black-800 w-64 h-64 hover:scale-105 transition duration-200 ease-in-out'>
                                    <div className='w-24'><Image src={Support} width={150} alt='Value1 Support' /></div>
                                    <div className='font-semibold text-xl text-gold-500 '>Support</div>
                                    <div className='font-medium'>support@value1.in</div>
                                    <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=support@value1.in' className='mt-3 border-2 border-gold-500 px-5 py-2 rounded-2xl font-semibold text-md '>Reach Us</a>
                                </div>
                                <div className='bg-white flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-black-800 w-64 h-64 hover:scale-105 transition duration-200 ease-in-out'>
                                    <div className='w-24'><Image src={Partnership} width={150} alt='Value1 Support' /></div>
                                    <div className='font-semibold text-xl text-gold-500 '>Partnership</div>
                                    <div className='font-medium'>partnership@value1.in</div>
                                    <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=partnership@value1.in' className='mt-3 border-2 border-gold-500 px-5 py-2 rounded-2xl font-semibold text-md '>Reach Us</a>
                                </div>
                                <div className='bg-white flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-black-800 w-64 h-64 hover:scale-105 transition duration-200 ease-in-out'>
                                    <div className='w-24'><Image src={Career} width={150} alt='Value1 Support' /></div>
                                    <div className='font-semibold text-xl text-gold-500 '>Career</div>
                                    <div className='font-medium'>hr@value1.in</div>
                                    <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hr@value1.in' target='_blank' className='mt-3 border-2 border-gold-500 px-5 py-2 rounded-2xl font-semibold text-md '>Reach Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
