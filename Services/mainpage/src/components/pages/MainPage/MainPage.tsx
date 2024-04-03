import {AppLayout} from "@packages/shared";
import {
    FooterLinks,
    NavbarAuthorisation,
    NavbarFullModalLinks,
    NavbarLinks
} from "@/components/UI/NavbarLinks/NavbarLinks";
const LoginPage = () => {

    return (
        <AppLayout footerChildrenModal={FooterLinks} fullModalChildren={NavbarFullModalLinks} authorisationChildren={NavbarAuthorisation} navbarChildren={NavbarLinks}>
            MAINPAGE    ДОДЕЛАТЬ TOGGLE!!!
        </AppLayout>
    );
};

export default LoginPage;