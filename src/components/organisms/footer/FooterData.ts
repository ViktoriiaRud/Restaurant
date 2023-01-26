import ImgLogo from './../../../assets/icons/Logo.png';
import ImgInstagram from '../../../assets/icons/Instagram.png';
import ImgFacebook from '../../../assets/icons/Facebook.png';
import ImgTwitter from '../../../assets/icons/Twitter.png';
import ImgPip from '../../../assets/icons/Pip.png';


export type footerDataType = {
    img: string,
    description1: string,
    description2: string,
    subtitle1: string,
    subtitle2: string,
    subtitle3: string,
    subtitle4: string,
    phone: string,
    email: string,
    imgSocial: string[],
    dataMonday: string,
    dataSaturday: string,
    dataSunday: string,
}


export const footerData: footerDataType = {
    img: ImgLogo,
    description1: "Join our mailing list for updates,",
    description2: "Get news & offers events.",
    subtitle1: "#TheTastEat",
    subtitle2: "Contact",
    subtitle3: "5 Rue Dalou, 75015 Paris",
    phone: "+123 456 789",
    email: "josefin@mail.com",
    subtitle4: "Working Hours",
    dataMonday: "Mon – Fri: 7.00am – 6.00pm",
    dataSaturday: "Sat: 7.00am – 6.00pm",
    dataSunday: "Sun: 8.00am – 6.00pm",



    imgSocial: [ImgInstagram, ImgFacebook, ImgTwitter, ImgPip]
}