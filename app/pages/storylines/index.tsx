import React from 'react'
import { SeasonCard } from '~/entities/season/ui/season-card'
import type { IStoryline, IStorylineResponse, IStorylinesResponse } from '~/entities/storyline/model/storyline.types'
import { StorylineCard } from '~/entities/storyline/ui/storyline-card'
import { PUBLIC_URL } from '~/shared/config/url.config'
import SlideScale from '~/shared/ui/carousel-scale'

interface Props {
    className?: string,
    storylines: IStoryline[]
}

export const StorylinesPage: React.FC<Props> = ({ className, storylines }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">СЮЖЕТЫ</h1>
            <div className="flex flex-wrap justify-center gap-8 md:mx-16">

                {storylines.map((storyline, index) => (
                    <a className='text-4xl hover:text-yellow-400' href={PUBLIC_URL.storyline(storyline.slug)} key={index}>Сюжет {storyline.title}</a>
                ))}

            </div>
        </div>
    )
}
