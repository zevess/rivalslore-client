import React from 'react'
import type { IStoryline } from '~/entities/storyline/model/storyline.types'
import ReactMarkdown from 'react-markdown'
import { PUBLIC_URL } from '~/shared/config/url.config'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    storyline: IStoryline
}

export const StorylinePage: React.FC<Props> = ({ className, storyline }) => {

    const lang = useLanguage()

    return (
        <div className="flex flex-col items-center gap-6">
            <div className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center"> {lang === 'eng' ? "Storyline of " + storyline.title : "Сюжет " + storyline.titleRu}</h1>
                <a href={lang === 'eng' ? PUBLIC_URL.seasonEng(storyline.season.slug) : PUBLIC_URL.season(storyline.season.slug)} className='p-2 uppercase font-medium text-xl text-black bg-yellow-400 hover:bg-amber-500'>{lang === 'eng' ? storyline.season.title : storyline.season.titleRu}</a>
            </div>

            <div className='flex flex-col text-2xl max-w-[800px] markdown '>
                <ReactMarkdown>{lang === 'eng' ? storyline.text :  storyline.textRu}</ReactMarkdown>
            </div>

        </div>
    )
}
