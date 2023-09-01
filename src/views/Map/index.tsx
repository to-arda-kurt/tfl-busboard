import { MapContainer, TileLayer } from "react-leaflet";
import useUserLocation from "@root/utils/useUserLocation";
import type { MainContextType } from "@root/types/context";
import mainContext from "@root/context/mainContext";
import { useContext, useEffect, useState } from "react";
import UserLocation from "@root/components/Map/UserLocation";
import { getBusStopPointsbyLonLat } from "@root/api/tflApi";
import BusStopMarker from "@root/components/Map/BusStopMarker";
import { PositionType, StopPointResponse } from "@root/types/app";
import { getPostcodeInfo } from "@root/api/postcode";
import { isValidPostcode } from "@root/helper/validation";


function Map() {
    const ctx = useContext(mainContext) as MainContextType;

    const {
        postcode,
        setLoading,
        locationSource
    } = ctx;

    const [center, setCenter] = useState<PositionType>({
        lat: 51.553935,
        lng: -0.144754,
    });

    const [busStops, setBusStops] = useState<StopPointResponse[]>();

    const userLocation = useUserLocation();

    const getBusStopsHandler = async () => {

        const response = await getBusStopPointsbyLonLat(center.lat, center.lng);
        if (response) {
            setBusStops(response);
        }
        setLoading(false);

    };

    const getPostcodeHandler = async () => {
        if (isValidPostcode(postcode)) {
            const response = await getPostcodeInfo(postcode);
            if (response) {
                console.log(response);
                setCenter({ lat: response.latitude, lng: response.longitude });
            }
        }
        setLoading(false);

    };

    useEffect(() => {
        if (locationSource === "userLocation") {
            setLoading(true);
            console.log(`${locationSource}`);
            setCenter({
                lat: userLocation.latitude,
                lng: userLocation.longitude,
            });
            getBusStopsHandler();
            console.log('aftergetbusstopshandler')
        }
    }, [locationSource]);




    useEffect(() => {
        getPostcodeHandler();
    }, [postcode]);

    useEffect(() => {
        getBusStopsHandler()
    }, [])

    return (
        <>
            <MapContainer
                center={[51.553935, -0.144754]}
                zoom={13}
                scrollWheelZoom={true}
                style={{
                    height: "100vh",
                    position: "absolute",
                    width: "100vw",
                    top: "0px",
                    left: "0px",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <UserLocation center={center} getBusStopsHandler={getBusStopsHandler} />

                {busStops &&
                    busStops.map((busStop, i) => {
                        return <BusStopMarker key={i} busStop={busStop}  />;
                    })}
            </MapContainer>
        </>
    );
}

export default Map;
