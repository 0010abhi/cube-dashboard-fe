
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function AppBarChart({ resultSet, barDataKey }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resultSet.chartPivot()}>
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={barDataKey} fill="rgba(106, 110, 229)" />
            </BarChart>
        </ResponsiveContainer>
    );
}