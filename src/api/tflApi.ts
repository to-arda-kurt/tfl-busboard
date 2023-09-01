const apiKey = import.meta.env.VITE_TFL_API_KEY;

const OPTIONS = {
    stopTypes: "NaptanPublicBusCoachTram",
    radius: 1500,
    mode_names: true
}

interface StopPointResponse {
    indicator: string;
    commonName: string;
    naptanId: string;
    lat: number;
    lon: number
}



export const getBusStopPointsbyLonLat = (async (lat: number, lng: number) => {
    console.log(lat, lng)

    if (lat === 0 && lng === 0) {
        return false;
    }

    const busStops: StopPointResponse[] = [];

    const response = await fetch(`https://api.tfl.gov.uk/StopPoint?lat=${lat}&lon=${lng}&stopTypes=${OPTIONS.stopTypes}&radius=${OPTIONS.radius}&app_key=${apiKey}`)
    const data = await response.json();
    console.log(data)
    await data.stopPoints.slice(0, 15)
        .map((stopPoint: StopPointResponse) => busStops.push({ indicator: stopPoint.indicator, commonName: stopPoint.commonName, naptanId: stopPoint.naptanId, lat: stopPoint.lat, lon: stopPoint.lon }))



    return await busStops






});



export const getOnComingBusses = (async (naptanId: string) => {
    const response = await fetch(`https://api.tfl.gov.uk//${naptanId}/Arrivals`)
    const body = await response.json()
    const stopPointsData = await body.stopPoints;
    const data = stopPointsData.slice(0, 15).map((stopPoint: { indicator: string; commonName: string; naptanId: string; lat: number; lon: number; }) => [stopPoint.indicator, stopPoint.commonName, stopPoint.naptanId, stopPoint.lat, stopPoint.lon]);

    return data;

});