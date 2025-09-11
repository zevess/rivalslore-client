import { heroService } from "~/entities/hero/model/hero.services";
import type { Route } from "./+types/heroes._index";
import { StrapiImage } from "~/shared/ui/strapi-image";
import { HeroCard } from "~/entities/hero/ui/hero-card";



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
        <div className="flex flex-col gap-6">
            <h1 className="text-6xl text-white font-semibold flex justify-center ">ГЕРОИ</h1>
            <div className="flex flex-wrap justify-around md:justify-normal gap-4">
                {heroes.map((hero, index) => (
                    <HeroCard heroData={hero} key={index} />
                ))}
                {heroes.map((hero, index) => (
                    <HeroCard heroData={hero} key={index} />
                ))}
            </div>
        </div>
    )
}