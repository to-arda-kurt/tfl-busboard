import { useEffect, useState } from "react";

import useTfl from "@root/utils/useTfl";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyOptionData, JourneyResponse } from "@root/types/journey";
import JourneyOptions from "@root/components/Journey/JourneyOptions";

export interface TFLResponse {}

function Journey() {
	const [journeys, setJourneys] = useState<JourneyOptionData[]>([]);
	const { isLoading, error, sendRequest: fetchJourney } = useTfl();

	// const [startPostCode, setStartPostcode] = useState<string | null>(null);
	const [startPostCode, setStartPostcode] = useState<string | null>(
		"SE1 9BG"
	);

	const handlePostcodeSet = (newPostCode: string) => {
		if (isValidPostcode(newPostCode)) {
			setStartPostcode(newPostCode);
		}
	};

	useEffect(() => {
		const transformJourneyResponse = (data: JourneyResponse) => {
			const loadedJourneys: Array<JourneyOptionData> = [];

			const journeys = data.journeys;

			for (const line of journeys) {
				loadedJourneys.push(line);
			}
			setJourneys(loadedJourneys);
		};

		fetchJourney(
			{
				endpoint: `/Journey/JourneyResults/${startPostCode}/to/HA1 1QA`,
			},
			transformJourneyResponse
		);
	}, [fetchJourney, startPostCode]);

	return (
		<>
			<h1>Journey Planner</h1>
			{isLoading && <p>Loading...</p> }
			{error && <p>Error: {error}</p>}

			{journeys && <JourneyOptions journeys={journeys} /> }

			<button onClick={() => handlePostcodeSet("NW5 1TL")}>
				Set Start Postcode
			</button>
		</>
	);
}

export default Journey;
