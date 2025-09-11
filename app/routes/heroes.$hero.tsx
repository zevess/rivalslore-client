import { heroService } from "~/entities/hero/model/hero.services";
import { StrapiImage } from "~/shared/ui/strapi-image";
import type { Route } from "./+types/heroes.$hero";


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
        <div className="flex flex-col w-full gap-6">


            <div className="w-full flex justify-center flex-wrap">

                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col " >
                        <div className="flex flex-col items-center w-full md:items-start md:flex-row">
                            <StrapiImage src={hero.logo.url} alt={''} className="md:max-w-[130px] lg:max-w-[200px]" />
                            <div className="flex flex-col items-start mt-8">
                                <h1 className="text-6xl text-white font-semibold flex justify-center ">{hero.nick}</h1>
                                <h3 className="text-2xl text-white font-medium flex justify-center ">{hero.name}</h3>
                                <StrapiImage src={hero.signature.url} alt={''} />
                            </div>
                        </div>
                        <div className="text-white mt-10 text-xl hidden lg:block">{hero.lore}</div >
                    </div>
                    <StrapiImage src={hero.portrait.url} alt={''} className="w-full lg:w-3/5 object-contain" />
                    <div className="text-white mt-10 text-xl lg:hidden">{hero.lore}</div >

                </div>

            </div>

            <StrapiImage alt={''} src={hero.prestige.url}/>


        </div>
    )
}