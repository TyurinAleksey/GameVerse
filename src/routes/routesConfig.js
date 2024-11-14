import Home from "@pages/Home";
import Game from "@pages/Game";
import NotFound from "@pages/NotFound";

const routesConfig = [
    {
        path: "/",
        exact: true,
        component: <Home/>
    },
    {
        path: "/?page=1",
        exact: true,
        component: <Home/>
    },
    {
        path: "/games/:id",
        exact: true,
        component: <Game/>
    },
    {
        path: "*",
        exact: false,
        component: <NotFound/>
    }
]

export default routesConfig;