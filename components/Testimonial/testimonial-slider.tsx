'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial-slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function TestimonialSlider() {
    const testimonials = [
        {
            name: 'Ramalingam',
            title: 'Farmer',
            content: "As a farmer, I'm amazed that technology now allows us to save gold from the comfort of our homes. It's a revolutionary way for farmers like me to invest and secure a golden future effortlessly."
        },
        {
            name: 'Gautham',
            title: 'College Student',
            content: "As someone who generally tests various financial apps, I must say I really liked the concept of Value1. It stands out with its unique approach, and I can see the potential for making savings in gold accessible to many. It's a concept I can confidently recommend to others."
        },
        {
            name: 'Rahul',
            title: 'Software Engineer',
            content: "Value1 is not just an app; it's a financial game-changer. With a starting investment of just Rs 1, it has redefined accessibility to gold savings!"
        },
        {
            name: 'Lakshmi',
            title: 'Homemaker',
            content: "Value1 has made my financial journey simple and rewarding, proving that even the smallest investments can lead to significant returns"
        },
        {
            name: 'Sam',
            title: 'Manager',
            content: "Value1 makes saving in 24k gold unbelievably easy! I couldn't believe I could buy gold in the smallest denominations. Simply amazing!"
        },
        {
            name: 'Saravanan',
            title: 'C A',
            content: "As a Chartered Accountant, I truly appreciate the concept behind Value1. I believe this innovative approach will be a game-changer, helping many to save gold effortlessly. Excited about the positive impact it will bring!"
        },
        {
            name: 'Pooguzhali',
            title: 'Financial Advisor',
            content: "As a financial advisor, I'm now recommending Value1 to all my friends and clients. The app's concept of starting with just Rs 1 is incredibly useful and aligns perfectly with sound financial planning"
        },
        // Add more testimonial objects as needed
    ];
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable:true
            }}
            loop={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            
            modules={[Autoplay, Pagination, Navigation]}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='px-4'>
                    <div className="flex items-center justify-center">
                        <blockquote className="group rounded-3xl border-2 border-gold-500 bg-gold-100 py-4 px-3 shadow-sm md:p-8 w-[450px] h-[350px] flex flex-col justify-center">
                            <div className="flex flex-row items-center justify-center">
                                <div className='flex flex-col-reverse items-center justify-between'>
                                    <div className="flex justify-center gap-1 group-hover:animate-ping text-gold-500 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm font-normal text-black-800 ">{testimonial.title}</p>
                                    <p className="mt-0.5 text-xl font-medium text-black-800 ">{testimonial.name}</p>
                                </div>
                            </div>
                            <p className="mt-6 text-black-700 text-center ">{testimonial.content}</p>
                        </blockquote>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}