import type { ISeason } from "~/entities/season/model/season.types"

export interface IEvent {
    id: string,
    documentId: string,
    title: string,
    titleRu: string,
    slug: string,
    event_stories: IEventStory[]
    season: ISeason
}

export interface IEventStory {
    id: string,
    documentId: string,
    title: string,
    titleRu: string,
    text: string,
    textRu: string,
    image: IEventStoryImage
}

export interface IEventStoryImage {
    documentId: string,
    url: string,
    alternativeText: string
}

export interface IEventResponse {
    data: IEvent
}

export interface IEventsResponse {
    data: IEvent[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
}