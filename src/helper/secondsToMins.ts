export const secondsToMins = (seconds : number) => {
    const minutes = Math.floor(seconds / 60);

    if( minutes === 0){
        return "< 1 min"
    }

    if(minutes === 1){
        return "1 min"
    }

    if(minutes < 100){
        return `${minutes} mins`
    }

    return `> 99 mins`

}