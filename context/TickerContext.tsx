"use client"

import React, { createContext, useContext, useState } from 'react';

const TickerContext = createContext({
    ticker: '',
    setTicker: (ticker: string) => { },
});

export const useTicker = () => useContext(TickerContext);

export function TickerProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    const [ticker, setTicker] = useState('AAPL');

    return (
        <TickerContext.Provider value={{ ticker, setTicker }}>
            {children}
        </TickerContext.Provider>
    );
};
