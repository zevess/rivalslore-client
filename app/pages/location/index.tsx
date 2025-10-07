import React from 'react'
import type { ILocation } from '~/entities/location/model/location.types'
import { LocationStory } from '~/entities/location/ui/location-story'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'

interface Props {
    className?: string,
    location: ILocation,
}

export const LocationPage: React.FC<Props> = ({ className, location }) => {
    return (
        <div className="flex flex-col gap-6 text-white">
            <h1 className="text-6xl text-white text-center font-semibold uppercase">{location.titleRu}</h1>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex justify-center'>
                    <StrapiImage className='w-fit max-h-[600px]' src={location.preview.url} alt={''} />
                </div>
                <span className='text-xl max-w-[800px]'>{location.descriptionRu}</span>
                {location.textRu && <div className='markdown text-xl max-w-[800px]'>
                    <ReactMarkdown>{location.textRu}</ReactMarkdown>
                </div>}

            </div>


            <div className='flex flex-col gap-9'>
                {location.location_stories.map((location_story, index) => (
                    <LocationStory index={index} key={index} text={location_story.textRu} title={location_story.titleRu} image={location_story.image && location_story.image.url} />
                ))}
            </div>

            <h2 className="text-5xl text-white text-center font-semibold">ГАЛЕРЕЯ</h2>

            <div className='flex flex-wrap justify-around gap-6'>
                {location.gallery && location.gallery.map((image, index) => (
                    <div className='w-fit max-h-[600px]' key={index}>
                        <StrapiImage src={image.url} key={index} alt={''} />
                    </div>
                ))}
            </div>

        </div>
    )
}
