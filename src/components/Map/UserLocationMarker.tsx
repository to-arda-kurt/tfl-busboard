import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { icon } from "leaflet"


const ICON = icon({
    iconUrl: "./assets/pin.png",
    iconSize: [36, 36],
  })


const UserLocationMarker = ({ position, setPosition }: Props) => {
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={ICON}>
            <Popup>You are here</Popup>
        </Marker>
    )
}


export default UserLocationMarker;