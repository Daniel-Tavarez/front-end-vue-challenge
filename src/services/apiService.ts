import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// const API_BASE_URL = "http://localhost:3000";

export const apiService = {
  async get(resource: string) {
    const response = await axiosInstance.get(resource);
    return response.data;
  },

  async post(resource: string, data: any) {
    const response = await axiosInstance.post(resource, data);
    return response.data;
  },

  async put(resource: string, id: number, data: any) {
    const response = await axiosInstance.put(`${resource}/${id}`, data);
    return response.data;
  },

  async delete(resource: string, id: number) {
    const response = await axiosInstance.delete(`${resource}/${id}`);
    return response.data;
  },
};
