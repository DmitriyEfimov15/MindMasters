import {createBrowserRouter} from "react-router-dom";
import App from "@/components/app/App";
// @ts-ignore
import loginRoutes from 'login/Router'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            ...loginRoutes
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes;