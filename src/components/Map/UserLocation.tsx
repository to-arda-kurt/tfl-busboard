import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import Mark from "./Mark";
import type { Center } from "@root/types/context";

type Props = {
    center: Center
}
const UserLocation = ({ center }: Props) => {
    const map = useMap();
    const [position, setPosition] = useState<Center | null>(null)

    useEffect(() => {
        map.locate({
            setView: true
        })
        map.on('locationfound', () => {
            setPosition(center)
        })
    }, [center, map])


    return position
        ? (
            <>
                <Mark center={center} />
            </>
        )
        : null
}

export default UserLocation