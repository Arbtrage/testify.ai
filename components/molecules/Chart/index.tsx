"use client"

import { mockHistoricalData } from '@/constants/mocks'
import { convertUnixTimestampToDate } from '@/lib/utils';
import { Card } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ChartFilter from '@/components/atoms/Filter';
import { chartConfig } from '@/constants/config';
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
} from "recharts";

const Chart = ({ ticker }: { ticker: string }) => {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W");

    useEffect(() => {
        console.log("In chart",ticker)
    }, [ticker]);


    const formatData = (data: any) => {
        return data.c.map((item: any, index: any) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index])
            }
        })
    }

    return (
        <Card className='w-full h-full rounded-md relative p-1 md:p-8 border-2 text-sm'>
            <ul className="flex absolute top-2 right-2 z-40">
                {Object.keys(chartConfig).map((item) => (
                    <li key={item}>
                        <ChartFilter
                            text={item}
                            active={filter === item}
                            onClick={() => {
                                setFilter(item);
                            }}
                        />
                    </li>
                ))}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={formatData(data)}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor={"rgb(199 210 254)"}
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor={"rgb(199 210 254)"}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fill="url(#chartColor)"
                        fillOpacity={1}
                        strokeWidth={0.5}
                    />
                    <XAxis dataKey={"date"} />
                    <YAxis domain={["dataMin", "dataMax"]} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default Chart