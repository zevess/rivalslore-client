import React from 'react'
import type { IStoryline } from '../../model/storyline.types'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    storyline: IStoryline
}

export const StorylineCard: React.FC<Props> = ({ className, storyline }) => {
    return (
        <a href="">
            {/* <div className='flex flex-wrap items-center gap-8'>
                <div className={"relative w-60 md:w-80 hover:scale-110 transition-transform duration-200 cursor-pointer group"}>

                    <StrapiImage src={storyline.season.cover.url} alt={''} className='border-transparent group-hover:border-2 group-hover:border-yellow-400 h-full object-contain' />


                </div>
                <h1 className='text-5xl font-semibold'>{storyline.title}</h1>
            </div> */}
        </a>


    )
}
