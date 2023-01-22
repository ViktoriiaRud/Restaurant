import ImgRoast from '../../../assets/img/Roast.jpg';
import ImgHotdog from '../../../assets/img/Hotdog.jpg';
import ImgFresh from '../../../assets/img/Fresh.jpg';
import ImgSandwich from '../../../assets/img/Sandwich.jpg';


export type menuPopularDataType = {
    subtitle: string,
    title: string,
    description1: string,
    description2: string,
    cards: cardPopularType[]
}


export type cardPopularType = {
    img: string,
    subtitle: string,
    senna: string,
    description: string,
}


export const menuPopularData: menuPopularDataType = {
    subtitle: "menu",
    title: "Popular Dishes",
    description1: "There is a game between the waiters in restaurant to see who serves the food to",
    description2: "each table fastest. That led to attempting the Guinness Record.",
    cards: [
        {
            img: ImgRoast,
            subtitle: "",
            senna: "",
            description: "",
        },

        {
            img: ImgHotdog,
            subtitle: "",
            senna: "",
            description: "",
        },

        {
            img: ImgFresh,
            subtitle: "",
            senna: "",
            description: "",
        },

        {
            img: ImgSandwich,
            subtitle: "",
            senna: "",
            description: "",
        },
    ],
}


export default menuPopularData;


