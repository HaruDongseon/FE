import { API_BASE_URL, axiosInstance } from "./apiClient";

export const login = async (
    loginType: "google" | "naver" | "kakao",
    token: string,
    deviceId: string,
) => {
    try {
        const response = await axiosInstance.post(
            `${API_BASE_URL}/oauth-login`,
            {
                loginType,
                token,
                deviceId,
            },
        );

        return response.data.access_token;
    } catch (error) {
        console.error("Login request failed:", error);
        throw error;
    }
};

export const kakaoCodeToToken = async (
    grant_type: string,
    client_id: string,
    redirect_uri: string,
    code: string,
) => {
    try {
        const response = await axiosInstance.post(
            "https://kauth.kakao.com/oauth/token",
            {
                grant_type,
                client_id,
                redirect_uri,
                code,
            },
            {
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
            },
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Login request failed:", error);
        throw error;
    }
};

export const naverCodeToToken = async (
    grant_type: string,
    client_id: string,
    client_secret: string,
    code: string,
    state: string,
) => {
    try {
        const response = await axiosInstance.post(
            "https://nid.naver.com/oauth2.0/token",
            {
                grant_type,
                client_id,
                client_secret,
                code,
                state,
            },
            {
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
            },
        );
        console.log(response.data);
        return response.data.access_token;
    } catch (error) {
        console.error("Login request failed:", error);
        throw error;
    }
};
