import { Circle, Marker, Popup } from "react-leaflet"
import { icon } from "leaflet";
import type { Center } from "@root/types/context";

const ICON = icon({
    iconUrl: "./assets/pin.png",
    iconSize: [36, 36],
})

type Props = {
    center: Center;

}


function Mark({ center }: Props) {


    return (
        <>
            <Circle center={center} weight={1} color={'red'} fillColor={'red'} fillOpacity={0.2} radius={600}></Circle>
            <Marker position={center} icon={ICON}>
                <Popup>You're here!</Popup>
            </Marker>
        </>

    )
}

export default Mark;