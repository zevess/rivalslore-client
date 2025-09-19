import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    layout("widgets/layout/index.tsx", [
        index("routes/home.tsx"),
        route("heroes", "routes/heroes.tsx"),
        route("heroes/:slug", "routes/hero.tsx"),

        route("seasons", "routes/seasons.tsx"),
        route("seasons/:slug", "routes/season.tsx"),

    ])


] satisfies RouteConfig;
