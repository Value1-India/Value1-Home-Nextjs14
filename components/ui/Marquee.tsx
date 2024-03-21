import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'
import { useData } from '@/utils/ApiContext';
import fd from '@/utils/ContextProvider';
import Loader from './Loader/Loader';

export default function MarqueeScroller() {
    const { SensexData, Nifty50Data, BSE500Data } = useData();
    if (!SensexData || !Nifty50Data || !BSE500Data) {
        return <div> <Loader/> </div>;
      }
    const data = {
        GoldRate : fd.GoldRate,
        GoldRateChange: fd.GoldRateChange,
        GoldRateChangePercentage: fd.GoldRateChangePercentage,
        SilverRate: fd.SilverRate,
        SilverRateChange: fd.SilverRateChange,
        SilverRateChangePercentage: fd.SilverRateChangePercentage,
        SensexPoints: SensexData.current_price || 0,
        SensexChange: SensexData.price_change || 0,
        SensexChangePercentage: SensexData.price_change_percentage || 0,
        Nifty50Points: Nifty50Data.current_price || 0,
        Nifty50Change: Nifty50Data.price_change || 0,
        Nifty50ChangePercentage: Nifty50Data.price_change_percentage || 0,
        BSE500Points: BSE500Data.current_price || 0,
        BSE500PointsChange: BSE500Data.price_change || 0,
        BSE500PointsChangePercentage: BSE500Data.price_change_percentage || 0,
      }
    return(
        <>
          <Marquee speed={80} pauseOnHover pauseOnClick direction='right' loop={0} className='md:w-4/6 w-5/6 bg-gold-600' gradient gradientColor='#e2aa03' gradientWidth={30}>
          <div className='flex flex-row justify-evenly items-center lg:gap-8 gap-2 mx-2'>
            <MarqueeComponent componentName="Gold" rate={data.GoldRate} changePercentage={data.GoldRateChangePercentage} type='metal' marketChange={data.GoldRateChange} />
            <MarqueeComponent componentName="Silver" rate={data.SilverRate} changePercentage={data.SilverRateChangePercentage} type='metal' marketChange={data.SilverRateChange} />
            <MarqueeComponent componentName="Sensex" rate={data.SensexPoints} changePercentage={data.SensexChangePercentage} type='metal' marketChange={data.SensexChange} />
            <MarqueeComponent componentName="nifty 50" rate={data.Nifty50Points} changePercentage={data.Nifty50ChangePercentage} type='metal' marketChange={data.Nifty50Change} />
            <MarqueeComponent componentName="BSE 500" rate={data.BSE500Points} changePercentage={data.BSE500PointsChangePercentage} type='metal' marketChange={data.BSE500PointsChange} />
          </div>
          </Marquee>
        </>
    );
}