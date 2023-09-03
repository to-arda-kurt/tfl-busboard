import { JourneyOptionData } from "@root/types/journey";
import JourneyOptionDrawing from "./JourneyOptionDrawing";

interface JourneyOptionsProps {
	journeys: JourneyOptionData[];
}

function JourneysMapDrawing({ journeys }: JourneyOptionsProps) {
	return (
		<>
			{journeys.map((option, i) => {
				return (
					<JourneyOptionDrawing
						key={i}
						option={option}
						optionNum={i + 1}
					/>
				);
			})}
		</>
	);
}

export default JourneysMapDrawing;
