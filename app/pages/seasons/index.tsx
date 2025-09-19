import React from 'react'
import type { ISeason } from '~/entities/season/model/season.types'
import { SeasonCard } from '~/entities/season/ui/season-card'

interface Props {
    className?: string,
    seasons: ISeason[]
}

export const SeasonsPage: React.FC<Props> = ({ className, seasons }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-6xl text-white font-semibold flex justify-center">СЕЗОНЫ</h1>
            <div className="flex flex-wrap justify-center md:justify-normal gap-8 md:mx-16">
                {seasons.map((season, index) =>(
                    <SeasonCard seasonData={season} key={index}/>
                ))}
                 {seasons.map((season, index) =>(
                    <SeasonCard seasonData={season} key={index}/>
                ))}
            </div>
        </div>
    )
}
