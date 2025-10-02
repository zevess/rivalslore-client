import { storylineService } from "~/entities/storyline/model/storyline.service";
import type { Route } from "./+types/storylines";
import { StorylinesPage } from "~/pages/storylines";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Сюжетные линии" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const storylineData = await storylineService.getAllStorylines()
    return storylineData.data
}

export default function Storylines({ loaderData }: Route.ComponentProps) {
    return <StorylinesPage storylines={loaderData} />
}