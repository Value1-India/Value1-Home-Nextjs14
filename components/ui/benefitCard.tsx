import React from 'react'
import Image from 'next/image';

interface BenefitCardProps {
    icon: string;
    description: string;
    number: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, description, number }) => {
    return (
        <div className='flex flex-col md:flex-row md:even:flex-row-reverse items-center justify-center gap-5 md:gap-10 px-4 group'>
            <div className='w-72 h-72 md:w-72 md:h-72 xl:w-96 xl:h-96'>
                <div className={`w-full h-full gap-4 py-3 px-2 flex flex-col items-center justify-center`}>
                    <div className={`w-full h-full flex items-center justify-center p-2 bg-black-800 rounded-2xl`}><Image src={icon} alt='Card Image' width={500} /></div>
                </div>
            </div>
            <div className='flex flex-col group-even:items-end items-start justify-center gap-5 '>
                <div className='mx-10 mt-4 p-1 rounded-full w-10 h-10 md:w-16 md:h-16 text-2xl font-bold text-center text-white bg-gold-500 flex items-center justify-center'>{number}</div>
                <div className='md:w-[450px] xl:w-[700px] bg-[#fff8e6] rounded-3xl px-10 py-5 flex flex-col items-center justify-center gap-4'>
                    <div className='text-center md:text-left font-semibold text-lg lg:text-xl text-black-800 '>{description}</div>
                </div>
            </div>

        </div>

    )
}

export default BenefitCard;