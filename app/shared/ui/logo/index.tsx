import React from 'react'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
    const lang = useLanguage()
    return (
        <a href={lang === "eng" ? '/eng' : "/"}>
            <div className={'flex items-center gap-1 p-4'}>
                <span className='font-black text-white'>RIVALS</span>
                <span className='font-black bg-yellow-400 text-black px-0.5'>LORE</span>
            </div>
        </a>

    )
}
