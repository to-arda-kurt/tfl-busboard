import { useEffect, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import Mark from "./Mark";
import type { Center } from "@root/types/context";
import { LatLngTuple } from "leaflet";

type Props = {
	center: Center;
};
const UserLocation = ({ center }: Props) => {
	const map = useMap();

	useEffect(() => {
		const bounds:LatLngTuple = [center.lat, center.lng]

		console.log(`flying to ${center.lat} , ${center.lng} `)
		map.flyToBounds([bounds]);

		// map.setView(bounds)

	}, [center, map]);

	return center ? (
		<>
			<Mark center={center} />
		</>
	) : null;
};

export default UserLocation;
