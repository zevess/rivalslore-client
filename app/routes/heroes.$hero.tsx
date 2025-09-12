import { heroService } from "~/entities/hero/model/hero.services";
import { StrapiImage } from "~/shared/ui/strapi-image";
import type { Route } from "./+types/heroes.$hero";
import { HeroInfo } from "~/entities/hero/ui/hero-info";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Герои" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const heroData = await heroService.getHero(params.hero)
    return heroData
}

export default function Hero({ loaderData }: Route.ComponentProps) {
    const hero = loaderData.data
    console.log(hero)

    return (
        <div className="relative">

            {/* <div className="fixed inset-0 z-0 "> */}
                <StrapiImage
                    src={hero.silhouette.url}
                    alt={''}
                    className="fixed w-full h-full object-contain"
                />
            {/* </div> */}

            <div className="relative z-10 flex flex-col w-full gap-6">

                <div className="w-full flex justify-center flex-wrap">

                    <div className="flex flex-wrap lg:flex-nowrap">
                        <HeroInfo hero={hero} />
                        <StrapiImage src={hero.portrait.url} alt={''} className="w-full lg:w-3/5 object-contain" />
                        <div className="text-white mt-10 text-xl lg:hidden">{hero.lore}</div>

                    </div>

                </div>

                <div className="w-full flex flex-wrap flex-col  items-center justify-around  lg:flex-row">
                    <StrapiImage alt={''} src={hero.prestige.url} className="max-w-[500px] lg:w-1/2 mask-x-from-90% mask-x-to-100% mask-y-from-90% mask-y-to-100%" />

                    <div className="flex flex-col justify-center  w-full lg:w-1/2">

                        <span className="text-white text-3xl">ИСТОРИИ</span>
                        <div className="flex flex-col gap-2 ">
                            {hero.hero_stories.map((hero_story, index) => (
                                <div className="flex justify-between items-center bg-white opacity-70 transition duration-200 cursor-pointer hover:opacity-100">
                                    <span className="text-2xl uppercase pl-2">{hero_story.title}</span>
                                    <StrapiImage src={hero_story.image.url} alt={''} className="object-contain h-full max-h-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}