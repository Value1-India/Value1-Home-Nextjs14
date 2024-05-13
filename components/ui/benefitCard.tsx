import React from 'react'
import Image from 'next/image';

interface BenefitCardProps {
    icon: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, description }) => {
    return (
        <div className='flex items-center justify-center gap-5 md:gap-10 group px-2 mb-3'>
            <div className='w-[300px] sm:w-[350px] md:w-[650px] lg:w-[900px] bg-[#fff8e6] rounded-3xl px-2 md:px-0 py-5 flex flex-row group-even:flex-row-reverse items-center justify-center gap-5'>
                <div className='w-20 lg:w-32 flex items-center justify-center'><Image src={icon} alt={'icon'} /></div>
                <div className='px-1.5 w-64 md:w-[450px] lg:w-[600px] text-wrap text-center font-semibold text-md lg:text-xl text-black-800'>{description}</div>
            </div>

        </div>

    )
}

export default BenefitCard;