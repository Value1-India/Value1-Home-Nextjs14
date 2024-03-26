'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

interface IndexData {
    current_price: string;
    price_change: number;
    price_change_percentage: number;
}

interface DataContextType {
    SENSEX: IndexData | null;
    NIFTY50: IndexData | null;
    BSE500: IndexData | null;
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
    const [SENSEX, setSENSEX] = useState<IndexData | null>(null);
    const [NIFTY50, setNIFTY50] = useState<IndexData | null>(null);
    const [BSE500, setBSE500] = useState<IndexData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://vmarket-api.vercel.app/scrape');
                const data = await response.json();

                setSENSEX(data['SENSEX']);

                setNIFTY50(data['NIFTY-50']);

                setBSE500(data['BSE-500']);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const fetchDataInterval = setInterval(fetchData, 3000); // Refreshing data every 5 seconds

        return () => clearInterval(fetchDataInterval);
    }, []);

    return (
        <DataContext.Provider value={{ SENSEX, NIFTY50, BSE500 }}>
            {children}
        </DataContext.Provider>
    );
};