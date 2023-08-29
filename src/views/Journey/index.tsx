import { useState } from "react";


import {useContext } from "react";
import useTfl from "@root/utils/useTFL";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyOptionData, JourneyResponse } from "@root/types/journey";
import JourneyOptions from "@root/components/Journey/JourneyOptions";

import mainContext from "@root/context/mainContext";

import type { MainContextType } from "@root/types/context";

export interface TFLResponse {}

const Journey = () => {
	const { isLoading, error, data } = useTfl<JourneyResponse>("/Journey/JourneyResults/NW5 1TL/to/HA1 1QA");

	const ctx = useContext(mainContext) as MainContextType;
	const { loading } = ctx;

	const [startPostCode, setStartPostcode] = useState<string | null>(
		"SE1 9BG"
	);

	const handlePostcodeSet = (newPostCode: string) => {
		if (isValidPostcode(newPostCode)) {
			setStartPostcode(newPostCode);
		}
	};

	return (
		<section>
			<h1>Journey Planner</h1>
			{isLoading && <p>Loading...</p>}
			{loading && <p>Context Loading...</p>}
			{error && <p>Error: {error}</p>}

			{data && !isLoading && <JourneyOptions journeys={data.journeys} />}

			<button onClick={() => handlePostcodeSet("NW5 1TL")}>
				Set Start Postcode
			</button>
		</section>
	);
}

export default Journey;
