import { useEffect, useState } from "react";

import { useContext } from "react";
import useTfl from "@root/utils/useTFL";
import { isValidPostcode } from "@root/helper/validation";
import { JourneyResponse } from "@root/types/journey";
import JourneyOptions from "@root/components/Journey/JourneyOptions";

import mainContext from "@root/context/mainContext";

import type { MainContextType } from "@root/types/context";
import { MapContainer, TileLayer } from "react-leaflet";
import JourneysMapDrawing from "@root/components/Map/JourneysMapDrawing";

export interface TFLResponse {}

const Journey = () => {
	const ctx = useContext(mainContext) as MainContextType;
	const { loading } = ctx;
	const [path, setPath] = useState("");
	const [validPostcode, setValidPostcode] = useState(false);

	console.log("FROM JOURNEY");
	console.log(loading);

	const [postCodes, setPostcodes] = useState({
		start: "",
		end: "",
	});

	console.log(`Before USETFL ${validPostcode}`);
	const { isLoading, error, data } = useTfl<JourneyResponse>(
		path,
		validPostcode
	);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setPostcodes({
			...postCodes,
			[e.target.name]: value,
		});
	};

	useEffect(() => {
		if (
			isValidPostcode(postCodes.start) &&
			isValidPostcode(postCodes.end)
		) {
			setPath(
				`/Journey/JourneyResults/${postCodes.start}/to/${postCodes.end}`
			);
			setValidPostcode(true);
		}
	}, [postCodes]);

	return (
		<section>
			<div style={{ zIndex: "1000", position: "relative", width:"50vw" }}>
				<h1>Journey Planner</h1>

				<input
					type="text"
					onChange={onChangeHandler}
					name={`start`}
					value={postCodes.start}
				/>
				<input
					type="text"
					onChange={onChangeHandler}
					name={`end`}
					value={postCodes.end}
				/>

				{error && <p>Error: {error}</p>}

				{data && !isLoading && (
					<JourneyOptions journeys={data.journeys} />
				)}
			</div>

			<div style={{ width: "50vw" }}>
				<MapContainer
					center={[51.553935, -0.144754]}
					zoom={13}
					scrollWheelZoom={true}
					style={{
						height: "100vh",
						position: "absolute",
						width: "100vw",
						top: "0px",
						left: "0px",
					}}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{data && !isLoading && (
						<JourneysMapDrawing journeys={data.journeys} />
					)}
					
				</MapContainer>
			</div>
		</section>
	);
};

export default Journey;
