import React from 'react'
import type { IEvent } from '~/entities/event/model/event.types'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { EventStory } from '~/entities/event/ui/event-story'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    event: IEvent
}

export const EventPage: React.FC<Props> = ({ className, event }) => {
    const lang = useLanguage()
    return (
        <div className="flex flex-col gap-14">
            <div className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">{lang === 'eng' ? event.title : event.titleRu}</h1>
                <a href={lang === 'eng' ? PUBLIC_URL.seasonEng(event.season.slug) : PUBLIC_URL.season(event.season.slug)} className='p-2 uppercase font-medium text-xl text-black bg-yellow-400 hover:bg-amber-500'>{lang === 'eng' ? event.season.title : event.season.title}</a>
            </div>

            <div className="flex flex-col gap-10">
                {event.event_stories.map((event_story, index) => (
                    <EventStory text={lang === 'eng' ? event_story.text : event_story.textRu} key={index} image={event_story.image && event_story.image.url} title={lang === 'eng' ? event_story.title : event_story.titleRu} />
                ))}
            </div>
        </div>
    )
}
