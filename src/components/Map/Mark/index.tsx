import { Marker, Popup, useMapEvents } from "react-leaflet"
import { icon } from "leaflet";

const ICON = icon({
    iconUrl: "./assets/pin.png",
    iconSize: [36, 36],
})


function Mark({ position }) {


    return (
        <Marker position={position} icon={ICON}>
            <Popup>Hello world</Popup>
        </Marker>
    )
}

export default Mark;