import React from 'react'
import Image from 'next/image';

interface MiniCardProps {
    cardTitle: string;
    icon: string;
    description: string;
  }

const MiniCard: React.FC<MiniCardProps> = ({ cardTitle, icon, description })=> {
  return (
    <div data-aos='fade-down' data-aos-delay='400' className='overflow-hidden w-72 mb-4 text-black-600 bg-white rounded-3xl p-10 flex flex-col items-center justify-center card'>
        <Image src={icon} height={100} width={100} alt='icons' className='w-16' />
        <div className='font-bold text-lg text-center py-3 title'>{cardTitle}</div>
        <p className='text-center font-normal text-md text '>{description}</p>
    </div>
  )
}

export default MiniCard;