const POSTCODE = import.meta.env.VITE_NASA_API_KEY;

import type { PostcodeInfoData } from '@root/types/postocde'

export const getPostcodeInfo = async (postcode: string): Promise<PostcodeInfoData> => {
    const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
    )

    return await response.json()

}