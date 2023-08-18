import { userBaseService } from "@/services/base/userBaseService";

export const userService = {
  async getAll() {
    return await userBaseService.get("users");
  },

  async getByEmail(email: string) {
    return await userBaseService.get(`users/${email}`);
  },

  async create(data: any) {
    return await userBaseService.post("blogs", data);
  },
};
