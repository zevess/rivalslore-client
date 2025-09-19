export interface IHero {
    id: string,
    documentId: string,
    name: string,
    nick: string,
    slug: string,
    introduction: string,
    quote: string,
    lore: string,

    logo: IHeroImage
    portrait: IHeroImage
    portrait_card: IHeroImage
    prestige: IHeroImage
    signature: IHeroImage
    silhouette: IHeroImage

    hero_stories: IHeroStory[]
}

export interface IHeroStory {
    id: string,
    documentId: string,
    title: string,
    text: string,
    image: IHeroImage
}

export interface IHeroResponse {
    data: IHero
}

export interface IHeroesResponse {
    data: IHero[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}

interface IHeroImage {
    url: string,
    alternativeText: string;
}