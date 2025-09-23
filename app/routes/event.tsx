import { eventService } from "~/entities/event/model/event.service";
import type { Route } from "./+types/event";
import { EventPage } from "~/pages/event";


export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Ивенты" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const eventData = await eventService.getEvent(params.slug)
    return eventData.data
}

export default function Event({ loaderData }: Route.ComponentProps) {
    return <EventPage event={loaderData} />
}