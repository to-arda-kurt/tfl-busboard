import { JourneyItem } from "@root/types/journey";
import JourneyOption from "./JourneyOption";

interface JourneyOptionsProps {
	journeys: JourneyItem[];
}

function JourneyOptions({ journeys }: JourneyOptionsProps) {
	return (
		<>
			<p>Available Journey options: {journeys.length} </p>
			{journeys.map((option) => {
				return <JourneyOption option={option} />;
			})}
		</>
	);
}

export default JourneyOptions;
