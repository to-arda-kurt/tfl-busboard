import { JourneyItem } from "@root/types/journey";

interface JourneyOptionProps{
    option:JourneyItem;
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
		</ul>
	);
}

export default JourneyOption;
