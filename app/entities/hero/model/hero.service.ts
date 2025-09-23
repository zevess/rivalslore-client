import { api } from "~/shared/api/api.interceptor";
import { type IHeroesResponse, type IHeroResponse } from "./hero.types";
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
                    hero_stories: {
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

    async getHeroStories(heroSlug: string) {
        const { data } = await api<IHeroResponse>({
            url: API_URL.heroStories(),
            method: "GET",
            params: {
                filters: {
                    hero: {
                        slug: heroSlug
                    }
                },
                populate: {
                    image: {
                        fields: ["url"]
                    }
                }
            }
        })
        return data
    }

}

export const heroService = new HeroService()