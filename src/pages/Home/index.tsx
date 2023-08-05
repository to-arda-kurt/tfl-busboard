import { useEffect, useState } from "react";
import { getPostcodeInfo } from '@root/api/postcode';

import Map from "@root/views/Map";
import 'leaflet/dist/leaflet.css';


export default function Home() {

  const [postCode, setPostCode] = useState<string>('');
  const [alert, setAlert] = useState<string>('');
  const [position, setPosition] = useState(null)


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
      <Map position={position} setPosition={setPosition} />

    </>
  )
}