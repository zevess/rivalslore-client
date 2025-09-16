import { heroService } from "~/entities/hero/model/hero.services";
import { HeroPage } from "~/pages/hero";
import type { Route } from "./+types/hero";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Герои" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const heroData = await heroService.getHero(params.documentId)
    return heroData
}

export default function Hero({ loaderData }: Route.ComponentProps) {
    const hero = loaderData.data

    return <HeroPage hero={hero} />

}