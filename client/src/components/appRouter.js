import { authRoutes, publicRoutes } from '../routes';
import {Route, Routes} from "react-router-dom"


const AppRouter = () => {

    const isAuth = true;

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
            <Route key = {path}  path={path} element={Component} ></Route>)}
            {publicRoutes.map(({path, Component}) => 
            <Route key = {path}  path={path} element={Component} ></Route>)}
        </Routes>
    )
}

export default AppRouter;