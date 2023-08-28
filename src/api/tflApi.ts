const apiKey = import.meta.env.VITE_TFL_API_KEY;

const OPTIONS = {
    stopTypes: "NaptanPublicBusCoachTram",
    radius: 1500,
    mode_names: true
}

export const getBusStopPointsbyLonLat = (async (lat: number, lng: number) => {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint?lat=${lat}&lon=${lng}&stopTypes=${OPTIONS.stopTypes}&radius=${OPTIONS.radius}&app_key=${apiKey}`)
    const body = await response.json()
    const stopPointsData = await body.stopPoints;
    const data = stopPointsData.slice(0, 15).map((stopPoint: { indicator: string; commonName: string; naptanId: string; lat: number; lon: number; }) => [stopPoint.indicator, stopPoint.commonName, stopPoint.naptanId, stopPoint.lat, stopPoint.lon]);

    return data;

});



export const getOnComingBusses = (async (naptanId: string) => {
    const response = await fetch(`https://api.tfl.gov.uk//${naptanId}/Arrivals`)
    const body = await response.json()
    const stopPointsData = await body.stopPoints;
    const data = stopPointsData.slice(0, 15).map((stopPoint: { indicator: string; commonName: string; naptanId: string; lat: number; lon: number; }) => [stopPoint.indicator, stopPoint.commonName, stopPoint.naptanId, stopPoint.lat, stopPoint.lon]);

    return data;

});