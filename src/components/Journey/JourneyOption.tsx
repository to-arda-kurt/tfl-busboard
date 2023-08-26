import { JourneyOptionData } from "@root/types/journey";
import JourneyLeg from "./JourneyLeg";

interface JourneyOptionProps{
    option:JourneyOptionData;
}

function JourneyOption({option}: JourneyOptionProps) {
	return (
		<ul>
			<li>Options</li>
			<li>{option.duration}</li>
			<li>{option.fare.totalCost}</li>
			<li>{option.startDateTime && option.startDateTime.toLocaleString()}</li>
			<li>
				{option.arrivalDateTime && option.arrivalDateTime.toLocaleString()}
			</li>
            <li>
            {option.legs.map((leg) => {
				return <JourneyLeg leg={leg} />;
			})}
            </li>
		</ul>
	);
}

export default JourneyOption;
