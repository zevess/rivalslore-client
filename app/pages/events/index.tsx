import React from 'react'
import type { IEvent } from '~/entities/event/model/event.types'
import { PUBLIC_URL } from '~/shared/config/url.config'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    events: IEvent[]
}

export const EventsPage: React.FC<Props> = ({ className, events }) => {
    const lang = useLanguage()

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">{lang === 'eng' ? "EVENTS" : "ИВЕНТЫ"}</h1>
            <div className="flex flex-wrap justify-evenly md:justify-around gap-6">
                {events.map((event, index) => (
                    <a href={lang === 'eng' ? PUBLIC_URL.eventEng(event.slug) : PUBLIC_URL.event(event.slug)} key={index} className='text-white uppercase  text-4xl transition duration-200 hover:text-yellow-400'>
                        {lang === 'eng' ? event.title : event.titleRu}
                    </a>
                ))}
            </div>
        </div>
    )
}
