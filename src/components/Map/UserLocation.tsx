import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import Mark from "./Mark";



const UserLocation = ({ center } : Props) => {
    const map = useMap();
    const [position, setPosition] = useState(null)

    useEffect(() => {
        map.locate({
            setView: true
        })
        map.on('locationfound', (event) => {
            setPosition(center)
        })
    }, [map])


    return position
        ? (
            <>
               <Mark center={center} />
            </>
        )
        : null
}

export default UserLocation