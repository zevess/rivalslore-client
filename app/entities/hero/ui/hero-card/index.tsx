import React from 'react'
import { cn } from '~/shared/lib/utils'
import type { IHero } from '../../model/hero.types'
import { StrapiImage } from '~/shared/ui/strapi-image'
import { PUBLIC_URL } from '~/shared/config/url.config'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    heroData: IHero
}

export const HeroCard: React.FC<Props> = ({ className, heroData }) => {
    const lang = useLanguage()
    return (
        <a href={lang === 'eng' ? PUBLIC_URL.heroEng(heroData.slug) : PUBLIC_URL.hero(heroData.slug)}>
            <div className={cn("relative w-fit h-[250px] md:h-[300px] bg-gray-200 transition-transform duration-200 border-transparent cursor-pointer hover:scale-110 hover:border-2 hover:border-yellow-400", className)}>

                <StrapiImage src={heroData.portrait_card.url} alt={''} className='h-full object-contain' />
                <div className='absolute bottom-0 p-1 md:p-2 h-20 bg-slate-700/80 backdrop-opacity-10 w-full'>
                    <span className={'text-white uppercase text-sm font-medium'}>{lang === 'eng' ? heroData.nick : heroData.nickRu}</span>
                </div>
            </div>
        </a>

    )
}
