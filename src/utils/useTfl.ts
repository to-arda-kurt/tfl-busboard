import { useCallback, useState } from "react";

//requestConfig object contains url, method, headers, body
//applyData function handles the data that comes back from the request
//Assumes working with JSON data

interface RequestConfig {
	endpoint: string;
	method?: string;
	headers?: Headers;
	body?: string;
}

const TflResponseMessages: { [key: string]: string } = {
	401: "Unauthorized Request to TFL API",
	404: "Invalid Path in TFL Request",
	503: "Service Unavailable. Try again",
	504: "Server Timeout. Try again",
};

const BASE_URL = "https://api.tfl.gov.uk";

const useTfl = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const sendRequest = useCallback(
		async (
			requestConfig: RequestConfig,
			applyData: (data: any) => void
		) => {
			setIsLoading(true);
			setError(null);
			try {
				// Check set parameters
				// If not set a default GET request, empty headers and no body
				const response = await fetch(
					BASE_URL + requestConfig.endpoint,
					{
						method: requestConfig.method
							? requestConfig.method
							: "GET",
						headers: requestConfig.headers
							? requestConfig.headers
							: {},
						body: requestConfig.body
							? JSON.stringify(requestConfig.body)
							: null,
					}
				);

				if (!response.ok) {
					const responseCode = response.status.toString();
					const customErrMsg = TflResponseMessages[responseCode];
					if (customErrMsg) {
						throw new Error(
							`Request failed. Message: ${customErrMsg} Code: ${response.status}`
						);
					}
					throw new Error(
						`Request failed. Message: ${response.statusText} Code: ${response.status}`
					);
				}

				const data = await response.json();

				applyData(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					var errorMsg = err.message || "Something went wrong!";
					setError(`Error in TFL request : ${errorMsg}`);
				}
			}
			setIsLoading(false);
		},
		[]
	);

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useTfl;
