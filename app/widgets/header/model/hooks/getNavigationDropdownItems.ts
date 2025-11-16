import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "../types";

export const getNavigationDropdownItems = (lang: 'rus' | 'eng'): INavItem[] => {
    return [
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
