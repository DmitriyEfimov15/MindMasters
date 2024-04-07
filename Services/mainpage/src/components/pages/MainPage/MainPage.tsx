import {AppLayout} from "@packages/shared";
import {
    FooterLinks,
    NavbarAuthorisation,
    NavbarFullModalLinks,
    NavbarLinks
} from "@/components/UI/NavbarLinks/NavbarLinks";
import {FooterImportantLinks, FooterInfoLinks} from "@/components/UI/footerLinks/FooterLinks";
const LoginPage = () => {

    return (
        <AppLayout footerInfoChildren={FooterInfoLinks} footerLinksChildren={FooterImportantLinks} footerChildrenModal={FooterLinks} fullModalChildren={NavbarFullModalLinks} authorisationChildren={NavbarAuthorisation} navbarChildren={NavbarLinks}>
            MAINPAGE    ДОДЕЛАТЬ TOGGLE!!!
        </AppLayout>
    );
};

export default LoginPage;