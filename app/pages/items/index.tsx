import React from 'react'
import type { IItem } from '~/entities/item/model/item.types'
import { Item } from '~/entities/item/ui/item'

interface Props {
    className?: string,
    items: IItem[]
}

export const ItemsPage: React.FC<Props> = ({ className, items }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">ПРЕДМЕТЫ</h1>
            <div className="flex flex-wrap justify-center md:mx-16 gap-8">
                {items.map((item, index) => (
                    <Item item={item} key={index}/>
                ))}
            </div>
        </div>
    )
}
