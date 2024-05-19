import { axiosInstance, API_BASE_URL } from "./apiClient";

export interface SearchedPlace {
    id: number;
    keyword: string;
}

export async function addSearchedPlace(keyword: string) {
    try {
        const response = await axiosInstance.post(
            `${API_BASE_URL}/searched-places`,
            {
                keyword,
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error adding searched place:", error);
        throw error;
    }
}

export async function getRecentSearchedPlaces(): Promise<SearchedPlace[]> {
    try {
        const response = await axiosInstance.get(
            `${API_BASE_URL}/searched-places/recent`,
        );
        return response.data.searchedPlaces;
    } catch (error) {
        console.error("Error fetching recent searched places:", error);
        throw error;
    }
}

export async function removeSearchedPlace(searchedPlaceId: number) {
    try {
        const response = await axiosInstance.delete(
            `${API_BASE_URL}/searched-places/${searchedPlaceId}`,
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error removing searched place with ID ${searchedPlaceId}:`,
            error,
        );
        throw error;
    }
}

export async function removeSearchedPlaceAll() {
    try {
        const response = await axiosInstance.delete(
            `${API_BASE_URL}/searched-places`,
        );
        return response.data;
    } catch (error) {
        console.error("Error removing all searched places:", error);
        throw error;
    }
}
