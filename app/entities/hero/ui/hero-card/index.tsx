import React from 'react'
import { cn } from '~/shared/lib/utils'
import type { IHero } from '../../model/hero.types'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { Link } from 'react-router'

interface Props {
    className?: string,
    heroData: IHero
}

export const HeroCard: React.FC<Props> = ({ className, heroData }) => {
    return (
        <Link to={heroData.documentId}>
            <div className={cn("relative w-fit h-[250px] md:h-[300px] mt-3 bg-gray-200 hover:scale-110 transition-transform duration-200 border-transparent hover:border-2 hover:border-yellow-400 cursor-pointer", className)}>

                <StrapiImage src={heroData.portrait_card.url} alt={''} className='h-full object-contain' />
                <div className='absolute bottom-0 p-3 py-4 bg-slate-700/80 backdrop-opacity-10 w-full'>
                    <span className={'text-white uppercase font-medium'}>{heroData.nick}</span>
                </div>
            </div>
        </Link>

    )
}
