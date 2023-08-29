import { JourneyOptionData } from "@root/types/journey";
import JourneyLeg from "./JourneyLeg";

interface JourneyOptionProps {
	option: JourneyOptionData;
	optionNum: number;
}

function JourneyOption({ option, optionNum }: JourneyOptionProps) {
	return (
		<ul>
			<li><h3>Option #{optionNum}</h3></li>
			<li><h4>Details</h4></li>
			<li>Journey Duration: {option.duration}</li>
			{option.fare && option.fare.totalCost && <li>Total cost: £{(option.fare.totalCost / 100).toFixed(2)}</li>}
			<li>{option.startDateTime && `Start: ${option.startDateTime.toLocaleString()}`}</li>
			<li>
				{option.arrivalDateTime && `End: ${option.arrivalDateTime.toLocaleString()}`}
			</li>
			<li><h4>Journey Legs</h4></li>
			<li>
				{option.legs.map((leg, i) => {
					return <JourneyLeg key={i} leg={leg} legNum={i + 1} />;
				})}
			</li>
		</ul>
	);
}

export default JourneyOption;
