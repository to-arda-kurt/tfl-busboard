import { useContext, useEffect, useState } from "react";
import { getPostcodeInfo } from '@root/api/postcode';

import mainContext from "@root/context/mainContext";

import Map from "@root/views/Map";
import 'leaflet/dist/leaflet.css';


export default function Home() {

  const ctx = useContext(mainContext);
  const { get_console_log } = ctx;

  const [postCode, setPostCode] = useState<string>('');
  const [alert, setAlert] = useState<string>('');
  const [position, setPosition] = useState(null)


  useEffect(() => {

  }, []);


  console.log(position)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostCode(e.target.value);
    get_console_log();
  }

  return (
    <>
      <Map position={position} setPosition={setPosition} />

    </>
  )
}