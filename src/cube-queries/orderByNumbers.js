const orderByNumbers = (dateRangeValue) => {
    const query = {
        "measures": [
            "orders.number"
        ],
        "limit": 20000,
        "timeDimensions": [
            {
                "dimension": "orders.created_at",
                "granularity": "day"
            }
        ],
        "order": {
            "orders.created_at": "asc"
        }
    }
    if (dateRangeValue !== "All Time") {
        query.timeDimensions[0].dateRange = dateRangeValue
    }
    return query;
}

export default orderByNumbers;