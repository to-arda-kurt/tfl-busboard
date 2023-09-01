import { IOnComingBuses } from "@root/types/app";

type Props = {
    onComingBuses: IOnComingBuses[]
}



function OnComingBuses({ onComingBuses }: Props) {
    console.log(onComingBuses)
    return (
        <>

            {onComingBuses.length ? onComingBuses.map(bus => {
                return <div>{bus.lineName} - {bus.destinationName} - {Math.floor((bus.timeToStation/60))} mins</div>

            }) :
                <p>No bus soon, go away!</p>}

        </>
    )
}

export default OnComingBuses