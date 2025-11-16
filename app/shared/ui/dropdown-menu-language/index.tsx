import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../shadcn/dropdown-menu'
import type { ILanguageItem } from '~/widgets/header/model/types'
import { Globe } from 'lucide-react'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string
    languages: ILanguageItem[]
}

export const DropdownMenuLanguage: React.FC<Props> = ({ className, languages }) => {

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className={cn('cursor-pointer hover:text-yellow-400 transition duration-200', isOpen && "text-yellow-400")}>
                <Globe />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit bg-black border-0 rounded-none" align="start">
                <DropdownMenuGroup>
                    {languages.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-2 cursor-pointer group focus:bg-transparent">
                            <a
                                href={item.url}
                                key={index}
                                className='text-white font-semibold uppercase group-focus:text-yellow-400 transition duration-200 '
                            >
                                {item.title}
                            </a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
