import { API_BASE_URL, axiosInstance } from "./apiClient";

interface UserProfile {
    email: string;
    nickname: string;
    profileImageUrl: string;
}

export async function updateUserProfile() {
    const url = API_BASE_URL + "/members/me";
    const headers = {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwibWVtYmVySWQiOjIsImlhdCI6MTUxNjIzOTAyMn0.B71yavddo1fTGjN7KLFlZQJgO9A78ipmNau_Lt8US17RzoVL2Gshjd7BhIPRT2JsQp8nlcAAiLfXSruj7Q0FHw`,
    };
    const data = {
        nickname: "",
        profileImageUrl: "",
    };

    try {
        const response = await axiosInstance.patch(url, data, {
            headers: headers,
        });
        console.log("Profile updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}

export async function getUserProfile(): Promise<UserProfile> {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/members/me`);
        return response.data;
    } catch (error) {
        console.error("Error getting profile:", error);
        throw error;
    }
}
