export const SERVER_URL = `${import.meta.env.VITE_STRAPI_URL}/api`;
export const API_URL = {
    root: (url = 'api') => `${url ? url : ''}`,

    heroes: (url = '') => API_URL.root(`/heroes${url}`),
    hero: (documentId = '') => API_URL.heroes(`/${documentId}`),

    heroStories: (documentId = '') => API_URL.root(`/hero-stories/${documentId}`)
}