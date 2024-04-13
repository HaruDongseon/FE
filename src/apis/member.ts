import { API_BASE_URL, axiosInstance } from "./apiClient";

interface UserResponseProfile {
    email: string;
    nickname: string;
    profileImageUrl: string;
}

interface UserRequestProfile {
    nickname: string;
    profileImageUrl: string;
}

export async function updateUserProfile({
    nickname,
    profileImageUrl,
}: UserRequestProfile) {
    try {
        const response = await axiosInstance.patch(
            `${API_BASE_URL}/members/me`,
            {
                nickname,
                profileImageUrl,
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}

export async function getUserProfile(): Promise<UserResponseProfile> {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/members/me`);
        return response.data;
    } catch (error) {
        console.error("Error getting profile:", error);
        throw error;
    }
}
