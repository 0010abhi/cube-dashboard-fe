
import React from "react";
import { QueryRenderer } from "@cubejs-client/react";
import AppBarChart from "./common/BarChart";
import workforceByGenderQuery from '../cube-queries/workforceByGender';
import cubejsApi from "../cube-queries/cubejs";


export default function WorkforceByGender() {
    return (
        <QueryRenderer
            query={workforceByGenderQuery}
            cubejsApi={cubejsApi}
            render={({ resultSet }) => {
                console.log('>>> dataset', resultSet);
                if (!resultSet) {
                    return "Loading...";
                }

                return (
                    <AppBarChart resultSet={resultSet} barDataKey={"users.count"} />
                );
            }}
        />
    );
}
