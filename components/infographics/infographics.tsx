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
                    <div className='absolute z-10 bg-transparent w-20 bottom-[34px] left-16 border-2 border-gold-500 border-dashed rounded-full'></div>
                    <div className='absolute z-10 bg-transparent h-20 -bottom-[50px] left-[140px] border-2 border-gold-500 border-dashed rounded-full'></div>
                </div>
                
                <div className='infographic-section mt-16 relative flex justify-center'>
                    <div className='p-1 steps'>
                        <div className='absolute z-10 -top-2 left-[122px] w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-[74px] top-10 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm'>Create An Account</div>
                            <div className='font-light text-xs w-28'>This is free and only takes a few minutes.</div>
                        </div>
                    </div>
                    <div className='p-1 steps'>
                        <div className='absolute z-10 -top-2 left-[122px] w-10'><Image src={Pointer} height={100} width={100} alt='Pointer' /></div>
                        <div className='relative step-container left-[74px] top-10 z-0 flex flex-col items-center text-gold-500 px-1 py-1 rounded-xl w-max max-w-xs'>
                            <div>
                                <Image src={User} alt='Add User' className='w-16 px-1' />
                            </div>
                            <div className='font-bold text-sm'>Create An Account</div>
                            <div className='font-light text-xs w-28'>This is free and only takes a few minutes.</div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Infographics
