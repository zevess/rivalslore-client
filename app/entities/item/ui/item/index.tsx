import React from 'react'
import type { IItem } from '../../model/item.types'
import { StrapiImage } from '~/shared/ui/strapi-image'

interface Props {
    className?: string,
    item: IItem
}

export const Item: React.FC<Props> = ({ className, item }) => {
    return (
        <div className='flex items-center flex-col md:flex-row'>
            <StrapiImage src={item.image.url} alt={''} />
            <div className='flex flex-col gap-2'>
                <h2 className='uppercase font-semibold text-4xl'>{item.title}</h2>
                <p className='text-xl'>{item.description}</p>
            </div>
        </div>
    )
}
