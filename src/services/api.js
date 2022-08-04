import axios from "axios";

const api = axios.create({
  baseURL: "https://api-java-lista.herokuapp.com/"
});

export default api;