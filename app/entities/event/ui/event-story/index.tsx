import React from 'react'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'

interface Props {
    className?: string,
    title: string,
    text: string,
    image: string | null
}

export const EventStory: React.FC<Props> = ({ className, image, text, title }) => {
    return (
        <div className='flex flex-col gap-4' >
            <h2 className='text-5xl'>{title}</h2>
            <div className='flex flex-col md:flex-row items-center gap-4 '>
                {image && <StrapiImage className='w-fit' src={image} alt={''} />}
                <div className='flex flex-col gap-3 text-xl '>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>

        </div>
    )
}
