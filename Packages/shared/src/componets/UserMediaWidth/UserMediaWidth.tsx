import {FC, ReactNode, useEffect, useState} from 'react';
import classes from './UserMediaWidth.module.css'

interface UserMediaWidthProps {
    desktop: ReactNode,
    mobile: ReactNode

}

export const UserMediaWidth: FC<UserMediaWidthProps> = ({desktop, mobile}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [userMedia, setUserMedia] = useState<boolean>(window.matchMedia("(max-width: 1024px)").matches)

    useEffect(() => {
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setUserMedia(window.matchMedia("(max-width: 1024px)").matches)
    }, [window.innerWidth]);

    if(!userMedia) {
        return(
            <div className={classes.container}>{desktop}</div>
        )
    }

    if(userMedia) {
        return (
            <div className={classes.container}>{mobile}</div>
        )
    }
};
