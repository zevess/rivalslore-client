export interface ISeason {
    id: string,
    documentId: string,
    title: string,
    slug: string,
    
    titleRu: string,

    cover: {
        url: string;
        alternativeText: string;
    },
    
    season_stories: ISeasonStory[]
}

export interface ISeasonStory {
    id: string,
    documentId: string,
    title: string,
    text: string,
    titleRu: string, 
    textRu: string
    image: {
        url: string,
        alternativeText: string;
    }
}

export interface ISeasonResponse{
    data: ISeason
}

export interface ISeasonsResponse {
    data: ISeason[],
    meta:{
        pagination:{
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}