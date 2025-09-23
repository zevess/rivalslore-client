import { api } from "~/shared/api/api.interceptor";
import { API_URL } from "~/shared/config/api.config";
import type { IItemsResponse } from "./item.types";

class ItemService {
    async getAllItems() {
        const { data } = await api<IItemsResponse>({
            url: API_URL.items(),
            method: "GET",
            params: {
                populate: {
                    image: {
                        fields: ["url", "alternativeText"],
                    },
                }
            }
        })
        return data
    }


}

export const itemService = new ItemService()