import React from 'react'
import { StrapiImage } from '~/shared/ui/strapi-image'
import type { IHero, IHeroResponse } from '../../model/hero.types'

interface Props {
    className?: string,
    hero: IHero
}

export const HeroInfo: React.FC<Props> = ({ className, hero }) => {
    return (
        <div className="flex flex-col" >
            <div className="flex flex-col items-center w-full md:items-start md:flex-row">
                <StrapiImage src={hero.logo.url} alt={''} className="md:max-w-[130px] lg:max-w-[200px]" />
                <div className="flex flex-col items-start mt-8 ">
                    <h1 className="text-6xl text-white font-semibold flex justify-center uppercase">{hero.nick}</h1>
                    <h3 className="text-xl text-white font-medium flex justify-center ">{hero.name}</h3>
                    <StrapiImage src={hero.signature.url} alt={''} />
                </div>
            </div>
            <div className="text-white p-10 mt-10 text-xl hidden lg:block backdrop-blur-lg mask-x-from-95% mask-x-to-100% mask-y-from-95% mask-y-to-100% ">{hero.lore}</div >
        </div>
    )
}