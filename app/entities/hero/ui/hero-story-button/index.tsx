import React from 'react'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    storyTitle: string,
    storyImage: string,
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeroStoryButton: React.FC<Props> = ({ className, storyTitle, storyImage, onClick }) => {
    return (
        <div className="flex justify-between items-center bg-white opacity-70 transition duration-200 cursor-pointer hover:opacity-100 h-14 md:h-16 lg:h-20" onClick={() => onClick(true)}>
            <span className="text-sm md:text-xl lg:text-2xl uppercase pl-2">{storyTitle}</span>
            <StrapiImage src={storyImage} alt={''} className="h-full" />
        </div>
    )
}
