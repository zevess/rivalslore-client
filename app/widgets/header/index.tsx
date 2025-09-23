import React from 'react'
import { Logo } from '~/shared/ui/logo'
import { getNavigationItems } from './model/hooks/getNavigationItems'
import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import { DropdownButton } from '~/shared/ui/dropdown-button'
import { getNavigationDropdownItems } from './model/hooks/getNavigationDropdownItems'

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {

    const items = getNavigationItems()
    const dropdownItems = getNavigationDropdownItems()

    return (
        <header className='w-full flex h-14 items-center justify-between md:justify-normal gap-6 sticky top-0 z-50 bg-black'>
            <Logo />

            <div className='hidden md:flex items-center gap-6'>
                {items.map((item, index) => (
                    <Link to={item.url} key={index} className='text-white font-semibold uppercase hover:text-yellow-400 transition duration-200'>{item.title}</Link>
                ))}
            </div>

            <DropdownButton items={dropdownItems} />

        </header>
    )
}
