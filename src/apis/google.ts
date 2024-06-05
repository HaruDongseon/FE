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

export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface Time {
    openNow: boolean;
    periods: any;
    weekdayDescriptions: string[];
}

export interface Photo {
    name: string;
}

export interface PlaceDetail {
    id: string;
    displayName: LanguageWithText;
    location: Coordinate;
    formattedAddress: string;
    nationalPhoneNumber?: string;
    primaryTypeDisplayName?: LanguageWithText;
    parkingOptions?: boolean;
    reservable?: boolean;
    websiteUri?: string;
    currentOpeningHours?: Time;
    photos?: Photo[];
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

export const getGooglePlaceDetail = async (
    placeId: string,
): Promise<PlaceDetail> => {
    const apiURl = `https://places.googleapis.com/v1/places/${placeId}`;

    const headers = {
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
            "id,displayName,formattedAddress,nationalPhoneNumber,location,primaryTypeDisplayName,parkingOptions,reservable,websiteUri,currentOpeningHours,photos",
    };

    try {
        const response = await axios.get(apiURl, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching places:", error);
        throw error;
    }
};
