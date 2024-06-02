import axios from "axios";
import { GOOGLE_API_KEY } from "@env";

export interface LanguageWithText {
    text: string;
    languageCode: string;
}

export interface GooglePlace {
    id: string;
    formattedAddress: string;
    displayName: LanguageWithText;
    primaryTypeDisplayName?: LanguageWithText;
}

export const getGooglePlaces = async (
    query: string,
): Promise<GooglePlace[]> => {
    const apiURl = `https://places.googleapis.com/v1/places:searchText`;
    const headers = {
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
            "places.id,places.displayName,places.formattedAddress,places.primaryTypeDisplayName",
    };
    const data = {
        textQuery: query,
    };

    try {
        const response = await axios.post(apiURl, data, {
            headers,
        });
        return response.data.places;
    } catch (error) {
        console.error("Error fetching places:", error);
        throw error;
    }
};
