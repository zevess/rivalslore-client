import { locationService } from "~/entities/location/model/location.service";
import { LocationsPage } from "~/pages/locations";
import type { Route } from "./+types/locations";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Локации" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const locationsData = await locationService.getAllLocations()
    console.log(locationsData.data)
    return locationsData.data
}

export default function Locations({ loaderData }: Route.ComponentProps) {
    return <LocationsPage locations={loaderData}/>
}