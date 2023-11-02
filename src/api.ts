import axios from 'axios';
import { Due, DueJson } from './@types/Due';

const api = axios.create({
  baseURL: 'http://127.0.0.1:9292/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export const createDue = (data: DueJson) => api.post('/dues', data);

export const getAllDues = () => api.get('/dues').then((response) => response.data);

export const getDue = (id: number) => api.get(`/dues/${id}`).then((response) => response.data);

export const updateDue = (id: number, data: Due) => api.put(`/dues/${id}`, data);

export {};
