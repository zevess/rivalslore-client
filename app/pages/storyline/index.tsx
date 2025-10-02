import React from 'react'
import type { IStoryline } from '~/entities/storyline/model/storyline.types'
import ReactMarkdown from 'react-markdown'

interface Props {
    className?: string,
    storyline: IStoryline
}

export const StorylinePage: React.FC<Props> = ({ className, storyline }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center"> Сюжет {storyline.title}</h1>

            <ReactMarkdown components={{
                h1: 'h1', h2: 'h2'
            }}>{storyline.text}</ReactMarkdown>

        </div>
    )
}
