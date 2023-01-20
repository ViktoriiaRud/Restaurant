import Img1 from '../../../assets/img/Girl.png';
import Img2 from '../../../assets/img/Man.png';
import Img3 from '../../../assets/img/Man2.png';
import Icon from '../../../assets/icons/Quotes.jpg'



export type carouselDataType = {
    item: carouseType[],
}


export type carouseType = {
    id: number,
    img: string,
    name: string,
    city: string,
    title: string,
    icon: string,
}


export const carouselData: carouselDataType = {
    item: [
        {
            id: 1,
            img: Img1,
            name: "Natasha D",
            city: "New York",
            title: "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.",
            icon: Icon,
        },

        {
            id: 1,
            img: Img2,
            name: "Jack Sparrow",
            city: "Salt Lake City",
            title: "I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.",
            icon: Icon,
        },

        {
            id: 1,
            img: Img3,
            name: "Martin",
            city: "San Diego",
            title: "Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.",
            icon: Icon,
        },
    ]
}



export default carouselData;