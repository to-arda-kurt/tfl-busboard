import { RequestConfig } from "@root/utils/useTFL";

export interface MakeRequestParams {
    path: string;
}

// export interface MakeRequestParams{
//     action: RequestType;
//     params: string[];
// }

export const makeRequest = (path: string) => {

    const requestUrl = `https://api.tfl.gov.uk${path}`;
    const requestConfig: RequestConfig = { endpoint: requestUrl };

    return requestConfig;
};
