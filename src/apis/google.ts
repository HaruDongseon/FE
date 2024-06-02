import axios from "axios";
import { axiosInstance } from "./apiClient";
import { GOOGLE_API_KEY } from "@env";

export interface DisplayName {
    text: string;
    languageCode: string;
}

export interface GooglePlace {
    formattedAddress: string;
    displayName: DisplayName;
    priceLevel?: number;
}

export const getGooglePlaces = async (
    query: string,
): Promise<GooglePlace[]> => {
    const apiURl = `https://places.googleapis.com/v1/places:searchText`;
    const headers = {
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
            "places.displayName,places.formattedAddress,places.priceLevel",
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
