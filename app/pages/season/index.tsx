import React from 'react'
import type { ISeason } from '~/entities/season/model/season.types'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { SeasonStory } from '~/entities/season/ui/season-story'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    seasonData: ISeason
}

export const SeasonPage: React.FC<Props> = ({ className, seasonData }) => {

    const lang = useLanguage()

    return (
        <div className="flex flex-col gap-6 text-white">
            <h1 className="text-4xl md:text-6xl text-white text-center font-semibold">{lang === 'eng' ? seasonData.title : seasonData.titleRu}</h1>
            <div className='flex justify-center'>
                <StrapiImage className='w-fit max-h-[600px]' src={seasonData.cover.url} alt={''} />
            </div>

            <div className='flex flex-col  gap-9'>
                {seasonData.season_stories.map((season_story, index) => (
                    <SeasonStory index={index} key={index} text={lang === 'eng' ? season_story.text : season_story.textRu} title={lang === 'eng' ? season_story.title : season_story.titleRu} image={season_story.image.url} />

                ))}
            </div>

        </div>
    )
}
