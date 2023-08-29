import { RequestConfig } from "@root/utils/useTFL";
import makeJourneyRequest from "./makeJourneyRequest";
import type { RequestType } from "@root/types/context";



export interface MakeRequestParams{
    path:string;
}
// export interface MakeRequestParams{
//     action: RequestType;
//     params: string[];
// }

export const makeRequest = (path:string) => {

    var requestConfig : RequestConfig;

    // switch(action.type){
        // case "BUS_STOP":
        //     // requestUrl = makeBusStoprequest(params)
        //     break;
        // case "JOURNEY":
	         const requestUrl = makeJourneyRequest(path);
             requestConfig = {endpoint: requestUrl};
            // break;
        // case "ONCOMING_BUSES":
	    //     // requestUrl = makeOncomingBusRequest({naptanId})

        //     break;
        // default:
        //     throw new Error(
        //         `Invalid Request type`
        //     );
    // }


    console.log(requestConfig)
    return requestConfig;
};
