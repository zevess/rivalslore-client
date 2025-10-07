import React from 'react'
import { getNavigationFooterItems } from './model/hooks/getNavigationFooterItems'

interface Props {
    className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {

    const items = getNavigationFooterItems()

    return (
        <footer className='bg-black w-full p-3 flex justify-around sticky bottom-0 z-50 md:hidden '>
            {items.map((item, index) => (
                <a key={index} className='text-white font-semibold uppercase hover:text-yellow-400 transition duration-200' href={item.url}>{item.title}</a>
            ))}
        </footer>
    )
}
