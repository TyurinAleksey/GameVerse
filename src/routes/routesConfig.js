import Home from "@pages/Home";
import Game from "@pages/Game";
import NotFound from "@pages/NotFound";
import Favorites from "@pages/Favorites";
import Search from "@pages/Search";

const routesConfig = [
    {
        path: "/",
        exact: true,
        component: <Home/>
    },
    {
        path: "/favorites",
        exact: true,
        component: <Favorites/>
    },
    {
        path: "/serch",
        exact: true,
        component: <Search/>
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