import { storylineService } from "~/entities/storyline/model/storyline.service";
import type { Route } from "./+types/storyline";
import { StorylinePage } from "~/pages/storyline";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Storyline " + matches[2].loaderData.title },
        { name: "description", content: "Storyline " + matches[2].loaderData.title},
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const storylineData = await storylineService.getStoryline(params.slug)
    return storylineData.data
}

export default function Storyline({ loaderData }: Route.ComponentProps) {
    return <StorylinePage storyline={loaderData} />
}