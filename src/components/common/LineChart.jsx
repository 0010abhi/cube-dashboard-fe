import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AppLineChart({ xAxisDataKey, resultSet, linesData }) {

    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart
                width={500}
                height={300}
                data={resultSet.chartPivot()}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisDataKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    linesData.map((line, index) => (
                        <Line key={index} type="monotone" dataKey={line.dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    ))
                }
            </LineChart>
        </ResponsiveContainer>
    );
}
