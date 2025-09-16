
import React, { type ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../shadcn/dialog'
import { HeroStoryButton } from '~/entities/hero/ui/hero-story-button'
import { Button } from '../shadcn/button'

interface Props {
    className?: string,
    storyTitle: string,
    storyImage: string
}

export const StoryDialog: React.FC<Props> = ({ className, storyImage, storyTitle }) => {
    const [open, setOpen] = React.useState(false)

    console.log(open)

    return (
        // <Dialog>
        //     <DialogTrigger>
        <HeroStoryButton onClick={setOpen} storyImage={storyImage} storyTitle={storyTitle} />

        /* </DialogTrigger>
            <DialogContent className='h-10/12 w-full'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quo debitis eaque dolore sed. Possimus voluptatem autem ipsum quos nihil impedit corrupti? Deleniti quae recusandae laudantium voluptates in ab suscipit.
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog> */
    )
}
