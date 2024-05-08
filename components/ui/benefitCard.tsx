import React from 'react'
import Image from 'next/image';

interface BenefitCardProps {
    icon: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, description }) => {
    return (
        <div className='flex items-center justify-center gap-5 md:gap-10 group px-2 mb-3'>
            <div className='w-[300px] sm:w-[350px] md:w-[450px] xl:w-[700px] bg-[#fff8e6] rounded-3xl px-2 py-5 flex flex-row group-even:flex-row-reverse items-center justify-center gap-5'>
                <div className='w-20 flex items-center justify-center'><Image src={icon} alt={'icon'} /></div>
                <div className='w-64 text-wrap text-center md:text-left font-semibold text-md text-black-800'>{description}</div>
            </div>

        </div>

    )
}

export default BenefitCard;