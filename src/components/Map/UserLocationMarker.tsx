import { useContext } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { icon } from "leaflet";
import mainContext from '@root/context/mainContext';

const ICON = icon({
    iconUrl: "./assets/pin.png",
    iconSize: [36, 36],
})


const UserLocationMarker = ({ position, setPosition }: Props) => {

    const ctx = useContext(mainContext);
    const { get_console_log, loading, setLoading } = ctx;

    const map = useMapEvents({
        click() {
            setLoading(true)
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            setLoading(false)
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={ICON}>
            <Popup>You are here</Popup>
        </Marker>
    )
}


export default UserLocationMarker;