import type { PostcodeInfoData } from '@root/types/app'

export const getPostcodeInfo = async (postcode: string): Promise<PostcodeInfoData> => {
    const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
    )

    const data = await response.json()
    return data.result;

}

// api.postcodes.io/postcodes?lon=
// :longitude
// &lat=
// :latitude



export const getNearestPostcode = async (postcode: string): Promise<PostcodeInfoData> => {
    const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
    )

    return await response.json()

}
