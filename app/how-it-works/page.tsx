export const metadata = {
    title: 'Value1 - World`s Most Inclusive Enterprises',
    description: '',
  }
  

 import Infographics from '@/components/infographics/infographics'


  
  export default function HowItWorks() {
    return (
      <>    
          <section className='max-w-full mt-48 px-2 md:px-4 lg:px-8 lg:mx-4 xl:px-12 xl:mx-8'>
            <div className='px-2'>
                <div className='font-extrabold text-2xl md:text-4xl lg:text-7xl text-gold-600 text-center'>"WE INNOVATE FOR PEOPLE TO SAVE GOLD"</div>
                <div className='font-normal text-sm md:text-xl lg:text-2xl text-center mt-4'>India's 1st omni channel gold store co-owned by customers & workforce!</div>
            </div>


            <div className='pt-4 lg:pt-16'>
                <Infographics />
            </div>

          </section>
      </>
    )
  }
  