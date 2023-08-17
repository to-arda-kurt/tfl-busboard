import { Marker, Popup, useMapEvents } from "react-leaflet"
import { icon } from "leaflet";

const ICON = icon({
    iconUrl: "./assets/pin.png",
    iconSize: [36, 36],
})



function Mark({ center } : Props) {


    return (
        <Marker position={center} icon={ICON}>
            <Popup>Hello world</Popup>
        </Marker>
    )
}

export default Mark;