import React from 'react'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'

interface Props {
    className?: string,
    title: string,
    index: number,
    text: string,
    image: string
}

export const LocationStory: React.FC<Props> = ({ className, text, title, image, index }) => {
    return (
        <div className='flex flex-col gap-6'>

            <h2 className="text-4xl text-white text-center font-semibold">{title}</h2>

            {(index % 2 == 0) && <div className='flex flex-wrap justify-center items-start gap-8'>
                <div className=''>
                    <StrapiImage className='w-full max-h-[600px]' src={image} alt={''} />
                </div>

                <div className='flex flex-col gap-3 text-white text-xl w-[800px]'>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>}

            {(index % 2 == 1) && <div className='flex flex-wrap justify-center items-start gap-8'>
                <div className='flex flex-col gap-3 text-white text-xl w-[800px]'>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>

                <div className=''>
                    <StrapiImage className='w-full max-h-[600px]' src={image} alt={''} />
                </div>
            </div>}

        </div>
    )
}
