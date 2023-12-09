
import React from "react";
import { QueryRenderer } from "@cubejs-client/react";
import AppBarChart from "./common/BarChart";
import productCategoryCountQuery from '../cube-queries/productCategoryCount.json';
import cubejsApi from "../cube-queries/cubejs";

export default function ProductCategoryCount() {
    return (
        <QueryRenderer
            query={productCategoryCountQuery}
            cubejsApi={cubejsApi}
            render={({ resultSet }) => {
                if (!resultSet) {
                    return "Loading...";
                }
                return (
                    <AppBarChart resultSet={resultSet} barDataKey={"products.count"} />
                );
            }}
        />
    );
};