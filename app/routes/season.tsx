import { seasonService } from "~/entities/season/model/season.service";
import type { Route } from "./+types/season";
import { SeasonPage } from "~/pages/season";


export function meta({ matches}: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.titleRu },
        { name: "description", content: "Информация о " + matches[2].loaderData.titleRu },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const seasonData = await seasonService.getSeason(params.slug)
    console.log(seasonData)
    return seasonData.data
}

export default function Season({ loaderData }: Route.ComponentProps) {
    return <SeasonPage seasonData={loaderData} />
}