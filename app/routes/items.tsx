import { itemService } from "~/entities/item/model/item.service";
import type { Route } from "./+types/items";
import { ItemsPage } from "~/pages/items";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Предметы" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const itemsData = await itemService.getAllItems() 
    return itemsData.data
}

export default function Items({ loaderData }: Route.ComponentProps) {
    return <ItemsPage items={loaderData} />    
}