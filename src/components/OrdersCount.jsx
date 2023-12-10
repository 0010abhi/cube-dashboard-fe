import React, { useState } from 'react';
import { QueryRenderer } from "@cubejs-client/react";
import orderByNumbers from '../cube-queries/orderByNumbers';
import cubejsApi from "../cube-queries/cubejs";
import AppLineChart from './common/LineChart';
import AppSelect from './common/Select';
import LINE_CHART_FILTER_OPTIONS from '../config/lineChartFilterOptions';

export default function OrdersCount() {
    const [query, setQuery] = useState(orderByNumbers(LINE_CHART_FILTER_OPTIONS[0].value));

    function handleFilterSelect(value) {
        console.log('>>> filter value', value);
        setQuery(orderByNumbers(value));
    }

    return (
        <>
            <AppSelect label={"Filter"} options={LINE_CHART_FILTER_OPTIONS} onSelect={handleFilterSelect} />
            <QueryRenderer
                query={query}
                cubejsApi={cubejsApi}
                render={({ resultSet }) => {
                    if (!resultSet) {
                        return "Loading...";
                    }
                    return (
                        <AppLineChart resultSet={resultSet} xAxisDataKey={"orders.create_at"} linesData={[{ dataKey: "orders.number" }]} />
                    );
                }}
            />
        </>
    );
}