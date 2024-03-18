'use client'
import Image from "next/image";
import Return from'@/public/images/svgs/return.svg'
import Privacy from '@/public/images/svgs/privacy.svg'
import TC from '@/public/images/svgs/t&c.svg'
import Shipping from '@/public/images/svgs/shipping.svg'

import { useState } from "react";

export default function NavTabs(){
    const [sectionState, setSectionState] = useState('privacy-policy');

    const handleSectionChange = (section:string) => {
        setSectionState(section);
    };

    return(
        <div className="flex flex-col w-full md:flex-row lg:flex-col justify-center gap-4">
            <div className="px-4 py-3 w-full bg-gold-500 rounded-2xl flex items-center justify-center" onClick={() => handleSectionChange('privacy-policy')}>
                <Image src={Privacy} alt='' className="w-6 mr-3" />
                <span className="text-white text-center">Privacy Policy</span>
            </div>
            <div className="px-4 py-3 w-full bg-gold-500 rounded-2xl flex items-center justify-center" onClick={() => handleSectionChange('terms-condition')}>
                <Image src={TC} alt='' className="w-5 mr-3" />
                <span className="text-white text-center">Terms & Condition</span>
            </div>
            <div className="px-4 py-3 w-full bg-gold-500 rounded-2xl flex items-center justify-center" onClick={() => handleSectionChange('shipping-policy')}>
                <Image src={Shipping} alt='' className="w-6 mr-3" />
                <span className="text-white text-center">Shipping Policy</span>
            </div>
            <div className="px-4 py-3 w-full bg-gold-500 rounded-2xl flex items-center justify-center" onClick={() => handleSectionChange('return-policy')}>
                <Image src={Return} alt='' className="w-6 mr-3" />
                <span className="text-white text-center">Cancellation & Return Policy</span>
            </div>
        </div>
    );
}