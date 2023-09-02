import { secondsToMins } from "@root/helper/secondsToMins";
import { IOnComingBuses } from "@root/types/app";

type Props = {
	onComingBuses: IOnComingBuses[];
};

function OnComingBuses({ onComingBuses }: Props) {
	console.log(onComingBuses);
	return (
		<>
			<ul className="BusStopMarker--oncomingbusses">
				{onComingBuses.length ? (
					onComingBuses.map((bus, i) => {
						return (
							<li key={`${bus.lineName} ${i}`}>
								<span>{bus.lineName}</span>
								<span>{bus.destinationName}</span>
								<span>{secondsToMins(bus.timeToStation)}</span>
							</li>
						);
					})
				) : (
					<p>No bus soon, go away!</p>
				)}
			</ul>
		</>
	);
}

export default OnComingBuses;
