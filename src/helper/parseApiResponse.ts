import { StopPointResponse } from "@root/types/app";

export const parseStopPointData = (data: any) => {
	const busStops: StopPointResponse[] = [];
	data.stopPoints.slice(0, 15).map((stopPoint: StopPointResponse) =>
		busStops.push({
			indicator: stopPoint.indicator,
			commonName: stopPoint.commonName,
			naptanId: stopPoint.naptanId,
			lat: stopPoint.lat,
			lon: stopPoint.lon,
			stopLetter: stopPoint.stopLetter,
		})
	);
	return busStops;
};