export interface IItem {
    id: string,
    documentId: string,
    title: string,
    description: string,
    image: IItemImage
}

export interface IItemImage {
    documentId: string,
    url: string,
    alternativeText: string
}

export interface IItemsResponse{
    data: IItem[]
}