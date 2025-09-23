import React from 'react'
import type { ILocation } from '~/entities/location/model/location.types'
import { LocationCard } from '~/entities/location/ui/location-card'

interface Props {
    className?: string,
    locations: ILocation[]
}

export const LocationsPage: React.FC<Props> = ({ className, locations }) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl text-white font-semibold flex justify-center">ЛОКАЦИИ</h1>
            <div className="flex flex-wrap justify-center md:mx-16 gap-8">
                {locations.map((location, index) => (
                    <LocationCard location={location} key={index} />
                ))}
                {locations.map((location, index) => (
                    <LocationCard location={location} key={index} />
                ))}
                {locations.map((location, index) => (
                    <LocationCard location={location} key={index} />
                ))}
                {locations.map((location, index) => (
                    <LocationCard location={location} key={index} />
                ))}
            </div>
        </div>
    )
}
