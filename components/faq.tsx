'use client'
import Image from "next/image"
import Bot from '@/public/images/svgs/bot.svg';
import Question from '@/public/images/svgs/question-mrk.svg'
import { useState } from "react";
export default function FAQ() {
  const faqData = [
    {
      question: 'What could possibly be your first question?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      question: 'What could possibly be your Second question?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    // Add more question and answer objects as needed
  ];
  const [selectedSection, setSelectedSection] = useState('first');
  return (
    <section data-aos='fade-up' data-aos-delay='200'>
      <div className="py-4 mt-28">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

          <div className="max-w-screen-md mx-auto text-center mt-10">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
              Frequently Asked <span className="text-gold-600">Questions</span>
            </h3>

          </div>

          <div className="flex flex-row items-center justify-center mt-16">
            <div className="max-w-sm rounded-lg overflow-x-scroll .faq-scrollbar border-2">
              <ul className="flex flex-row items-center justify-evenly gap-4 px-4 py-3 w-max cursor-pointer ">
                <li className={`${selectedSection === 'first' ? 'text-gold-500 border-b-2' : 'text-white'} cursor-pointer p-1 text-xl text-gold-500 border-gold-500 rounded-md font-bold `} onClick={() => setSelectedSection('first')}>FAQ 1</li>
                <li className={`${selectedSection === 'second' ? 'text-gold-500 border-b-2' : 'text-white'} cursor-pointer p-1 text-xl text-gold-500 border-gold-500 rounded-md font-bold `} onClick={() => setSelectedSection('second')}>FAQ 2</li>
              </ul>
            </div>
          </div>

          <div className={`${selectedSection === 'first' ? 'block' : 'hidden'} mt-6 max-w-screen-md mx-auto`}>
            <div className="flex justify-center py-10">
              <div className="text-2xl font-semibold text-gold-700">Section Header</div>
            </div>
            <ul>
              {faqData.map((item, index) => (
                <li key={index} className="text-left mb-10">
                  <div className="flex flex-row items-start mb-5">
                    <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-white text-gold-500 border-4 border-gold-500 text-xl font-semibold">
                      <Image src={Question} alt="" />
                    </div>
                    <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-gold-600">
                      <h4 className="text-md leading-6 font-medium text-gold-500">{item.question}</h4>
                    </div>
                  </div>

                  <div className="flex flex-row items-start">
                    <div className="bg-gold-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-white">
                      <p className="text-black-800 text-sm">{item.answer}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gold-500 text-white border-4 border-white text-xl font-semibold">
                      <Image src={Bot} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${selectedSection === 'second' ? 'block' : 'hidden'} mt-6 max-w-screen-md mx-auto`}>
            <div className="flex justify-center py-10">
              <div className="text-2xl font-semibold text-gold-700">first Header</div>
            </div>
            <ul>
              {faqData.map((item, index) => (
                <li key={index} className="text-left mb-10">
                  <div className="flex flex-row items-start mb-5">
                    <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-white text-gold-500 border-4 border-gold-500 text-xl font-semibold">
                      <Image src={Question} alt="" />
                    </div>
                    <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-gold-600">
                      <h4 className="text-md leading-6 font-medium text-gold-500">{item.question}</h4>
                    </div>
                  </div>

                  <div className="flex flex-row items-start">
                    <div className="bg-gold-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-white">
                      <p className="text-black-800 text-sm">{item.answer}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gold-500 text-white border-4 border-white text-xl font-semibold">
                      <Image src={Bot} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
