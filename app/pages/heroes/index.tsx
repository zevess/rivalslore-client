import React from 'react'
import { useLocation } from 'react-router'
import type { IHero } from '~/entities/hero/model/hero.types'
import { HeroCard } from '~/entities/hero/ui/hero-card'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    heroes: IHero[]
}

export const HeroesPage: React.FC<Props> = ({ className, heroes }) => {
    const lang = useLanguage()
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">{lang === 'eng' ? "HEROES" : "ГЕРОИ"}</h1>
            <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center md:justify-around gap-4">
                {heroes.map((hero, index) => (
                    <HeroCard heroData={hero} key={index} />
                ))}
            </div>
        </div>
    )
}
