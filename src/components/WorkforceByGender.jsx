
import React, { Component } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import cubejs from "@cubejs-client/core";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

const cubejsApi = cubejs(
    // process.env.REACT_APP_CUBEJS_TOKEN,
    {
        apiUrl: process.env.REACT_APP_API_URL
    });

const dateFormatter = item => moment(item).format("MMM YY");

class WorkforceByGender extends Component {
    render() {
        return (
            <QueryRenderer
                query={{
                    "limit": 5000,
                    "measures": [
                        "users.count"
                    ],
                    "order": {
                        "users.count": "desc"
                    },
                    "dimensions": [
                        "users.gender"
                    ]
                }}
                cubejsApi={cubejsApi}
                render={({ resultSet }) => {
                    console.log('>>> dataset', resultSet);
                    if (!resultSet) {
                        return "Loading...";
                    }

                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={resultSet.chartPivot()}>
                                <XAxis dataKey="x" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users.count" fill="rgba(106, 110, 229)" />
                            </BarChart>
                        </ResponsiveContainer>
                    );
                }}
            />
        );
    }
}

export default WorkforceByGender;