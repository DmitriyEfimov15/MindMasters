import {AppLayout} from "@packages/shared";
import {
    FooterLinks,
    NavbarAuthorisation,
    NavbarFullModalLinks,
    NavbarLinks
} from "@/components/UI/NavbarLinks/NavbarLinks";
import {FooterImportantLinks, FooterInfoLinks} from "@/components/UI/footerLinks/FooterLinks";
import classes from "./MainPage.module.css"

import BannerAd from "@/components/PageComponents/Banners/Banner_ad/BannerAd";
const LoginPage = () => {

    return (
        <AppLayout footerInfoChildren={FooterInfoLinks} footerLinksChildren={FooterImportantLinks} footerChildrenModal={FooterLinks} fullModalChildren={NavbarFullModalLinks} authorisationChildren={NavbarAuthorisation} navbarChildren={NavbarLinks}>
            <div className={classes.app__container}>
                <BannerAd></BannerAd>
            </div>
        </AppLayout>
    );
};

export default LoginPage;