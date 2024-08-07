import {Banner} from "@/types/banner";
import BannerYear from "@/components/PageComponents/Banners/BannerYear/BannerYear";
import BannerIntensive from "@/components/PageComponents/Banners/BannerIntensive/BannerIntensive";
import MobileBannerYear from "@/components/PageComponents/Banners/MobileBanner/MobileBannerYear/MobileBannerYear";
import MobileBannerIntensive
    from "@/components/PageComponents/Banners/MobileBanner/MobileBannerIntensive/MobileBannerIntensive";

export const bannerKeys: Banner = {
    year: <BannerYear/>,
    intensive: <BannerIntensive/>
}

export const mobileBannerKeys: Banner = {
    year: <MobileBannerYear/>,
    intensive: <MobileBannerIntensive/>
}