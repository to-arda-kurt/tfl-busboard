import { useEffect, useState } from "react";

import useTfl from "@root/utils/useTfl";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyItem, JourneyResponse } from "@root/types/journey";
import JourneyOption from "@root/components/Journey/JourneyOption";

export interface TFLResponse {}

function Journey() {
	const [journey, setJourney] = useState<JourneyItem[]>([]);
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
		const transformResponse = (data: JourneyResponse) => {
			const loadedJourneys: Array<JourneyItem> = [];

			const journeys = data.journeys;

			for (const line of journeys) {
				loadedJourneys.push(line);
			}
			setJourney(loadedJourneys);
		};

		fetchJourney(
			{
				endpoint: `/Journey/JourneyResults/${startPostCode}/to/HA1 1QA`,
			},
			transformResponse
		);
	}, [fetchJourney, startPostCode]);

	return (
		<>
			<h1>Journey Planner</h1>
			{isLoading && <p>Loading...</p> }
			{error && <p>Error: {error}</p>}
			{journey && <p>Available Journey options: {journey.length}</p> }

			{journey &&
				journey.map((leg) => {
					return <JourneyOption option={leg} />;
				})}

			

			<button onClick={() => handlePostcodeSet("NW5 1TL")}>
				Set Start Postcode
			</button>
		</>
	);
}

export default Journey;