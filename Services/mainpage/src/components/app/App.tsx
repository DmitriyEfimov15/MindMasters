import {FC} from 'react';
import {Outlet} from "react-router-dom";
import {MainPage} from "@/components/pages/MainPage";
const App:FC = () => {
    return (
       <div>
            <MainPage/>
            <Outlet/>
       </div>
    );
};

export default App;