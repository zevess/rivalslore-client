import { heroService } from "~/entities/hero/model/hero.service";
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
    console.log(heroesData.data)
    return heroesData.data
}

export default function Heroes({ loaderData }: Route.ComponentProps) {
    return <HeroesPage heroes={loaderData} />    
}