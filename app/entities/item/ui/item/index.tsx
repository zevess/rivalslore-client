import React from 'react'
import type { IItem } from '../../model/item.types'
import { StrapiImage } from '~/shared/ui/strapi-image'
import useLanguage from '~/shared/hooks/useLanguage'

interface Props {
    className?: string,
    item: IItem
}

export const Item: React.FC<Props> = ({ className, item }) => {

    const lang = useLanguage()

    return (
        <div className='flex items-center flex-col md:flex-row gap-4'>
            <StrapiImage src={item.image.url} alt={''} />
            <div className='flex flex-col gap-2'>
                <h2 className='uppercase font-semibold text-4xl'>{ lang === 'eng' ? item.title : item.titleRu}</h2>
                <p className='text-xl'>{lang === 'eng' ? item.description : item.descriptionRu}</p>
            </div>
        </div>
    )
}
