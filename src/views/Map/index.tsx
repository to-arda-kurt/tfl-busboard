import { MapContainer, TileLayer } from 'react-leaflet'
import useUserLocation from "@root/utils/useUserLocation";
import type { MainContextType } from '@root/types/context'
import mainContext from '@root/context/mainContext';
import { useContext, useEffect, useState } from 'react';
import UserLocation from '@root/components/Map/UserLocation';
import { getBusStopPointsbyLonLat } from '@root/api/tflApi';


function Map() {
    const ctx = useContext(mainContext) as MainContextType;
    const { center, setPositionCoordinates, setLoading, position, setBusstops } = ctx;

    const userLocation = useUserLocation();
    console.log(userLocation);

    const [isBusstopLoad, setIsBusstopLoad] = useState(false)

    const getBusStopsHandler = async () => {
        try {
            const response = await getBusStopPointsbyLonLat(position[0], position[1])

            setBusstops(response);
            console.log(response)
            setIsBusstopLoad(true);
        } catch (error) {
            console.log(error)
            setIsBusstopLoad(false);
        }

    }


    useEffect(() => {
        setLoading(true);
        setPositionCoordinates({
            lat: userLocation.latitude,
            lng: userLocation.longitude
        });

        const interval = setInterval(() => {
            setLoading(false)
        }, 3000);

        // getBusStopsHandler();

        return () => {
            clearInterval(interval);
        }



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    return (
        <>
            <MapContainer
                center={center}
                zoom={13}
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

                <UserLocation center={center} />

            </MapContainer>
        </>
    )
}

export default Map;