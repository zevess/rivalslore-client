import React from 'react'
import type { IStoryline } from '~/entities/storyline/model/storyline.types'
import { StorylineCard } from '~/entities/storyline/ui/storyline-card'
import useLanguage from '~/shared/hooks/useLanguage'


interface Props {
    className?: string,
    storylines: IStoryline[]
}

export const StorylinesPage: React.FC<Props> = ({ className, storylines }) => {

    const lang = useLanguage()

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center"> {lang === 'eng' ? "STORYLINES" : "СЮЖЕТЫ"}</h1>
            <div className="flex flex-wrap justify-center gap-8 md:mx-16">

                {storylines.map((storyline, index) => (
                    <StorylineCard storyline={storyline} key={index} />
                ))}

            </div>
        </div>
    )
}
