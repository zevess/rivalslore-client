import React from 'react'
import type { ISeason } from '~/entities/season/model/season.types'
import { Separator } from '~/shared/ui/shadcn/separator'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'
import { SeasonStory } from '~/entities/season/ui/season-story'

interface Props {
    className?: string,
    seasonData: ISeason
}

export const SeasonPage: React.FC<Props> = ({ className, seasonData }) => {
    return (
        <div className="flex flex-col gap-6 text-white">
            <h1 className="text-4xl md:text-6xl text-white text-center font-semibold">{seasonData.title}</h1>
            <div className='flex justify-center'>
                <StrapiImage className='w-fit max-h-[600px]' src={seasonData.cover.url} alt={''} />
            </div>

            <div className='flex flex-col  gap-9'>
                {seasonData.season_stories.map((season_story, index) => (
                    <SeasonStory index={index} key={index} text={season_story.text} title={season_story.title} image={season_story.image.url} />

                ))}
            </div>

        </div>
    )
}
