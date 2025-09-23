import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "~/widgets/header/model/types";


export const getNavigationFooterItems = (): INavItem[] => {
    return [
        {
            title: 'ГЕРОИ',
            url: PUBLIC_URL.heroes()
        },
        {
            title: "СЕЗОНЫ",
            url: PUBLIC_URL.seasons()
        },
    ]
}
