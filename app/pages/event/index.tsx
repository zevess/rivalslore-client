import React from 'react'
import type { IEvent } from '~/entities/event/model/event.types'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { EventStory } from '~/entities/event/ui/event-story'

interface Props {
    className?: string,
    event: IEvent
}

export const EventPage: React.FC<Props> = ({ className, event }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className='flex flex-col items-center gap-3'>
                <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">{event.title}</h1>
                <a href={PUBLIC_URL.season(event.season.slug)} className='p-2 uppercase font-medium text-xl text-black bg-yellow-400 hover:bg-amber-500'>{event.season.title}</a>
            </div>

            <div className="flex flex-col gap-4">
                {event.event_stories.map((event_story, index) => (
                    <EventStory text={event_story.text} key={index} image={event_story.image && event_story.image.url} title={event_story.title} />
                ))}
            </div>
        </div>
    )
}
