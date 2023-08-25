import { useEffect, useState } from "react";

import useTfl from "@root/hooks/useTfl";

interface JourneyLeg{
	info: string;
}

function Journey() {

	const [tasks, setTasks] = useState<JourneyLeg[]>([]);
	
	const { isLoading, error, sendRequest: fetchTasks } = useTfl();

	useEffect(() => {
		const transformTasks = (tasksObj:string[]) => {
			const loadedTasks = [];

			for (const line in tasksObj) {
				loadedTasks.push({ info: line });
			}

			setTasks(loadedTasks);
		};

		fetchTasks(
			{
				url: "https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals",
			},
			transformTasks
		);
	}, [fetchTasks]);

	return (
		<>
			<h1>Journey Planner</h1>
			{isLoading? <p>Loading...</p> : "" }
			{error? <p>Error: {error}</p> : "" }
			{tasks? <p>Results: {tasks.length}</p> : "" }


		</>
	);
}

export default Journey;
