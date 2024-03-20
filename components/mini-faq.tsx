'use client'
import Image from "next/image"
import Open from '@/public/images/svgs/plus.svg';
import Close from '@/public/images/svgs/minus.svg'
import { useState } from "react";
export default function FAQmini() {
  const faqData = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    // Add more questions and answers as needed
  ];
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };


  return (
    <section data-aos='fade-up' data-aos-delay='200'>
      <div className="max-w-8xl px-4">
        <section className="">
          <div className="container w-full max-w-6xl px-6 py-10 mx-auto ">
            <h1 className="text-2xl font-semibold text-center text-gold-500 lg:text-3xl">Frequently asked questions</h1>
            <div className="hidden lg:flex items-center justify-center overflow-hidden">
              <div className="mt-12 space-y-8 max-w-4xl w-full relative">
                <div className="">
                  {faqData.map((item, index) => (
                    <div key={index} className="border-2 border-white rounded-2xl my-3 overflow-hidden transition-opacity duration-300 ease-in-out">
                      <div className="flex items-center justify-between w-full p-8">
                        <h1 className="font-semibold text-gold-500">{item.question}</h1>
                        <span className="text-black-400 bg-white rounded-full" onClick={() => toggleAnswer(index)}>
                          <Image src={Open} alt="" className={selectedQuestion === index ? 'w-7 h-7 hidden' : 'w-7 h-7'} />
                          <Image src={Close} alt="" className={selectedQuestion === index ? 'w-7 h-7' : 'w-7 h-7 hidden'} />
                        </span>
                      </div>
                      <hr className={`${selectedQuestion === index ? '' : 'hidden'} border-gray-500 border`} />
                      {selectedQuestion === index && (
                        <div className={`p-8 text-sm text-white transform ${selectedQuestion === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transition: 'opacity 0.3s, transform 0.3s' }}>
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="absolute lg:-bottom-16 lg:left-0 left-2 bottom-0 w-56 h-16 lg:w-[900px] lg:h-3/6 bg-opacity-50 bg-black-800 backdrop-blur-sm rounded-b-[50px] rounded-t-full flex items-start justify-center">
                  <a href="/frequently-asked-questions" className="bg-gold-500 mt-8 text-white font-semibold py-2 px-4 rounded-2xl">View More</a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a href="/frequently-asked-questions" className="lg:hidden p-3 mt-8 w-32 text-center font-bold bg-gold-500 rounded-2xl">FAQ Section</a>
            </div>

          </div>
        </section>
      </div>
    </section>
  )
}
