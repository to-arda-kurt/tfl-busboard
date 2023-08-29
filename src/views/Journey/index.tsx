import { useEffect, useState } from "react";


import { useContext } from "react";
import useTfl from "@root/utils/useTFL";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyResponse } from "@root/types/journey";
import JourneyOptions from "@root/components/Journey/JourneyOptions";

import mainContext from "@root/context/mainContext";

import type { MainContextType } from "@root/types/context";

export interface TFLResponse { }

const Journey = () => {
	const ctx = useContext(mainContext) as MainContextType;
	const { loading } = ctx;
	const [path, setPath] = useState('');
	const [validPostcode, setValidPostcode] = useState(false);

	console.log('FROM JOURNEY')
	console.log(loading);

	const [postCodes, setPostcodes] = useState(
		{
			start: "",
			end: ""
		}
	);


	console.log(`Before USETFL ${validPostcode}`);
	const { isLoading, error, data } = useTfl<JourneyResponse>(path, validPostcode);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setPostcodes({
			...postCodes,
			[e.target.name]: value
		})
	}


	useEffect(() => {
		if (isValidPostcode(postCodes.start) && isValidPostcode(postCodes.end)) {
			setPath(`/Journey/JourneyResults/${postCodes.start}/to/${postCodes.end}`);
			setValidPostcode(true)
		}
	}, [postCodes])


	return (
		<section>
			<h1>Journey Planner</h1>

			<input type="text" onChange={onChangeHandler} name={`start`} value={postCodes.start} />
			<input type="text" onChange={onChangeHandler} name={`end`} value={postCodes.end} />
			{error && <p>Error: {error}</p>}

			{data && !isLoading && <JourneyOptions journeys={data.journeys} />}


		</section>
	);
}

export default Journey;
