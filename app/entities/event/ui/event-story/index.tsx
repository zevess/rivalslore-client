import React from 'react'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    title: string,
    text: string,
    image: string | null
}

export const EventStory: React.FC<Props> = ({ className, image, text, title }) => {
    return (
        <div className='flex flex-col gap-4' >
            <h2 className='text-4xl uppercase underline'>{title}</h2>
            <div className={cn('flex flex-col md:flex-row items-center justify-center gap-4', image && "justify-normal")}>
                {image && <StrapiImage className='w-fit' src={image} alt={''} />}
                <div className='flex flex-col text-xl max-w-[800px] markdown '>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>

        </div>
    )
}
