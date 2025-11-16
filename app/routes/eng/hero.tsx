import { heroService } from "~/entities/hero/model/hero.service";
import { HeroPage } from "~/pages/hero";
import type { Route } from "./+types/hero";


export function meta({ matches}: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.nickRu },
        { name: "description", content: matches[2].loaderData.nickRu },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const heroData = await heroService.getHero(params.slug)
    return heroData.data
}

export default function Hero({ loaderData }: Route.ComponentProps) {
    return <HeroPage hero={loaderData} />
}