import { axiosInstance, API_BASE_URL } from "./apiClient";

export interface SearchedPlace {
    id: number;
    keyword: string;
}

export const addSearchedPlace = async (
    keyword: string,
): Promise<SearchedPlace> => {
    try {
        const response = await axiosInstance.post<SearchedPlace>(
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
};

export const getRecentSearchedPlaces = async (): Promise<SearchedPlace[]> => {
    try {
        const response = await axiosInstance.get<{
            searchedPlaces: SearchedPlace[];
        }>(`${API_BASE_URL}/searched-places/recent`);
        return response.data.searchedPlaces;
    } catch (error) {
        console.error("Error fetching recent searched places:", error);
        throw error;
    }
};

export const removeSearchedPlace = async (
    searchedPlaceId: number,
): Promise<void> => {
    try {
        await axiosInstance.delete(
            `${API_BASE_URL}/searched-places/${searchedPlaceId}`,
        );
    } catch (error) {
        console.error(
            `Error removing searched place with ID ${searchedPlaceId}:`,
            error,
        );
        throw error;
    }
};

export const removeSearchedPlaceAll = async (): Promise<void> => {
    try {
        await axiosInstance.delete(`${API_BASE_URL}/searched-places`);
    } catch (error) {
        console.error("Error removing all searched places:", error);
        throw error;
    }
};
