import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../shadcn/dialog'
import ReactMarkdown from 'react-markdown'

interface Props {
    className?: string,
    children: React.ReactNode,
    title: string,
    text: string
}

export const StoryDialog: React.FC<Props> = ({ className, children, title, text }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className='h-[80%] w-full max-w-2xl overflow-y-auto bg-transparent text-white border-0 custom-scrollbar shadow-none'>
                <DialogHeader className='sticky'>
                    <DialogTitle className='text-center text-2xl font-bold'>{title}</DialogTitle>
                </DialogHeader>
                <div className='text-lg flex flex-col gap-5'>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </DialogContent>
        </Dialog>
    )
}
