export interface IHero {
    id: string,
    documentId: string,
    name: string,
    nick: string,
    introduction: string,
    quote: string,
    lore: string,

    logo: {
        url: string;
        alternativeText: string;
    },
    portrait: {
        url: string;
        alternativeText: string;
    },
    portrait_card:{
        url: string;
        alternativeText: string;
    },
    prestige: {
        url: string;
        alternativeText: string;
    },
    signature: {
        url: string;
        alternativeText: string;
    },
    silhouette: {
        url: string;
        alternativeText: string;
    },

    hero_stories: IHeroStory[]
}

export interface IHeroStory {
    id: string,
    documentId: string,
    title: string,
    text: string,
    image: {
        url: string,
        alternativeText: string;

    }
}

export interface IHeroResponse{
    data: IHero
}

export interface IHeroesResponse {
    data: IHero[],
    meta:{
        pagination:{
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}