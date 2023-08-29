import { useEffect, useState } from "react";

import useTfl from "@root/utils/useTfl";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyOptionData } from "@root/types/journey";
import JourneyOptions from "@root/components/Journey/JourneyOptions";

export interface TFLResponse {}

function Journey() {
	const [journeys, setJourneys] = useState<JourneyOptionData[]>([]);

	const { isLoading, error, sendRequest: fetchJourney } = useTfl();

	const [startPostCode, setStartPostcode] = useState<string | null>(
		"SE1 9BG"
	);

	const handlePostcodeSet = (newPostCode: string) => {
		if (isValidPostcode(newPostCode)) {
			setStartPostcode(newPostCode);
		}
	};

	useEffect(() => {
		fetchJourney(
			{ endpoint: `/Journey/JourneyResults/${startPostCode}/to/HA1 1QA` },
			setJourneys
		);
	}, [fetchJourney, startPostCode]);

	return (
		<section>
			<h1>Journey Planner</h1>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}

			{journeys && !isLoading && <JourneyOptions journeys={journeys} />}

			<button onClick={() => handlePostcodeSet("NW5 1TL")}>
				Set Start Postcode
			</button>
		</section>
	);
}

export default Journey;
