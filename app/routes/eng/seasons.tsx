import { seasonService } from "~/entities/season/model/season.service";
import type { Route } from "./+types/seasons";
import { SeasonsPage } from "~/pages/seasons";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Seasons" },
        { name: "description", content: "Marvel Rivals Seasons" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const seasonsData = await seasonService.getAllSeasons()
    return seasonsData.data
}

export default function Seasons({ loaderData }: Route.ComponentProps) {
    return <SeasonsPage seasons={loaderData} />
}