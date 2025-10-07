import React from 'react'
import type { IStoryline } from '../../model/storyline.types'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    storyline: IStoryline
}

export const StorylineCard: React.FC<Props> = ({ className, storyline }) => {
    return (
        <a href={PUBLIC_URL.storyline(storyline.slug)}>
            <div className="relative aspect-video w-fit max-h-64 group rounded-xl overflow-hidden">
                <div className="w-full h-full overflow-hidden">
                    <StrapiImage
                        src={storyline.season.cover.url}
                        alt={''}
                        className="object-cover w-full h-full transition duration-200 group-hover:scale-110"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-50 transition-opacity rounded-xl pointer-events-none group-hover:opacity-70"></div>

                <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                    <p className='uppercase font-bold text-sm md:text-xl transition duration-200 group-hover:text-yellow-400'>
                        {storyline.titleRu}
                    </p>
                </div>
            </div>
        </a>

    )
}
