import { api } from "~/shared/api/api.interceptor";
import { API_URL } from "~/shared/config/api.config";
import type { IStorylineResponse, IStorylinesResponse } from "./storyline.types";


class StorylineService {

    async getAllStorylines() {
        const { data } = await api<IStorylinesResponse>({
            url: API_URL.storylines(),
            method: "GET",
            params: {
                populate: {
                    season: {
                        populate: {
                            cover: {
                                fields: ["url", "alternativeText"],
                            },
                        },
                    }
                },
                sort: {
                    createdAt: "asc"
                }
            }
        })
        return data
    }

    async getStoryline(slug: string) {
        const { data } = await api<IStorylineResponse>({
            url: API_URL.storyline(slug),
            method: "GET",
            params: {
                populate: {
                    populate: {
                        season: true
                    },
                }
            }
        })
        return data
    }
}

export const storylineService = new StorylineService()