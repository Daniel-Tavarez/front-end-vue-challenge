import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const blogBaseService = {
  async get(resource: string) {
    try {
      const response = await axiosInstance.get(resource);
      return response.data;
    } catch (error: any) {
      alert('Error fetching data: ' + error.message);
      throw error;
    }
  },

  async post(resource: string, data: any) {
    try {
      const response = await axiosInstance.post(resource, data);
      return response.data;
    } catch (error: any) {
      alert('Error creating data: ' + error.message);
      throw error;
    }
  },

  async put(resource: string, id: number, data: any) {
    try {
      const response = await axiosInstance.put(`${resource}/${id}`, data);
      return response.data;
    } catch (error: any) {
      alert('Error updating data: ' + error.message);
      throw error;
    }
  },

  async delete(resource: string, id: number) {
    try {
      const response = await axiosInstance.delete(`${resource}/${id}`);
      return response.data;
    } catch (error: any) {
      alert('Error deleting data: ' + error.message);
      throw error;
    }
  },
};
