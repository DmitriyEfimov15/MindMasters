import {FC, Suspense, useEffect, useState} from 'react';
import './global.css'
import {Outlet} from "react-router-dom";
import {ThemeContext} from "@packages/shared/src/context/ThemeText";

const App: FC = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'))

    return (
        <Suspense fallback={<div>loading</div>}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className={'container'}>
                    <Outlet/>
                </div>
            </ThemeContext.Provider>
        </Suspense>
    );
};

export default App;