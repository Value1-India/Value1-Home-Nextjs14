// app/api/metal-rate/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const conversion_const = 31.1035; // Conversion factor for troy ounces to grams

export async function GET() {
  try {
    const apiKey = process.env.METAL_PRICE_API_KEY;
    const res = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=INR&currencies=XAG,XAU,XPD`);
    const data = await res.json();

    if (data.success) {
      const ratesInGrams = {
        XAG: data.rates.XAG / conversion_const,
        XAU: data.rates.XAU / conversion_const,
        XPD: data.rates.XPD / conversion_const,
      };

      return NextResponse.json({ status:200, success: true, base: "INR", timestamp: data.timestamp, rates: ratesInGrams });
    } else {
        return NextResponse.json({ status:500,  error: 'Failed to fetch data from the Metal Price API' });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status:500, error: 'Failed to fetch data from the Metal Price API' });
  }
}