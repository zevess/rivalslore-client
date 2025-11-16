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

    items: (url = '') => PUBLIC_URL.root(`/items${url}`),

    storylines: (url = '') => PUBLIC_URL.root(`/storylines${url}`),
    storyline: (slug = '') => PUBLIC_URL.storylines(`/${slug}`),


    homeEng: () => PUBLIC_URL.root('/eng'),

    heroesEng: (url = '') => PUBLIC_URL.root(`/eng/heroes${url}`),
    heroEng: (slug = '') => PUBLIC_URL.heroesEng(`/${slug}`),

    eventsEng: (url = '') => PUBLIC_URL.root(`/eng/events${url}`),
    eventEng: (slug = '') => PUBLIC_URL.eventsEng(`/${slug}`),

    seasonsEng: (url = '') => PUBLIC_URL.root(`/eng/seasons${url}`),
    seasonEng: (slug = '') => PUBLIC_URL.seasonsEng(`/${slug}`),

    locationsEng: (url = '') => PUBLIC_URL.root(`/eng/locations${url}`),
    locationEng: (slug = '') => PUBLIC_URL.locationsEng(`/${slug}`),

    itemsEng: (url = '') => PUBLIC_URL.root(`/eng/items${url}`),

    storylinesEng: (url = '') => PUBLIC_URL.root(`/eng/storylines${url}`),
    storylineEng: (slug = '') => PUBLIC_URL.storylinesEng(`/${slug}`)

}