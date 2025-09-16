import { heroService } from "~/entities/hero/model/hero.services";

import { StrapiImage } from "~/shared/ui/strapi-image";
import { HeroCard } from "~/entities/hero/ui/hero-card";
import { DialogDemo } from "~/shared/ui/dialog";
import { HeroesPage } from "~/pages/heroes";
import type { Route } from "./+types/heroes";



export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Герои" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const heroesData = await heroService.getAllHeroes()
    console.log(heroesData)
    return heroesData
}

export default function Heroes({ loaderData }: Route.ComponentProps) {
    const heroes = loaderData.data

    return (
        <HeroesPage heroes={heroes}/>
    )
}