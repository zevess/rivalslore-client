import React from "react"
import { Button } from "../shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../shadcn/dropdown-menu"
import type { ILanguageItem, INavItem } from "~/widgets/header/model/types"
import { cn } from "~/shared/lib/utils"
import { Globe } from "lucide-react"

interface Props {
    children: React.ReactNode,
    items: INavItem[],
    languages: ILanguageItem[],
    language: 'rus' | 'eng'
}

export const DropdownMenuMobile: React.FC<Props> = ({ children, items, languages, language }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className={cn("mx-4 transition-transform", isOpen ? "rotate-90" : "rotate-0")}>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit bg-black border-0 rounded-none" align="start">
                <DropdownMenuGroup>
                    {items.map((item, index) => (
                        <DropdownMenuItem key={index} className="p-2 cursor-pointer group focus:bg-transparent">
                            <a
                                href={item.url}
                                key={index}
                                className='text-white font-semibold uppercase group-focus:text-yellow-400 transition duration-200 '
                            >
                                {language === 'eng' ? item.title : item.titleRu}
                            </a>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSub >
                        <DropdownMenuSubTrigger className="focus:bg-black data-[state=open]:text-accent-foreground data-[state=open]:bg-accent-foreground p-2" ><Globe className="text-white" /></DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent className="w-fit bg-black border-0 rounded-none focus:bg-black">
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
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>            
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
