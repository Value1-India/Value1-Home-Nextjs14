import Image from 'next/image'
import TestimonialSlider from './Testimonial/testimonial-slider';
import VideoSlider from './Testimonial/video-slider';
import { descriptors } from 'chart.js/dist/core/core.defaults';



export default function Testimonials() {
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

  const videos =[
    {
      embedId: "uLGRivuMRtA",
      description:"",
    },
    {
      embedId: "9rfcP9wEGiU",
      description:"",
    },
    {
      embedId: "OG-MWCBtZCQ",
      description:"",
    },
    {
      embedId: "67gTVHOy__4",
      description:"",
    },
    {
      embedId: "-iWIS3GCfhc",
      description:"",
    },
    {
      embedId: "fIJEq8ce9bM",
      description:"",
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gold-500 md:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 ">
            <TestimonialSlider testimonials={testimonials} />
        </div>
        <div className="mt-8 ">
            <VideoSlider videos={videos} />
        </div>
      </div>
    </section>

  )
}
