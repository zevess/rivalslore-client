import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "../types";

export const getNavigationItems = (lang: 'eng' | 'rus'): INavItem[] => {
    return [
        {
            title: 'HEROES',
            titleRu: "ГЕРОИ",
            url: lang === 'eng' ? PUBLIC_URL.heroesEng() : PUBLIC_URL.heroes()
        },
        {
            title: "SEASONS",
            titleRu: "СЕЗОНЫ",
            url: lang === 'eng' ? PUBLIC_URL.seasonsEng() : PUBLIC_URL.seasons()
        },
        {
            title: "EVENTS",
            titleRu: "ИВЕНТЫ",
            url: lang === 'eng' ? PUBLIC_URL.eventsEng() : PUBLIC_URL.events()
        },
        {
            title: "LOCATIONS",
            titleRu: "ЛОКАЦИИ",
            url: lang === 'eng' ? PUBLIC_URL.locationsEng() : PUBLIC_URL.locations()
        },
        {
            title: "ITEMS",
            titleRu: "ПРЕДМЕТЫ",
            url: lang === 'eng' ? PUBLIC_URL.itemsEng() : PUBLIC_URL.items()
        },
        {
            title: "STORYLINES",
            titleRu: "СЮЖЕТ",
            url: lang === 'eng' ? PUBLIC_URL.storylinesEng() : PUBLIC_URL.storylines()
        }
    ]
}
