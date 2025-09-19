import React from 'react'
import { getNavigationItems } from '../header/model/hooks/getNavigationItems'
import { Link } from 'react-router'

interface Props {
    className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {

    const items = getNavigationItems()

    return (
        <footer className='bg-black w-full p-3 flex justify-around sticky bottom-0 z-50 md:hidden '>
            {items.map((item, index) => (
                <Link key={index} className='text-white font-semibold uppercase hover:text-yellow-400 transition duration-200' to={item.url}>{item.title}</Link>
            ))}
        </footer>
    )
}
