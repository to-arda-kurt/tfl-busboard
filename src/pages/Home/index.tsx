import { useContext, useEffect, useState } from "react";
import useUserLocation from "@root/utils/useUserLocation";
import mainContext from "@root/context/mainContext";

import Map from "@root/views/Map";
import 'leaflet/dist/leaflet.css';
import { useLocation } from "react-router-dom";



export default function Home() {

  const ctx = useContext(mainContext);
  const { get_console_log, loading } = ctx;

  const userLocation = useUserLocation()

  console.log(userLocation)

  const [position, setPosition] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    console.log(userLocation)

    setPosition((prevState) => ({
      ...prevState,
      lat: userLocation.latitude,
      lng: userLocation.longitude
    }));

  }, [userLocation])


  console.log(position)

  return (
    <>
      <Map position={position} setPosition={setPosition} />

    </>
  )
}