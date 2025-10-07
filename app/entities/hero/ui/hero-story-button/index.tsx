import React from 'react'
import { StoryDialog } from '~/shared/ui/story-dialog'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    storyTitle: string,
    storyImage: string,
    storyText: string
}

export const HeroStoryButton: React.FC<Props> = ({ className, storyTitle, storyImage, storyText }) => {


    return (
        <StoryDialog title={storyTitle} text={storyText}>
            <div className="flex justify-between items-center bg-white md:opacity-70 transition duration-200 cursor-pointer hover:opacity-100 h-12 md:h-16 lg:h-20">
                <span className="text-sm md:text-xl lg:text-2xl uppercase pl-2 text-black">{storyTitle}</span>
                <StrapiImage src={storyImage} alt={''} className="h-full" />
            </div>
        </StoryDialog>

    )
}
