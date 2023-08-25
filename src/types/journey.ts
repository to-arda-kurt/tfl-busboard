export interface JourneyResponse {
	journeys: JourneyItem[];
}

export interface JourneyItem {
	duration: number;
	startDateTime: Date;
}