import {FC, useEffect, useState} from 'react';
import './global.css'
import {Outlet} from "react-router-dom";
import {ThemeContext} from "@packages/shared/src/context/ThemeText";

const App: FC = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'))

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={'container'}>
                <Outlet/>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;