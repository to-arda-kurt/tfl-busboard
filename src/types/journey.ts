export interface JourneyResponse {
	journeys: JourneyOptionData[];
}

export interface JourneyOptionData {
	duration: number;
	startDateTime: Date;
	arrivalDateTime: Date;
    totalCost?: number;
    legs: JourneyLegData[];
    fare: JourneyFare;
}

export interface JourneyLegData {
	duration: number;
    departureTime: Date;
    arrivalTime: Date;
    distance: number;
    instruction: LegInstructionData;

}

export interface LegInstructionData{
    summary: string;
    detailed: string;
}

export interface JourneyFare{
    totalCost?: number
}