import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    layout("widgets/layout/index.tsx", [
        index("routes/home.tsx"),
        route("heroes", "routes/heroes.tsx"),
        route("heroes/:slug", "routes/hero.tsx"),

        route("seasons", "routes/seasons.tsx"),
        route("seasons/:slug", "routes/season.tsx"),

        route("events", "routes/events.tsx"),
        route("events/:slug", "routes/event.tsx"),

        route("locations", "routes/locations.tsx"),
        route("locations/:slug", "routes/location.tsx"),

        route("items", "routes/items.tsx"),

        route("storylines", "routes/storylines.tsx"),
        route("storylines/:slug", "routes/storyline.tsx")
    ])


] satisfies RouteConfig;
