import { useEffect, useState } from "react";
import { getPostcodeInfo } from '@root/api/postcode';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';






export default function Home() {

  const [postCode, setPostCode] = useState<string>('');
  const [alert, setAlert] = useState<string>('');




  function UserLocationMarker() {

    const [position, setPosition] = useState(null)
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
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  useEffect(() => {
    getPostcodeInfo(postCode)
      .then((result) => {
        console.log(result)
      })
      .catch(() => {
        console.log('What')
      });
  }, [postCode]);





  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostCode(e.target.value);
  }

  return (
    <>
      <h1>Get me somewhere</h1>

      <input type='text' value={postCode} onChange={onChangeHandler} />
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh",
          position: "absolute",
          width: "100vw",
          top: "0px",
          left: "0px",}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserLocationMarker />
      </MapContainer>

    </>
  )
}