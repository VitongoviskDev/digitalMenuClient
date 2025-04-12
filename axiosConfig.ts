import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8080',
  // baseURL: 'http://192.168.218.15:8080', //Placa de rede notebook
  baseURL: 'http://192.168.15.12:8080', //Cabo de rede PC
  // baseURL: 'http://192.168.137.1:8080', //Placa de rede PC
});

export default api;