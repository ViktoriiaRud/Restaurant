import ImgBlue from '../../../assets/img/Blue.png';
import ImgGrey from '../../../assets/img/Grey.png';
import ImgWhite from '../../../assets/img/Vector2.png';
import ImgBlack from '../../../assets/img/Vector4.png';
import ImgGreyBg from '../../../assets/img/Vector3.png';
import ImgBlueBg from '../../../assets/img/Vector1.png';
import ImgGamburg from '../../../assets/img/Gamburg.png';
import ImgPizza from '../../../assets/img/Pizza.png';



export type offersDataType = {
    subtitle: string,
    title: string,
    description: string,
    description2: string,
    items: cardType[],
}


export type cardType = {
    senna: string,
    card: string,
    img: string,
    icon: string,
    subtitle: string,
    title: string,
    description: string,
    icons: string,
}



export const offersData: offersDataType = {
    subtitle: "offers",
    title: "Our Offer dishes",
    description: "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now",
    description2: "the dishes are in offers use it based on hunger.",

    items: [
        {
            senna: "$10",
            card: ImgBlue,
            img: ImgGamburg,
            icon: ImgWhite,
            icons: ImgBlueBg,
            subtitle: "50% Offer Going",
            title: "Chicken Burger",
            description: "Chicken burger with the tasty toppings and leaves.",
        },

        {
            senna: "$9",
            card: ImgGrey,
            img: ImgPizza,
            icon: ImgBlack,
            icons: ImgGreyBg,
            subtitle: "50% Offer Going",
            title: "Chicken Pizza",
            description: "Pizza with multiple flavor and the toping are mixed.",
        },
    ]
}


export default offersData;