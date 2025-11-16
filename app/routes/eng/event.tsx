import { eventService } from "~/entities/event/model/event.service";

import { EventPage } from "~/pages/event";
import type { Route } from "./+types/event";


export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: matches[2].loaderData.title },
        { name: "description", content: "Event information" + matches[2].loaderData.title },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const eventData = await eventService.getEvent(params.slug)
    return eventData.data
}

export default function Event({ loaderData }: Route.ComponentProps) {
    return <EventPage event={loaderData} />
}