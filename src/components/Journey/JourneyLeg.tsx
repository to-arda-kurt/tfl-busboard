import { JourneyLegData } from "@root/types/journey";

interface JourneyLegProps{
    leg: JourneyLegData;
    legNum: number;
}

function JourneyLeg({leg, legNum}: JourneyLegProps) {
	return (
		<ul>
            <li> <h5>Leg #{legNum}</h5></li>
            <li>Time: {leg.departureTime && leg.departureTime.toLocaleString()} </li>
            <li>Duration: {leg.duration} minutes</li>
            <li>Instruction: {leg.instruction.summary}</li>
            <li>{leg.distance && `Distance: ${leg.distance}m`  } </li>
		</ul>
	);
}

export default JourneyLeg;
