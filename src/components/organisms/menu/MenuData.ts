import ImgCake from '../../../assets/img/Cake.jpg';
import ImgRaw from '../../../assets/img/Raw.png';
import ImgSpring from '../../../assets/img/Spring.png';
import ImgSoup from '../../../assets/img/Soup.png';
import ImgTomato from '../../../assets/img/Tomato.png';
import ImgGrilled from '../../../assets/img/Grilled.png';
import ImgImagerosb from '../../../assets/img/Imagerosb.png';
import ImgMarkkehs from '../../../assets/img/Markkehs.png';
import ImgSpisy from '../../../assets/img/Spisy.png';
import ImgSalad from '../../../assets/img/salad4.png';
import ImgLemon from '../../../assets/img/Lemon.png';

export type menuDataType = {
    img: string,
    title: string,
    h4: string,
    specialTitle: string,
    button: string,
    title1: string,
    title2: string,
    title3: string,
    card1: menuStartersType[],
    card2: menuDishType[],
    card3: menuDessertType[],

}

export type menuStartersType = {
    icon: string,
    title: string,
    subtitle: string,
    senna: string,
}

export type menuDishType = {
    icon: string,
    title: string,
    subtitle: string,
    senna: string,
}


export type menuDessertType = {
    icon: string,
    title: string,
    subtitle: string,
    senna: string,
}


export const menuData: menuDataType = {
    img: ImgCake,
    title: "Menu",
    h4: "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.",
    specialTitle: "Try Our Special dishes",
    button: "See all dishes",
    title1: "Starters",
    title2: "Main Dish",
    title3: "Dessert",

    card1: [
        {
            icon: ImgRaw,
            title: "Raw Scallops from Erquy",
            subtitle: "Shuck the scallop to that used for oysters",
            senna: "$40",
        },

        {
            icon: ImgSpring,
            title: "Spring Roll",
            subtitle: "Add oil to a hot pan spring onion whites",
            senna: "$20",
        },

        {
            icon: ImgSoup,
            title: "French Onion Soup",
            subtitle: "Wheat flour, apple cider vinegar, bread",
            senna: "$25",
        },

        {
            icon: ImgTomato,
            title: "Tomato Bruschetta",
            subtitle: "Bread, olive oil, garlic, black pepper",
            senna: "$30",
        }
    ],


    card2: [
        {
            icon: ImgGrilled,
            title: "Grilled Salmon with Dill Sauce",
            subtitle: "Brown sugar, salmon fillet, Dijon mustard",
            senna: "$40",
        },

        {
            icon: ImgImagerosb,
            title: "Roast Beef with Vegetable",
            subtitle: "Green beans, rib eye, olive oil, beef",
            senna: "$20",
        },

        {
            icon: ImgMarkkehs,
            title: "Marrkesh Vegetetarian Curruy",
            subtitle: "Sweet potato, eggplant, garbanzo bean",
            senna: "$25",
        },

        {
            icon: ImgSpisy,
            title: "Spicy Vegan Potato Curry",
            subtitle: "Coconut milk, beans, potatoes, curry powder",
            senna: "$35",
        }
    ],


    card3: [
        {
            icon: ImgSalad,
            title: "Apple Pie with Cream",
            subtitle: "Whipping cream, egg white, cinnamon",
            senna: "$15",
        },

        {
            icon: ImgLemon,
            title: "Lemon Meringue Pie",
            subtitle: "Frozen pie crust, meringue, lemon",
            senna: "$30",
        },

    ],
}



export default menuData;