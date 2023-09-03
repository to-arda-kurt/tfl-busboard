import { IOnComingBuses } from "@root/types/app";
import handleRequest from "@root/utils/handleRequest";
import { makeRequest } from "@root/utils/useTFL/makeTFLEndpoint";
import { parseStopPointData } from "@root/helper/parseApiResponse";

const apiKey = import.meta.env.VITE_TFL_API_KEY;

const OPTIONS = {
	stopTypes: "NaptanPublicBusCoachTram",
	radius: 1500,
	mode_names: true,
};

export const getBusStopPointsbyLonLat = async (lat: number, lng: number) => {
	console.log(lat, lng);

	if (lat === 0 && lng === 0) {
		return false;
	}

	const requestConfig = makeRequest(`/StopPoint?lat=${lat}&lon=${lng}&stopTypes=${OPTIONS.stopTypes}&radius=${OPTIONS.radius}&app_key=${apiKey}`);
	const { dataResponse: data, errorMessage } = await handleRequest(requestConfig);

	if (errorMessage) {
		console.log(errorMessage);
	} else {
		const busStops = parseStopPointData(data);
	    return busStops;
	}

};

export const getOnComingBusses = async (naptanId: string) => {
	const response = await fetch(
		`https://api.tfl.gov.uk/StopPoint/${naptanId}/Arrivals`
	);

	let data = await response.json();

	data = await data
		.sort(
			(a: IOnComingBuses, b: IOnComingBuses) =>
				a.timeToStation - b.timeToStation
		)
		.slice(0, 5);
	// const body = await response.json()

	// const stopPointsData = await body.stopPoints;

	return await data;
};
