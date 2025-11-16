import React from 'react'
import type { ISeason } from '~/entities/season/model/season.types'
import { SeasonCard } from '~/entities/season/ui/season-card'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    seasons: ISeason[]
}

export const SeasonsPage: React.FC<Props> = ({ className, seasons }) => {
    
    const lang = useLanguage()

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center"> {lang === 'eng' ? "SEASONS" : "СЕЗОНЫ"}</h1>
            <div className="flex flex-wrap justify-center gap-8 md:mx-16">
                {seasons.map((season, index) => (
                    <SeasonCard seasonData={season} key={index} />
                ))}

            </div>
        </div>
    )
}
