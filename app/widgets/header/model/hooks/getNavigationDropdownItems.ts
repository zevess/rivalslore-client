import { PUBLIC_URL } from "~/shared/config/url.config";
import type { INavItem } from "../types";

export const getNavigationDropdownItems = (): INavItem[] => {
    return [
        {
            title: "ИВЕНТЫ",
            url: PUBLIC_URL.events()
        },
        {
            title: "ЛОКАЦИИ",
            url: PUBLIC_URL.locations()
        },
        {
            title: "ПРЕДМЕТЫ",
            url: PUBLIC_URL.items()
        }
    ]
}
