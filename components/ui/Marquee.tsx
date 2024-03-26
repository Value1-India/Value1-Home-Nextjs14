import Marquee from 'react-fast-marquee'
import MarqueeComponent from '../marqueeElement'
import { useData } from '@/utils/ApiContextV2';
import fd from '@/utils/ContextProvider';
import Loader from './Loader/Loader';

export default function MarqueeScroller() {
  const { SENSEX, NIFTY50, BSE500 } = useData();
  if (!SENSEX || !NIFTY50 || !BSE500) {
    return <div> <Loader /> </div>;
  }
  const data = {
    GoldRate: fd.GoldRate,
    GoldRateChange: fd.GoldRateChange,
    GoldRateChangePercentage: fd.GoldRateChangePercentage,
    SilverRate: fd.SilverRate,
    SilverRateChange: fd.SilverRateChange,
    SilverRateChangePercentage: fd.SilverRateChangePercentage,
    SensexPoints: parseFloat(SENSEX.current_price) || 0,
    SensexChange: SENSEX.price_change || 0,
    SensexChangePercentage: SENSEX.price_change_percentage || 0,
    Nifty50Points: parseFloat(NIFTY50.current_price) || 0,
    Nifty50Change: NIFTY50.price_change || 0,
    Nifty50ChangePercentage: NIFTY50.price_change_percentage || 0,
    BSE500Points: parseFloat(BSE500.current_price) || 0,
    BSE500PointsChange: BSE500.price_change || 0,
    BSE500PointsChangePercentage: BSE500.price_change_percentage || 0,
  }
  return (
    <>
      <Marquee speed={80} pauseOnHover pauseOnClick direction='right' loop={0} className='md:w-4/6 w-5/6 bg-gold-100' gradient gradientColor='#fef2cd' gradientWidth={30}>
        <div className='flex flex-row justify-evenly items-center lg:gap-8 gap-2 mx-2'>
          <MarqueeComponent key={"Gold"} componentName="Gold" rate={data.GoldRate} changePercentage={data.GoldRateChangePercentage} marketChange={data.GoldRateChange} />
          <MarqueeComponent key={"Silver"} componentName="Silver" rate={data.SilverRate} changePercentage={data.SilverRateChangePercentage} marketChange={data.SilverRateChange} />
          <MarqueeComponent key={"Sensex"} componentName="Sensex" rate={data.SensexPoints} changePercentage={data.SensexChangePercentage} marketChange={data.SensexChange} />
          <MarqueeComponent key={"Nifty50"} componentName="Nifty 50" rate={data.Nifty50Points} changePercentage={data.Nifty50ChangePercentage} marketChange={data.Nifty50Change} />
          <MarqueeComponent key={"BSE500"} componentName="BSE 500" rate={data.BSE500Points} changePercentage={data.BSE500PointsChangePercentage} marketChange={data.BSE500PointsChange} />
        </div>
      </Marquee>
    </>
  );
}