import Admin from "./pages/admin"
import Auth from "./pages/auth"
import Basket from "./pages/basket"
import Game from "./pages/game"
import Shop from "./pages/shop"
import { ADMIN_ROUTE, BASKET_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTATION_ROUTE, SHOP_ROUTE } from "./utils/constRoutes"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth />,
    },

    {   
        path: REGISTATION_ROUTE,
        Component: <Auth />,
    },

    {
        path: SHOP_ROUTE,
        Component: <Shop />,
    },

    {
        
        path: GAME_ROUTE + '/:id',
        Component: <Game />,
    }
]

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },

    {
        path: BASKET_ROUTE,
        Component: <Basket />,
    }
]