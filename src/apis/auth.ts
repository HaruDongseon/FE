import { API_BASE_URL, axiosInstance } from './apiClient';

interface LoginParams {
  loginType: 'google' | 'naver' | 'kakao';
  token: string;
  deviceId: string;
}

interface convertCodeToTokenParams {
  grant_type: string;
  client_id: string;
  client_secret?: string;
  redirect_uri?: string;
  code: string;
  state?: string;
}

export const oauthLogin = async ({
  loginType,
  token,
  deviceId,
}: LoginParams) => {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}/oauth-login`, {
      loginType,
      token,
      deviceId,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};

export const convertKakaoCodeToToken = async ({
  grant_type,
  redirect_uri,
  client_id,
  code,
}: convertCodeToTokenParams) => {
  try {
    const response = await axiosInstance.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type,
        client_id,
        redirect_uri,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};

export const convertNaverCodeToToken = async ({
  grant_type,
  client_id,
  client_secret,
  code,
  state,
}: convertCodeToTokenParams) => {
  try {
    const response = await axiosInstance.post(
      'https://nid.naver.com/oauth2.0/token',
      {
        grant_type,
        client_id,
        client_secret,
        code,
        state,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};
