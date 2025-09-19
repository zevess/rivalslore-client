import React from 'react'
import type { ISeason } from '../../model/season.types'
import { Link } from 'react-router'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    seasonData: ISeason
}
//h-[280px] md:h-[320px]
export const SeasonCard: React.FC<Props> = ({ className, seasonData }) => {
    return (
        <Link to={seasonData.slug}>
            <div className={cn("relative w-48 md:w-60 hover:scale-110 transition-transform duration-200 cursor-pointer group", className)}>

                <StrapiImage src={seasonData.cover.url} alt={''} className='border-transparent group-hover:border-2 group-hover:border-yellow-400 h-full object-contain' />
                <span className={'text-white uppercase text-xl font-medium'}>{seasonData.title}</span>

            </div>
        </Link>
    )
}
