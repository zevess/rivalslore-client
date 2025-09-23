import { locationService } from "~/entities/location/model/location.service";
import { LocationPage } from "~/pages/location";
import type { Route } from "./+types/location";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Локации" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const locationData = await locationService.getLocation(params.slug)
    return locationData.data
}

export default function Location({ loaderData }: Route.ComponentProps) {
    return <LocationPage location={loaderData}/>
}