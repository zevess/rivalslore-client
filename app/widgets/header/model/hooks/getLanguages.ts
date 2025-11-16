import { PUBLIC_URL } from "~/shared/config/url.config";
import type { ILanguageItem } from "../types";

export const getLanguages = (currentPath: string): ILanguageItem[] => {

    const lang = currentPath.split('/')[1]
    const ruPath = currentPath.split('/').slice(2).join('/')
    

    return [
        {
            title: 'РУССКИЙ',
            url: lang == 'eng' ? PUBLIC_URL.root(currentPath.split('/')[2] ? `/${ruPath}` : "/") : PUBLIC_URL.root(currentPath)
        },
        {
            title: "ENGLISH",
            url: lang == 'eng' ? PUBLIC_URL.root(currentPath) : PUBLIC_URL.root(`/eng${currentPath}`)
        }
    ]
}
