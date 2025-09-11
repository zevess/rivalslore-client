import qs from 'qs'
import { api } from "~/shared/api/api.interceptor";
import { type IHero, type IHeroesResponse, type IHeroResponse } from "./hero.types";
import { API_URL } from "~/shared/config/api.config";


class HeroService {

    async getAllHeroes() {
        const { data } = await api<IHeroesResponse>({
            url: API_URL.heroes(),
            method: "GET",
            params: {
                populate: {
                    portrait_card: {
                        fields: ["url", "alternativeText"],
                    },
                    prestige: {
                        fields: ["url", "alternativeText"],
                    }
                }
            }
        })
        return data
    }

    async getHero(heroId: string) {
        const { data } = await api<IHeroResponse>({
            url: API_URL.hero(heroId),
            method: "GET",
            params: {
                populate: {
                    signature: {
                        fields: ["url", "alternativeText"],
                    },
                    logo: {
                        fields: ["url", "alternativeText"],
                    },
                    portrait: {
                        fields: ["url", "alternativeText"],
                    },
                    prestige: {
                        fields: ["url", "alternativeText"],
                    },
                    silhouette: {
                        fields: ["url", "alternativeText"],
                    }
                }
            }
        })
        return data
    }

}

export const heroService = new HeroService()