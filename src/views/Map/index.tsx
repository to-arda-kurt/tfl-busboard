import { MapContainer, TileLayer } from 'react-leaflet'
import UserLocationMarker from '@root/components/Map/UserLocationMarker'
import Mark from '@root/components/Map/Mark';


function Map({ position }: Props) {

    

    return (
        <>
            <MapContainer
                center={{ lat: 51.505, lng: -0.09 }}
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
                <Mark position={position} />
          
            </MapContainer>
        </>
    )
}

export default Map;