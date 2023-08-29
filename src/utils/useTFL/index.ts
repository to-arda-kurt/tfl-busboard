import { useState, useCallback, useEffect } from "react";
import { makeRequest } from "./makeRequest";

// import { JourneyOptionData } from "@root/types/journey";

// import { MakeRequestParams } from "./makeRequest";

//requestConfig object contains url, method, headers, body
//applyData function handles the data that comes back from the request
//Assumes working with JSON data

export interface RequestConfig {
	endpoint: string;
	method?: string;
	headers?: Headers;
	body?: string;
}

// interface UseTflParams {
// 	request: MakeRequestParams;
// 	setData: () => void;
// }

const TflResponseMessages: { [key: string]: string } = {
	401: "Unauthorized Request to TFL API",
	404: "Invalid Path in TFL Request",
	503: "Service Unavailable. Try again",
	504: "Server Timeout. Try again",
};

interface TflResponse<TResult> {
	isLoading: boolean;
	error?: any;
	data?: TResult;
}

// const BASE_URL = "https://api.tfl.gov.uk";

const useTfl = <TResult>(path: string): TflResponse<TResult> => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);
	const [data, setData] = useState<TResult>();

	// useCallback( async () => {

	useEffect(() => {
		setIsLoading(true);
		try {
			const requestConfig = makeRequest(path);

			fetch(requestConfig.endpoint, {
				method: requestConfig.method ? requestConfig.method : "GET",
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body
					? JSON.stringify(requestConfig.body)
					: null,
			})
				.then((response) => {
					if (!response.ok) {
						const responseCode = response.status.toString();
						// Check for custom error message from status code
						const customErrMsg = TflResponseMessages[responseCode];
						if (customErrMsg) {
							throw new Error(
								`Request failed. Message: ${customErrMsg} Code: ${response.status}`
							);
						}
						// Use status code error message
						throw new Error(
							`Request failed. Message: ${response.statusText} Code: ${response.status}`
						);
					}
					return response.json();
				})
				.then((result) => {
					setData(result);
				})
				.catch(setError);

			setData(data);
		} catch (err: unknown) {
			if (err instanceof Error) {
				var errorMsg = err.message || "Something went wrong!";
				setError(`Error in TFL request : ${errorMsg}`);
			}
		}
		setIsLoading(false);
	}, [path]);

	return {
		isLoading,
		error,
		data,
	};
};

export default useTfl;
