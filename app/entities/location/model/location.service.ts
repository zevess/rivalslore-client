import { api } from "~/shared/api/api.interceptor";
import { API_URL } from "~/shared/config/api.config";
import type { ILocationResponse, ILocationsResponse } from "./location.types";

class LocationService {
    async getAllLocations() {
        const { data } = await api<ILocationsResponse>({
            url: API_URL.locations(),
            method: "GET",
            params: {
                populate: {
                    preview: {
                        fields: ["url", "alternativeText"],
                    },
                },
                sort:{
                    createdAt: "asc"
                }
            }
        })
        return data
    }

    async getLocation(slug: string) {
        const { data } = await api<ILocationResponse>({
            url: API_URL.location(slug),
            method: "GET"
        })
        return data
    }
}

export const locationService = new LocationService()