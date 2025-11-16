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
        route("storylines/:slug", "routes/storyline.tsx"),

        route("eng", "routes/eng/home.tsx"),
        route("eng/heroes", "routes/eng/heroes.tsx"),
        route("eng/heroes/:slug", "routes/eng/hero.tsx"),

        route("eng/seasons", "routes/eng/seasons.tsx"),
        route("eng/seasons/:slug", "routes/eng/season.tsx"),

        route("eng/events", "routes/eng/events.tsx"),
        route("eng/events/:slug", "routes/eng/event.tsx"),

        route("eng/locations", "routes/eng/locations.tsx"),
        route("eng/locations/:slug", "routes/eng/location.tsx"),

        route("eng/items", "routes/eng/items.tsx"),

        route("eng/storylines", "routes/eng/storylines.tsx"),
        route("eng/storylines/:slug", "routes/eng/storyline.tsx"),

    ])


] satisfies RouteConfig;
