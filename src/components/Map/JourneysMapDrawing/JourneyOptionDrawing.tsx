import { JourneyOptionData } from "@root/types/journey";
import { LatLngExpression } from "leaflet";
import { Polyline } from "react-leaflet";

interface JourneyOptionDrawingProps {
	option: JourneyOptionData;
	optionNum: number;
}

const JourneyOptionDrawing = ({ option }: JourneyOptionDrawingProps) => {
	const lineOptions = { color: "lime", fillColor: 'blue' };

	if (option.legs.length > 1) {
		const legOne: LatLngExpression[] = [
			[
				option.legs[0].departurePoint.lat,
				option.legs[0].departurePoint.lon,
			],
			[
				option.legs[1].departurePoint.lat,
				option.legs[1].departurePoint.lon,
			],
		];

		console.log(`Leg One: ${legOne}`);

		return <Polyline pathOptions={lineOptions} positions={legOne} />;
	}

};

export default JourneyOptionDrawing;
