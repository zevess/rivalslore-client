import { api } from "~/shared/api/api.interceptor";
import { type IEventResponse, type IEventsResponse } from "./event.types";
import { API_URL } from "~/shared/config/api.config";

class EventService {
    async getAllEvents() {
        const { data } = await api<IEventsResponse>({
            url: API_URL.events(),
            method: "GET",
            params: {
                sort: {
                    createdAt: "asc"
                }
            }
        })
        return data
    }

    async getEvent(slug: string) {
        const { data } = await api<IEventResponse>({
            url: API_URL.event(slug),
            method: "GET"
        })
        return data
    }
}

export const eventService = new EventService()