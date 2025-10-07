import { locationService } from "~/entities/location/model/location.service";
import { LocationPage } from "~/pages/location";
import type { Route } from "./+types/location";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.title },
        { name: "description", content: "Информация о локации " + matches[2].loaderData.title  },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const locationData = await locationService.getLocation(params.slug)
    return locationData.data
}

export default function Location({ loaderData }: Route.ComponentProps) {
    return <LocationPage location={loaderData}/>
}