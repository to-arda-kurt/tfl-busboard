import type { PostcodeInfoData } from '@root/types/postcode'

export const getPostcodeInfo = async (postcode: string): Promise<PostcodeInfoData> => {
    const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
    )

    return await response.json()

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
