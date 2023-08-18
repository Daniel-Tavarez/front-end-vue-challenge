import { blogBaseService } from "@/services/base/blogBaseService";

export const blogService = {
  async getAll() {
    return await blogBaseService.get("blogs");
  },

  async getById(id: number) {
    return await blogBaseService.get(`blogs/${id}`);
  },

  async create(data: any) {
    return await blogBaseService.post("blogs", data);
  },

  async update(id: number, data: any) {
    return await blogBaseService.put("blogs", id, data);
  },

  async delete(id: number) {
    return await blogBaseService.delete("blogs", id);
  },
};
