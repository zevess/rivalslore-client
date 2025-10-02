import type { ISeason } from "~/entities/season/model/season.types"

export interface IStoryline {
    id: string,
    documentId: string,
    title: string,
    slug: string,
    text: string
    
    titleRu: string,
    textRu: string

    season: ISeason
}


export interface IStorylineResponse{
    data: IStoryline
}

export interface IStorylinesResponse {
    data: IStoryline[],
    meta:{
        pagination:{
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}