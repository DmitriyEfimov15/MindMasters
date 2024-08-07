import { FC } from 'react';
import { UserMediaWidth } from "@packages/shared";
import DesktopVersionSeason from "@/components/PageComponents/SeasonInformation/DesktopVersionSeason/DesktopVersionSeason";
import MobileVersionSeason from "@/components/PageComponents/SeasonInformation/MobileVersionSeason/MobileVersionSeason";

const SeasonInformation: FC = () => {
    return (
        <UserMediaWidth desktop={<DesktopVersionSeason/>} mobile={<MobileVersionSeason/>}/>
    )
};

export default SeasonInformation;