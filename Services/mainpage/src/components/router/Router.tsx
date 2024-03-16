    import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "@/components/app/App";

const routes = [
    {

        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Navigate to={'/'}/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
export default routes;