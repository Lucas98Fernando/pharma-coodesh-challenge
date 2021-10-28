import axios from "axios";

// Criando uma nova instância do axios
const apiService = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
});

export default apiService;
