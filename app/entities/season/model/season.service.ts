import { api } from "~/shared/api/api.interceptor";
import { type ISeason, type ISeasonResponse, type ISeasonsResponse } from "./season.types";
import { API_URL } from "~/shared/config/api.config";
import type { IHeroesResponse } from "~/entities/hero/model/hero.types";


class SeasonService {

    async getAllSeasons() {
        const { data } = await api<ISeasonsResponse>({
            url: API_URL.seasons(),
            method: "GET",
            params: {
                populate: {
                    cover: {
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

    async getSeason(slug: string) {
        const { data } = await api<ISeasonResponse>({
            url: API_URL.season(slug),
            method: "GET",
            params: {
                populate: {
                    cover: {
                        fields: ["url"]
                    },

                    season_stories: {
                        fields: ["title", "text"],
                        populate: {
                            image: {
                                fields: ["url"]
                            }
                        }
                    }
                }
            }
        })
        return data
    }

    // async getHero(heroId: string) {
    //     const { data } = await api<IHeroResponse>({
    //         url: API_URL.hero(heroId),
    //         method: "GET",
    //         params: {
    //             populate: {
    //                 signature: {
    //                     fields: ["url", "alternativeText"],
    //                 },
    //                 logo: {
    //                     fields: ["url", "alternativeText"],
    //                 },
    //                 portrait: {
    //                     fields: ["url", "alternativeText"],
    //                 },
    //                 prestige: {
    //                     fields: ["url", "alternativeText"],
    //                 },
    //                 silhouette: {
    //                     fields: ["url", "alternativeText"],
    //                 },
    //                 hero_stories: {
    //                     fields: ["title", "text"],
    //                     populate: {
    //                         image: {
    //                             fields: ["url"]
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     })
    //     return data
    // }

}

export const seasonService = new SeasonService()