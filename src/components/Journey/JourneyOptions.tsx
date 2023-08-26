import { JourneyOptionData } from "@root/types/journey";
import JourneyOption from "./JourneyOption";

interface JourneyOptionsProps {
	journeys: JourneyOptionData[];
}

function JourneyOptions({ journeys }: JourneyOptionsProps) {
	return (
		<>
			<p>Available Journey Options: {journeys.length} </p>
			{journeys.map((option, i) => {
				return <JourneyOption key={i} option={option} optionNum={i+1} />;
			})}
		</>
	);
}

export default JourneyOptions;
