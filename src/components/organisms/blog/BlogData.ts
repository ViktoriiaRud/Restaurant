import ImgBarbecue2 from './../../../assets/img/Barbecue2.jpg';
import ImgBarbecue from './../../../assets/img/Barbecue.jpg';


export type blogDataType = {
    title: string,
    subtitle: string,
    description1: string,
    description2: string,
    cards: cardsType[],

}


export type cardsType = {
    img: string,
    button: string,
    title: string,
    subtitle: string,
    data: string,
    description: string,



}


export const blogData: blogDataType = {
    title: "Be First Who Read News",
    subtitle: "Blog",
    description1: "Explore the latest stories about our dishes, offers,",
    description2: "events and future plans here.",

    cards: [
        {
            img: ImgBarbecue2,
            button: "View More",
            title: "The Legend of US Cuisine: The Story of Hungry People",
            subtitle: "Delicious",
            data: "March 19, 2022",
            description: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
        },

        {
            img: ImgBarbecue,
            button: "View More",
            title: "The Most Popular Delicious Food of Mediterranean Cuisine",
            subtitle: "Cooking",
            data: "March 19, 2022",
            description: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
        },

    ]
}

export default blogData;