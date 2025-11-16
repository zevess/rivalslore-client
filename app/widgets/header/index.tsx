import React from 'react'
import { Logo } from '~/shared/ui/logo'
import { getNavigationItems } from './model/hooks/getNavigationItems'
import { getNavigationDropdownItems } from './model/hooks/getNavigationDropdownItems'
import { Menu } from 'lucide-react'
import useLanguage from '~/shared/hooks/useLanguage'
import { DropdownMenuMobile } from '~/shared/ui/dropdown-menu-mobile'
import { getLanguages } from './model/hooks/getLanguages'
import { useLocation } from 'react-router'
import { DropdownMenuLanguage } from '~/shared/ui/dropdown-menu-language'

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
    const location = useLocation()
    const lang = useLanguage()
    const items = getNavigationItems(lang)
    const dropdownItems = getNavigationDropdownItems(lang)
    const languageItems = getLanguages(location.pathname)

    return (
        <header className='w-full flex h-14 items-center justify-between md:justify-normal gap-6 sticky top-0 z-50 bg-black'>
            <Logo />

            <div className='hidden md:flex items-center gap-6'>
                {items.map((item, index) => (
                    <a href={item.url} key={index} className='text-white font-semibold uppercase hover:text-yellow-400 transition duration-200'>{lang === 'eng' ? item.title : item.titleRu}</a>
                ))}
            </div>

            <div className='block md:hidden'>
                <DropdownMenuMobile language={lang} languages={languageItems} items={dropdownItems}>
                    <Menu />
                </DropdownMenuMobile>
            </div>

            <div className='hidden md:block'>
                <DropdownMenuLanguage languages={languageItems} />
            </div>

        </header>
    )
}
