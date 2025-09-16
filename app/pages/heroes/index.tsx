import React from 'react'
import type { IHero } from '~/entities/hero/model/hero.types'
import { HeroCard } from '~/entities/hero/ui/hero-card'
import { DialogDemo } from '~/shared/ui/dialog'

interface Props {
    className?: string,
    heroes: IHero[]
}

export const HeroesPage: React.FC<Props> = ({ className, heroes }) => {
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
