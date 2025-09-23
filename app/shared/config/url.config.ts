export const APP_URL = import.meta.env.VITE_APP_URL as string
export const PUBLIC_URL = {
    root: (url = '') => `${url ? url : ""}`,
    home: () => PUBLIC_URL.root('/'),

    heroes: (url = '') => PUBLIC_URL.root(`/heroes${url}`),
    hero: (slug = '') => PUBLIC_URL.heroes(`/${slug}`),

    events: (url = '') => PUBLIC_URL.root(`/events${url}`),
    event: (slug = '') => PUBLIC_URL.events(`/${slug}`),

    seasons: (url = '') => PUBLIC_URL.root(`/seasons${url}`),
    season: (slug = '') => PUBLIC_URL.seasons(`/${slug}`),

    locations: (url = '') => PUBLIC_URL.root(`/locations${url}`),
    location: (slug = '') => PUBLIC_URL.locations(`/${slug}`),
    
    items: (url ='') => PUBLIC_URL.root(`/items${url}`)

}