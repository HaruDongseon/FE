import * as SecureStore from 'expo-secure-store';

const useAuthorized = () => {
  const accessToken = SecureStore.getItem('accessToken');

  return !!accessToken;
};

export default useAuthorized;
