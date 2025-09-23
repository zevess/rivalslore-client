export interface ILocation {
    id: string,
    documentId: string,
    title: string,
    text: string,
    description: string,
    slug: string,
    preview: ILocationImage,
    gallery: ILocationImage[],
    location_stories: ILocationStories[]
}

export interface ILocationStories {
    id: string,
    documentId: string,
    title: string,
    text: string,
    image: ILocationImage
}

export interface ILocationImage {
    documentId: string,
    url: string,
    alternativeText: string
}

export interface ILocationResponse {
    data: ILocation,
}

export interface ILocationsResponse {
    data: ILocation[],
}