import { JourneyOptionData } from "@root/types/journey";
import { LatLngExpression } from "leaflet";
import { Polyline } from "react-leaflet";

interface JourneyOptionDrawingProps {
	option: JourneyOptionData;
	optionNum: number;
}

const JourneyOptionDrawing = ({ option }: JourneyOptionDrawingProps) => {
	const lineOptions = { color: "lime", fillColor: "blue" };

	const legs: LatLngExpression[] = [];

	option.legs.forEach((leg) => {
		legs.push([leg.departurePoint.lat, leg.departurePoint.lon]);
	});
    console.log(`legs: ${legs}`)

	return <Polyline pathOptions={lineOptions} positions={legs} />;
};

export default JourneyOptionDrawing;
