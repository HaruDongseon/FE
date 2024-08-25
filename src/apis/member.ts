import { API_BASE_URL, axiosInstance } from './apiClient';

interface UserResponseProfile {
  email: string;
  nickname: string;
  profileImageUrl: string;
}

interface UserRequestProfile {
  nickname: string;
  profileImageUrl: string;
}

interface UserResponseProfileImage {
  imageUrl: string;
}

export const updateUserProfile = async ({
  nickname,
  profileImageUrl,
}: UserRequestProfile): Promise<UserResponseProfile> => {
  try {
    const response = await axiosInstance.patch<UserResponseProfile>(
      `${API_BASE_URL}/members/me`,
      {
        nickname,
        profileImageUrl,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

export const getUserProfile = async (): Promise<UserResponseProfile> => {
  try {
    const response = await axiosInstance.get<UserResponseProfile>(
      `${API_BASE_URL}/members/me`,
    );
    return response.data;
  } catch (error) {
    console.error('Error getting profile:', error);
    throw error;
  }
};

export const uploadUserProfileImage = async (
  formData: FormData,
): Promise<UserResponseProfileImage> => {
  try {
    const response = await axiosInstance.post<UserResponseProfileImage>(
      `${API_BASE_URL}/members/image`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error uploading profile image:', error);
    throw error;
  }
};
