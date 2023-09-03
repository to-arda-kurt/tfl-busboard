import { RequestConfig } from "@root/types/network";

const TflResponseMessages: { [key: string]: string } = {
	401: "Unauthorized Request to TFL API",
	404: "Invalid Path in TFL Request",
	503: "Service Unavailable. Try again",
	504: "Server Timeout. Try again",
};

const handleRequest = async (requestConfig: RequestConfig) => {
	let dataResponse = null;
	let errorMessage = null;

	try {
		// Check set parameters
		// If not set a default GET request, empty headers and no body
		const response = await fetch(requestConfig.endpoint, {
			method: requestConfig.method ? requestConfig.method : "GET",
			headers: requestConfig.headers ? requestConfig.headers : {},
			body: requestConfig.body
				? JSON.stringify(requestConfig.body)
				: null,
		});

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

		dataResponse = await response.json();

		// applyData(data);
	} catch (err: unknown) {
		if (err instanceof Error) {
			var errorMsg = err.message || "Something went wrong!";
			errorMessage = `Error in TFL request : ${errorMsg}`;
		}
	}

	return { dataResponse, errorMessage };
};

export default handleRequest;