import { MapContainer, TileLayer } from 'react-leaflet'
import useUserLocation from "@root/utils/useUserLocation";
import type { MainContextType } from '@root/types/context'
import mainContext from '@root/context/mainContext';
import { useContext, useEffect } from 'react';
import UserLocation from '@root/components/Map/UserLocation';



function Map() {

    const ctx = useContext(mainContext) as MainContextType;
    const { center, setCenterCoordinates, setLoading } = ctx;

    const userLocation = useUserLocation();



    useEffect(() => {

        setLoading(true);

        setCenterCoordinates({
            lat: userLocation.latitude,
            lng: userLocation.longitude
        });

        const interval = setInterval(() => {
            setLoading(false)
        }, 2000);


        return () => {

            clearInterval(interval);

        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLocation])




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
                    {/* <UserLocationMarker position={position} setPosition={setPosition} /> */}
                    {/* <MapController position={position} /> */}

                    <UserLocation center={center} />

                </MapContainer>
        </>
    )
}

export default Map;