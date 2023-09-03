import { RequestConfig } from "@root/types/network";

export interface MakeRequestParams {
    path: string;
}

// const BASE_URL = "https://api.tfl.gov.uk";

export const makeRequest = (path: string) => {

    const requestUrl = `https://api.tfl.gov.uk${path}`;
    const requestConfig: RequestConfig = { endpoint: requestUrl };

    return requestConfig;
};
