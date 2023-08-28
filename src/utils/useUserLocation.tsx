import { useState, useEffect } from 'react';

function useUserLocation() {

    interface Location {
        latitude: number,
        longitude: number,
        accuracy: number,
        loaded: boolean,
        errors: ILocationError

    }

    interface ILocationError {
        code: number;
        message: string;
    }

    const [location, setLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        loaded: false,
        errors: {
            code: 1,
            message: ''
        }
    })

    const options : PositionOptions= {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success: PositionCallback = (position) => {
        const coordinate = position.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${coordinate.latitude}`);
        console.log(`Longitude: ${coordinate.longitude}`);
        console.log(`More or less ${coordinate.accuracy} meters.`);
        setLocation({
            ...location,
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            accuracy: coordinate.accuracy,
            loaded: true,
        })
    }

    const errors: PositionErrorCallback = (error) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);
        setLocation({
            ...location,
            errors: {
                code: error.code,
                message: error.message
            },
            loaded: false
        })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    console.log(result);
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return location;
}

export default useUserLocation;