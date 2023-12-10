import cubejs from '@cubejs-client/core';

const cubejsApi = cubejs(
    process.env.REACT_APP_CUBEJS_TOKEN,
    {
        apiUrl: process.env.REACT_APP_API_URL
    }
);

// const dateFormatter = item => moment(item).format("MMM YY");

export default cubejsApi;
