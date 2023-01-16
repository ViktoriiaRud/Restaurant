import ImgLogo from '../../../assets/icons/Logo.png';
import ImgInstagram from '../../../assets/icons/Instagram.png';
import ImgFacebook from '../../../assets/icons/Facebook.png';
import ImgTwitter from '../../../assets/icons/Twitter.png';
import ImgPip from '../../../assets/icons/Pip.png';
import ImgPhoto from '../../../assets/img/Image.png';
import ImgFrame from '../../../assets/img/Framer.png';

export type headerRestaurantType = {
    img: string,
    img2: string,
    img3: string,
    links: LinkType[],
    imgSocial: string[],
    title: string,
    subtitle: string,
}

export type LinkType = {
    href: string,
    name: string,
}


export const headerRestaurantData: headerRestaurantType = {
    img: ImgLogo,
    img2: ImgPhoto,
    img3: ImgFrame,
    title: "Welcome to Restaurant",
    subtitle: "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.",
    links: [
        { href: '/sadsadsad', name: 'Home' },
        { href: '/sadsadsad', name: 'About Us' },
        { href: '/sadsadsad', name: 'Our Menu' },
        { href: '/sadsadsad', name: 'Pages' },
        { href: '/sadsadsad', name: 'Blog' },
        { href: '/sadsadsad', name: 'Contact Us' },
    ],

    imgSocial: [ImgInstagram, ImgFacebook, ImgTwitter, ImgPip]
}


export default headerRestaurantData;
