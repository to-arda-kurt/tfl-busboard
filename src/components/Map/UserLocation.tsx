import { useEffect } from "react";
import { useMap } from "react-leaflet";
import Mark from "./Mark";
import type { Center } from "@root/types/context";
import { LatLngTuple } from "leaflet";

type Props = {
	center: Center;
	getBusStopsHandler: () => void;
};
const UserLocation = ({ center, getBusStopsHandler }: Props) => {
	const map = useMap();


	useEffect(() => {
		const bounds:LatLngTuple = [center.lat, center.lng]
		const boundsOptions = {maxZoom:16}

		console.log(`flying to ${center.lat} , ${center.lng} `)

		map.flyToBounds([bounds], boundsOptions);
	
		getBusStopsHandler();
		

		// map.setView(bounds)

	}, [center, map]);

	return center ? (
		<>
			<Mark center={center} />
		</>
	) : null;
};

export default UserLocation;
