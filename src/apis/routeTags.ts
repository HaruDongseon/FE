import { axiosInstance, API_BASE_URL } from "./apiClient";

export interface RouteTag {
    id: number;
    name: string;
    selectCount: number;
}

export async function getRouteTags(keyword: string): Promise<RouteTag[]> {
    try {
        const response = await axiosInstance.get(
            `${API_BASE_URL}/route-tags/search?keyword=${keyword}`,
        );
        return response.data.routeTags;
    } catch (error) {
        console.error("Error fetching route tags:", error);
        throw error;
    }
}
