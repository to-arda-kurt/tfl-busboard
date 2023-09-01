import { Marker, Popup} from "react-leaflet"
import { icon } from "leaflet";
import { StopPointResponse } from "@root/types/app";
// import { useState } from "react";



const ICON = icon({
    iconUrl: "./assets/bus-stop.png",
    iconSize: [36, 36],
})

type Props = {
    busStop: StopPointResponse
}


function BusStopMarker({ busStop } : Props) {
   
    // const[onComingBusses, setOncomingBusses] = useState();

    return (
        <Marker position={{ lat: busStop.lat, lng: busStop.lon }} icon={ICON}>
            <Popup>{busStop.indicator} - {busStop.commonName}</Popup>
        </Marker>
    )
}

export default BusStopMarker;