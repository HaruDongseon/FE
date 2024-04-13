import axios from "axios";

export const API_BASE_URL = "http://13.124.129.111";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
