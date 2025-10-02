import React from 'react'
import type { ISeason } from '../../model/season.types'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { cn } from '~/shared/lib/utils'
import { PUBLIC_URL } from '~/shared/config/url.config'

interface Props {
    className?: string,
    seasonData: ISeason
}

export const SeasonCard: React.FC<Props> = ({ className, seasonData }) => {
    return (
        <a href={PUBLIC_URL.season(seasonData.slug)}>
            <div className={cn("relative w-48 md:w-60 hover:scale-110 transition-transform duration-200 cursor-pointer group", className)}>

                <StrapiImage src={seasonData.cover.url} alt={''} className='border-transparent group-hover:border-2 group-hover:border-yellow-400 h-full object-contain' />
                <span className={'text-white uppercase text-xl font-medium'}>{seasonData.titleRu}</span>

            </div>
        </a>
    )
}
