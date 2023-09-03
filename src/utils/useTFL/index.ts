import { useState, useEffect, useContext, useCallback } from "react";
import { makeRequest } from "./makeTFLEndpoint";

import mainContext from "@root/context/mainContext";

import type { MainContextType } from "@root/types/context";

import handleRequest from "../handleRequest";
import { RequestConfig } from "@root/types/network";

interface TflResponse<TResult> {
	isLoading: boolean;
	error?: string | null;
	data?: TResult;
}

const useTfl = <TResult>(
	path: string,
	validPostcode: boolean
): TflResponse<TResult> => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);
	const [data, setData] = useState<TResult>();
	const ctx = useContext(mainContext) as MainContextType;
	const { setLoading } = ctx;

	const requestData = useCallback(async (requestConfig: RequestConfig) => {
		const requestResponse = await handleRequest(requestConfig);
		if (requestResponse.dataResponse) {
			setData(requestResponse.dataResponse);
			setIsLoading(false);
			setLoading(false); //CTX loading
			setError("");
		} else {
			setError(requestResponse.errorMessage);
			setIsLoading(false);
			setLoading(false); //CTX loading
		}
	}, []);

	useEffect(() => {
		if (validPostcode) {
			setIsLoading(true);
			setLoading(true); //CTX loading
			const requestConfig = makeRequest(path);
			requestData(requestConfig)
		}
	}, [path, validPostcode]);

	return {
		isLoading,
		error,
		data,
	};
};

export default useTfl;
