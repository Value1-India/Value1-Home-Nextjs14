import React from 'react'
import Image from 'next/image';

interface BenefitCardProps {
    cardTitle: string;
    icon: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ cardTitle, icon }) => {
    return (
        <div className={`w-36 h-40 lg:h-44 lg:w-44 gap-4 py-3 px-2 bg-white border-2 border-gold-500 rounded-3xl text-black-800 flex flex-col items-center justify-center`}>
            <div className={`w-20`}><Image src={icon} alt='Card Image' width={150} /></div>
            <div className='font-semibold text-md lg:text-sm'>{cardTitle}</div>
        </div>
    )
}

export default BenefitCard;