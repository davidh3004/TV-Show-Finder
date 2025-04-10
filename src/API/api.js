import axios from 'axios';

const tasksApi = axios.create({
    baseURL: "https://api.tvmaze.com/search/shows?q="
}); 

export const getShows = () => tasksApi.get(searchTerm);
export const getTask = (id) => tasksApi.get(`/${id}/`);
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);