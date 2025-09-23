export const SERVER_URL = `${import.meta.env.VITE_STRAPI_URL}/api`;
export const API_URL = {
    root: (url = 'api') => `${url ? url : ''}`,

    heroes: (url = '') => API_URL.root(`/heroes${url}`),
    hero: (slug = '') => API_URL.heroes(`/${slug}`),
    heroStories: () => API_URL.root(`/hero-stories`),

    seasons: (url = '') => API_URL.root(`/seasons${url}`),
    season: (slug = '') => API_URL.seasons(`/${slug}`),

    events: (url = '') => API_URL.root(`/events${url}`),
    event: (slug = '') => API_URL.events(`/${slug}`),

    locations: (url = '') => API_URL.root(`/locations${url}`),
    location: (slug = '') => API_URL.locations(`/${slug}`),

    items: (url ='') => API_URL.root(`/items${url}`)
}