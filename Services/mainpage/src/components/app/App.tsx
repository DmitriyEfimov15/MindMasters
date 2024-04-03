import {FC, startTransition, Suspense, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {MainPage} from "@/components/pages/MainPage";
import {ThemeContext} from "@packages/shared/src/context/ThemeText";
const App:FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    return (
        <Suspense fallback={<div>load</div>}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div>
                    <MainPage/>
                    <Outlet/>
                </div>
            </ThemeContext.Provider>
        </Suspense>

    );
};

export default App;