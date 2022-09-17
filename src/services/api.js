import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://api-java-lista.herokuapp.com/"
});

api.interceptors.request.use(async (req) => {
  const token = await AsyncStorage.getItem('@Lista:token');

  if(token){
    req.headers = {
      'Authorization': token
    }
  }

  return req;
});

export default api;