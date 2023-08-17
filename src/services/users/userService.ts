import { apiService } from "@/services/apiService";

export const blogService = {

  async getById(id: number) {
    return await apiService.get(`blogs/${id}`);
  },

  async create(data: any) {
    return await apiService.post("blogs", data);
  },
};
