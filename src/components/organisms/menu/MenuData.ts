import ImgCake from '../../../assets/img/Cake.jpg';


export type menuDataType = {
    img: string,
    title: string,
    h4: string,
    specialTitle: string,
    button: string,
    title1: string,
    title2: string,
    title3: string,

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
}



export default menuData;