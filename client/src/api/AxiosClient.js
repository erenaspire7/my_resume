import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: 'https://eren-hng-stage-2.herokuapp.com/api/',
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default AxiosClient;
