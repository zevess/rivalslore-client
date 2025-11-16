import React from 'react'
import type { ILocation } from '../../model/location.types'
import { cn } from '~/shared/lib/utils'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { PUBLIC_URL } from '~/shared/config/url.config'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    location: ILocation
}

export const LocationCard: React.FC<Props> = ({ className, location }) => {
    
    const lang = useLanguage()

    return (
        <a href={lang === 'eng' ? PUBLIC_URL.locationEng(location.slug) : PUBLIC_URL.location(location.slug)}>
            <div className={cn("relative  h-40 md:h-50 hover:scale-110 transition-transform duration-200 cursor-pointer group flex flex-col items-center gap-2 my-3", className)}>

                <StrapiImage src={location.preview.url} alt={''} className='border-transparent group-hover:border-2 group-hover:border-yellow-400 h-full aspect-video object-cover' />
                <span className={'text-white uppercase font-medium break-words'}>{ lang === 'eng' ?location.title : location.titleRu}</span>

            </div>
        </a>
    )
}
