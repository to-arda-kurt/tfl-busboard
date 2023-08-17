import Map from "@root/views/Map";
import 'leaflet/dist/leaflet.css';



export default function Home() {



  // const [position, setPosition] = useState({
  //   lat: 0,
  //   lng: 0
  // });

  // useEffect(() => {
  //   setPosition((prevState) => ({
  //     ...prevState,
  //     lat: userLocation.latitude,
  //     lng: userLocation.longitude
  //   }));

  // }, [userLocation])




  return (
    <>
      <Map />

    </>
  )
}