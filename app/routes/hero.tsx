import { heroService } from "~/entities/hero/model/hero.service";
import { HeroPage } from "~/pages/hero";
import type { Route } from "./+types/hero";


export function meta({ matches}: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.data.nick },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const heroData = await heroService.getHero(params.slug)
    return heroData
}

export default function Hero({ loaderData }: Route.ComponentProps) {
    const hero = loaderData.data
    return <HeroPage hero={hero} />
}