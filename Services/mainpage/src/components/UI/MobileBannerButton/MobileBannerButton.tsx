import {FC, MouseEventHandler} from 'react';
import classes from './MobileBannerButton.module.css'

interface MobileBannerButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>,
    isActive: boolean
}

const MobileBannerButton: FC<MobileBannerButtonProps> = ({onClick, isActive}) => {
    const rootClasses: string[] = [classes.button]

    if(isActive) {
        rootClasses.push(classes.active)
    }

    return (
        <button className={rootClasses.join(' ')} onClick={onClick}></button>
    );
};

export default MobileBannerButton;