export interface JourneyResponse {
	journeys: JourneyItem[];
}

export interface JourneyItem {
	duration: number;
	startDateTime: Date;
	arrivalDateTime: Date;
    totalCost: number;
    legs: JourneyLegs[];
    fare: JourneyFare;
}

export interface JourneyLegs {
	duration: number;
    departureTime: Date;
    arrivalTime: Date;
    distance: number;
    instruction: LegInstruction;

}

export interface LegInstruction{
    summary: string;
    detailed: string;
}

export interface JourneyFare{
    totalCost: number
}