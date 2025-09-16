// https://reactrouter.com/how-to/file-route-conventions

import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";

export default [
    layout("widgets/layout/index.tsx", [
        index("routes/index.tsx"),
        route("heroes", "routes/heroes.tsx"),
        route("heroes/:documentId", "routes/hero.tsx"),
    ])


] satisfies RouteConfig;

// export default flatRoutes() satisfies RouteConfig;