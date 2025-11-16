import { storylineService } from "~/entities/storyline/model/storyline.service";
import type { Route } from "./+types/storylines";
import { StorylinesPage } from "~/pages/storylines";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Storylines" },
        { name: "description", content: "Marvel Rivals Storylines" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const storylineData = await storylineService.getAllStorylines()
    return storylineData.data
}

export default function Storylines({ loaderData }: Route.ComponentProps) {
    return <StorylinesPage storylines={loaderData} />
}