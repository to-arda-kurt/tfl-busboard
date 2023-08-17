import { MapContainer, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet'
import useUserLocation from "@root/utils/useUserLocation";
import Mark from '@root/components/Map/Mark';
import type { MainContextType } from '@root/types/context'
import mainContext from '@root/context/mainContext';
import { useContext, useEffect, useRef, useState } from 'react';

const MapController = ({ position }) => {

    const map = useMapEvent('click', () => {
        map.setView(position, 16)
    
    })
    return null
};

function Map() {

    const ctx = useContext(mainContext) as MainContextType;
    const { position, center, setCenterCoordinates, loading, setLoading } = ctx;

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
                <MapController position={position} />
                <Mark center={center} />

            </MapContainer>
        </>
    )
}

export default Map;