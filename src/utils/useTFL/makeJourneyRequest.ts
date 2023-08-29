// interface JourneyRequestParams{
//     params: string[];
// }

const makeJourneyRequest = (path:string) => {
    return `https://api.tfl.gov.uk${path}`
    // return `https://api.tfl.gov.uk/Journey/JourneyResults/${params[0]}/to/${params[1]}`
}

export default makeJourneyRequest;