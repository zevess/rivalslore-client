import React from 'react'
import { Link } from 'react-router'
import type { IEvent } from '~/entities/event/model/event.types'
import { PUBLIC_URL } from '~/shared/config/url.config'

interface Props {
    className?: string,
    events: IEvent[]
}

export const EventsPage: React.FC<Props> = ({ className, events }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">ИВЕНТЫ</h1>
            <div className="flex flex-wrap justify-evenly md:justify-around gap-6">
                {events.map((event, index) => (
                    <a href={PUBLIC_URL.event(event.slug)} key={index} className='text-white uppercase  text-4xl transition duration-200 hover:text-yellow-400'>
                        {event.title}
                    </a>
                ))}
            </div>
        </div>
    )
}
