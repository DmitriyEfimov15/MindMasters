import {createBrowserRouter} from "react-router-dom";
import App from "@/components/app/App";
// @ts-ignore
import loginRoutes from 'login/Router'
// @ts-ignore
import mainpageRoutes from "mainpage/Router"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            ...loginRoutes,
            ...mainpageRoutes,
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes;