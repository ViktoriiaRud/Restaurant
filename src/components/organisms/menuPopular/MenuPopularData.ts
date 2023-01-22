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
            subtitle: "Chicken Manjoori",
            senna: "$15",
            description: "Dish relished by all age groups as a starter dish at parties.",
        },

        {
            img: ImgHotdog,
            subtitle: "Hotdog",
            senna: "$10",
            description: "Grilled sausage served in the slit of a partially sliced bun.",
        },

        {
            img: ImgFresh,
            subtitle: "Fresh Salmon",
            senna: "$5",
            description: "Beat the health blues with our Super Immune Blue Juice Recipe.",
        },

        {
            img: ImgSandwich,
            subtitle: "Veg Burger",
            senna: "$10",
            description: "Burgers may be made from ingredients like beans.",
        },
    ],
}


export default menuPopularData;


