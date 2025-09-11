export const APP_URL = import.meta.env.VITE_APP_URL as string
export const PUBLIC_URL = {
    root: (url = '') => `${url ? url : ""}`,
    home: () => PUBLIC_URL.root('/'),

    heroes: (url = '') => PUBLIC_URL.root(`/heroes${url}`),
    hero: (documentId = '') => PUBLIC_URL.heroes(`/${documentId}`),

    events: (url = '') => PUBLIC_URL.root(`/events${url}`),
    eventId: (documentId = '') => PUBLIC_URL.events(`/${documentId}`),

    seasons: (url = '') => PUBLIC_URL.root(`/seasons${url}`),
    seasonsId: (documentId = '') => PUBLIC_URL.seasons(`/${documentId}`),
    

}