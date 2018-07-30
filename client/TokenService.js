import { AsyncStorage } from 'react-native';

const TokenService = {
  async save(token) {
    await AsyncStorage.setItem('@psychMeds:authToken', token.token);
  },
  read() {
    // console.log(window.localStorage.getItem('authToken'))
    return AsyncStorage.getItem('@psychMeds:authToken');
  },
  async destroy() {
    await AsyncStorage.removeItem('@psychMeds:authToken');
  }
};

export default TokenService;
