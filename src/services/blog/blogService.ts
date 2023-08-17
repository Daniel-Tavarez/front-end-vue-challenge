import { apiService } from "@/services/apiService";

export const blogService = {
  async getAll() {
    return await apiService.get("blogs");
  },

  async getById(id: number) {
    return await apiService.get(`blogs/${id}`);
  },

  async create(data: any) {
    return await apiService.post("blogs", data);
  },

  async update(id: number, data: any) {
    return await apiService.put("blogs", id, data);
  },

  async delete(id: number) {
    return await apiService.delete("blogs", id);
  },
};
