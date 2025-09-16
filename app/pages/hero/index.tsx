import React from 'react'
import type { IHero, IHeroResponse } from '~/entities/hero/model/hero.types'
import { HeroInfo } from '~/entities/hero/ui/hero-info'
import { DialogDemo } from '~/shared/ui/dialog'
import { StoryDialog } from '~/shared/ui/story-dialog'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    hero: IHero
}

export const HeroPage: React.FC<Props> = ({ className, hero }) => {
    return (
        <div className="relative">

            <StrapiImage
                src={hero.silhouette.url}
                alt={''}
                className="fixed w-full h-full object-contain"
            />


            <div className="relative z-10 flex flex-col w-full gap-6">



                <div className="w-full flex justify-center flex-wrap " >

                    <div className="flex flex-wrap lg:flex-nowrap">
                        <HeroInfo hero={hero} />
                        <StrapiImage src={hero.portrait.url} alt={''} className="w-full lg:w-3/5 object-contain" />
                        <div className="text-white mt-10 text-xl lg:hidden" onClick={()=>alert("fwq")}>{hero.lore}</div>

                    </div>

                </div>

                <div className="w-full flex flex-wrap flex-col items-center justify-around  lg:flex-row">
                    <StrapiImage alt={''} src={hero.prestige.url} className="w-full max-w-[500px] lg:w-1/2 mask-x-from-90% mask-x-to-100% mask-y-from-90% mask-y-to-100%" />


                    <div className="flex flex-col justify-center w-full lg:w-1/2">

                        <span className="text-white text-3xl">ИСТОРИИ</span>
                        <div className="flex flex-col gap-2 ">
                            {hero.hero_stories.map((hero_story, index) => (
                                <StoryDialog key={index} storyImage={hero_story.image.url} storyTitle={hero_story.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
