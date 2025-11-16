import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "~/widgets/header/model/types";


export const getNavigationFooterItems = (lang: 'eng' | 'rus'): INavItem[] => {
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
    ]
}
