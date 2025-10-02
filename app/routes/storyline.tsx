import { storylineService } from "~/entities/storyline/model/storyline.service";
import type { Route } from "./+types/storyline";
import { StorylinePage } from "~/pages/storyline";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.titleRu },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const storylineData = await storylineService.getStoryline(params.slug)
    return storylineData.data
}

export default function Storyline({ loaderData }: Route.ComponentProps) {
    return <StorylinePage storyline={loaderData} />
}