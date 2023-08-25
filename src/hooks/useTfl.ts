import { useCallback, useState } from "react";

//requestConfig object contains url, method, headers, body
//applyData function handles the data that comes back from the request
//Assumes working with JSON data

interface RequestConfig {
	url: string;
	method?: string;
	headers?: Headers;
	body?: string;
}

const useTfl = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const sendRequest = useCallback(
		async (
			requestConfig: RequestConfig,
			applyData: (data: string[]) => void
		) => {
			setIsLoading(true);
			setError(null);
			try {
				//Check parameters are set. If not set a default GET request, empty headers and no body
				const response = await fetch(requestConfig.url, {
					method: requestConfig.method ? requestConfig.method : "GET",
					headers: requestConfig.headers ? requestConfig.headers : {},
					body: requestConfig.body
						? JSON.stringify(requestConfig.body)
						: null,
				});

				if (!response.ok) {
					throw new Error("Request failed!");
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
