import { JourneyLegData } from "@root/types/journey";

interface JourneyLegProps{
    leg:JourneyLegData;
}

function JourneyLeg({leg}: JourneyLegProps) {
	return (
		<ul>
            <li>Leg #</li>
            <li>Time: {leg.departureTime && leg.departureTime.toLocaleString()} </li>
            <li>Duration: {leg.duration} </li>
            <li>Instruction: {leg.instruction.summary}</li>
            <li>{leg.distance && `Distance: ${leg.distance}`  } </li>
		</ul>
	);
}

export default JourneyLeg;
