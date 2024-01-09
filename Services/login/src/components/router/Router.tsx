import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "@/components/app/App";
import {LoginPage} from "@/components/pages/LoginPage";
import {Suspense} from "react";

const routes = [
    {

        path: '/login',
        element: <App />,
        children: [
            {
                path: 'login/*',
                element: <Navigate to={'/login'}/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
export default routes;