import { Marker, Popup} from "react-leaflet"
import { icon } from "leaflet";
import { IOnComingBuses, StopPointResponse } from "@root/types/app";
import { useEffect, useState } from "react";
import { getOnComingBusses } from "@root/api/tflApi";
import OnComingBuses from "../OnComingBuses";




const ICON = icon({
    iconUrl: "./assets/bus-stop.png",
    iconSize: [36, 36],
})

type Props = {
    busStop: StopPointResponse
}




function BusStopMarker({ busStop } : Props) {
   

    const [onComingBuses, setOncomingBuses] = useState<IOnComingBuses[]>();

    const onComingBusesHandler = async () => {
        const response = await getOnComingBusses(busStop.naptanId)
        console.log(response)
        setOncomingBuses(response);
    }

    useEffect(() => {

    }, [])
        

    return (
        <Marker position={{ lat: busStop.lat, lng: busStop.lon }} icon={ICON} eventHandlers={{
            click: () => {
                onComingBusesHandler()
            },
          }}>
            <Popup>{busStop.indicator} - {busStop.commonName}

                    {/* Component here to send all buss information */}
                    {onComingBuses && <OnComingBuses onComingBuses={onComingBuses} /> }

            
            </Popup>
        </Marker>
    )
}

export default BusStopMarker;