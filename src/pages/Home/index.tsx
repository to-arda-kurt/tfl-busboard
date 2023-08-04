import { useEffect } from "react";
import {getPostcodeInfo} from '@root/api/postcode';

export default function Home() {

  useEffect(() => {
    getPostcodeInfo('n52td')
      .then((result) => {
        console.log(result)
      })
      .catch(() => {
        console.log('What')
      });
  }, []);
  return (
    <>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    <p>HOMEPAGE</p>
    </>
  )
}