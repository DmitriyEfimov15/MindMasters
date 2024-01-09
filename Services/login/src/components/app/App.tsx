import {FC} from 'react';
import {Outlet} from "react-router-dom";
import {LoginPage} from "@/components/pages/LoginPage";
const App:FC = () => {
    return (
       <div>
            <LoginPage/>
            <Outlet/>
       </div>
    );
};

export default App;