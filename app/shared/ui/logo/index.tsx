import React from 'react'
import { Link } from 'react-router'

interface Props {
    className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
    return (
        <Link to={'/'}>
            <div className={'flex items-center gap-1 p-4'}>
                <span className='font-black text-white'>RIVALS</span>
                <span className='font-black bg-yellow-400 text-black px-0.5'>LORE</span>
            </div>
        </Link>

    )
}