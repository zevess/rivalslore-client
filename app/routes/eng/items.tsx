import { itemService } from "~/entities/item/model/item.service";
import type { Route } from "./+types/items";
import { ItemsPage } from "~/pages/items";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Items" },
        { name: "description", content: "Marvel Rivals Items" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const itemsData = await itemService.getAllItems() 
    return itemsData.data
}

export default function Items({ loaderData }: Route.ComponentProps) {
    return <ItemsPage items={loaderData} />    
}