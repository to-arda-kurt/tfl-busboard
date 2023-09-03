import { StopPointResponse } from "@root/types/app";
import { IOnComingBuses } from "@root/types/app";

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

export const parseOnComingBusData = (data:any) => {
    const oncomingBuses = data
    .sort(
        (a: IOnComingBuses, b: IOnComingBuses) =>
            a.timeToStation - b.timeToStation
    )
    .slice(0, 5);

    return oncomingBuses
}
