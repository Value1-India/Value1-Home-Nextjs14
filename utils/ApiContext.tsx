'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

// Define types for data
interface SENSEXData { //SENSEX
  current_price: number
  price_change: number
  price_change_percentage : number
}

interface NIFTY50Data { //NIFTY-50
  current_price: number
  price_change: number
  price_change_percentage : number
}

interface BSE500Data { //BSE-500
  current_price: number
  price_change: number
  price_change_percentage : number
}

// Create a context for your data
interface DataContextType {
  SensexData: SENSEXData | null;
  Nifty50Data: NIFTY50Data | null;
  BSE500Data: BSE500Data | null;
}
interface DataProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Custom hook to use DataContext
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Context provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  // State to hold data from each URL
  const [SensexData, setSensexData] = useState<SENSEXData | null>(null);
  const [Nifty50Data, setNifty50Data] = useState<NIFTY50Data | null>(null);
  const [BSE500Data, setBSE500Data] = useState<BSE500Data | null>(null);

  // Function to fetch data from URL
  const fetchData = async (url: string, setData: React.Dispatch<any>) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData('https://vmarket-api.vercel.app/scrape/SENSEX', setSensexData);
    fetchData('https://vmarket-api.vercel.app/scrape/NIFTY-50', setNifty50Data);
    fetchData('https://vmarket-api.vercel.app/scrape/BSE-500', setBSE500Data);
  }, []);

  // Provide data to children components
  return (
    <DataContext.Provider value={{ SensexData, Nifty50Data, BSE500Data }}>
      {children}
    </DataContext.Provider>
  );
};
