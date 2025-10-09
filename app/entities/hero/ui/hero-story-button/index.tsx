import React from 'react'
import { StoryDialog } from '~/shared/ui/story-dialog'
import { StrapiImage } from '~/shared/ui/strapi-image'
import ReactMarkdown from 'react-markdown'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    storyTitle: string,
    storyImage: string,
    storyText: string
}

export const HeroStoryButton: React.FC<Props> = ({ className, storyTitle, storyImage, storyText }) => {

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <div className='hidden md:block'>
                <StoryDialog title={storyTitle} text={storyText}>
                    <div className="flex justify-between items-center bg-white md:opacity-70 transition duration-200 cursor-pointer hover:opacity-100 h-12 md:h-16 lg:h-20">
                        <span className="text-sm md:text-xl lg:text-2xl uppercase pl-2 text-black">{storyTitle}</span>
                        <StrapiImage src={storyImage} alt={''} className="h-full" />
                    </div>
                </StoryDialog>
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className={cn("md:hidden flex justify-between items-center bg-white opacity-70 transition duration-200 cursor-pointer h-12 md:h-16 lg:h-20", isOpen && "opacity-100" )}>
                <span className="text-xs md:text-xl lg:text-2xl uppercase pl-2 text-black">{storyTitle}</span>
                <StrapiImage src={storyImage} alt={''} className="h-full" />
            </div>

            {isOpen && <div className='markdown backdrop-blur-md p-2 rounded-xl'>
                <ReactMarkdown>{storyText}</ReactMarkdown>
            </div>}

        </div>



    )
}
