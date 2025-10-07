import { eventService } from "~/entities/event/model/event.service";
import type { Route } from "./+types/events";
import { EventsPage } from "~/pages/events";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Ивенты" },
        { name: "description", content: "Ивенты Marvel Rivals" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const eventsData = await eventService.getAllEvents()
    return eventsData
}

export default function Events({ loaderData }: Route.ComponentProps) {
    return <EventsPage events={loaderData.data}/>
}