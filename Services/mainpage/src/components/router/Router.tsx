    import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "@/components/app/App";

const routes = [
    {

        path: '/home',
        element: <App />,
        children: [
            {
                path: 'home/*',
                element: <Navigate to={'/home'}/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)
export default routes;