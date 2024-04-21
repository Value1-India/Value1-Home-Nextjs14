import Image from 'next/image';

interface CardProps {
    cardTitle: string;
    icon: string;
}

const Card: React.FC<CardProps> = ({ cardTitle, icon }) => {
    return (
        <div className={`w-44 h-48 lg:h-44 gap-4 py-3 px-2 bg-white border-2 border-gold-500 rounded-2xl text-black-800 flex flex-col items-center justify-center`}>
            <div className={`w-24`}><Image src={icon} alt='Card Image' width={150} /></div>
            <div className='font-semibold text-md lg:text-sm'>{cardTitle}</div>
        </div>
    )
}

export default Card;