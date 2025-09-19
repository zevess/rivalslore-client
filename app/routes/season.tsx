import { seasonService } from "~/entities/season/model/season.service";
import type { Route } from "./+types/season";
import { SeasonPage } from "~/pages/season";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Сезоны" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const seasonData = await seasonService.getSeason(params.slug)
    console.log(seasonData)
    return seasonData.data
}

export default function Season({ loaderData }: Route.ComponentProps) {
    return <SeasonPage />
}