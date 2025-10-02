import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "../types";

export const getNavigationItems = (): INavItem[] => {
    return [
        {
            title: 'ГЕРОИ',
            url: PUBLIC_URL.heroes()
        },
        {
            title: "ИВЕНТЫ",
            url: PUBLIC_URL.events()
        },
        {
            title: "СЕЗОНЫ",
            url: PUBLIC_URL.seasons()
        },
        {
            title: "ЛОКАЦИИ",
            url: PUBLIC_URL.locations()
        },
        {
            title: "ПРЕДМЕТЫ",
            url: PUBLIC_URL.items()
        },
        {
            title: "СЮЖЕТ",
            url: PUBLIC_URL.storylines()
        }
    ]
}
