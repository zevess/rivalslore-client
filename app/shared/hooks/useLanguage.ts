import { useLocation } from "react-router"

export interface ILanguage {
    lang: "eng" | "rus"
}

export default function useLanguage(): ILanguage['lang'] {
    const location = useLocation()
    const lang = (location.pathname.split('/'))[1]

    if (lang === 'eng' || lang === 'rus') {
        return lang
    }
    
    return 'rus'
}