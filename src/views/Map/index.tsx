import { MapContainer, TileLayer } from 'react-leaflet'
import useUserLocation from "@root/utils/useUserLocation";
import type { MainContextType } from '@root/types/context'
import mainContext from '@root/context/mainContext';
import { useContext, useEffect, useState } from 'react';
import UserLocation from '@root/components/Map/UserLocation';
import { getBusStopPointsbyLonLat } from '@root/api/tflApi';
import BusStopMarker from '@root/components/Map/BusStopMarker';
interface StopPointResponse {
    indicator: string;
    commonName: string;
    naptanId: string;
    lat: number;
    lon: number
}


function Map() {
    const ctx = useContext(mainContext) as MainContextType;
    const { center, setPositionCoordinates, setLoading, setCenterCoordinates } = ctx;

    const userLocation = useUserLocation();

    const [userLocated, setUserLocated] = useState(false)
    const [busStops, setBusStops] = useState<StopPointResponse[]>();
    const [zoom, setZoom] = useState(13)


    const getBusStopsHandler = async () => {
        const response = await getBusStopPointsbyLonLat(userLocation.latitude, userLocation.longitude)
        if (response) {
            setBusStops(response)
        }

        setLoading(false);
        setZoom(10);

    }


    useEffect(() => {
        setLoading(true);

        setPositionCoordinates({
            lat: userLocation.latitude,
            lng: userLocation.longitude
        });

        setCenterCoordinates({
            lat: userLocation.latitude,
            lng: userLocation.longitude
        });

        setUserLocated(true);
        getBusStopsHandler();


    }, [userLocation])

    console.log(busStops);


    return (
        <>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                style={{
                    height: "100vh",
                    position: "absolute",
                    width: "100vw",
                    top: "0px",
                    left: "0px",
                }}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {userLocated && <UserLocation center={center} />}

                {busStops && busStops.map((busStop, i) => {

                    return <BusStopMarker key={i} busStop={busStop} />

                })}


            </MapContainer>
        </>
    )
}

export default Map;