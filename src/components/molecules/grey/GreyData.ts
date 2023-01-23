import ImgData from './../../../assets/icons/Data.png';
import ImgMenu from './../../../assets/icons/Menu.png';
import ImgMotor from './../../../assets/icons/Motor.png';


export type greyDataType = {
    title: string,
    subtitle: string,
    description: string,
    items: motorType[],
}


export type motorType = {
    img: string,
    description: string,
}


export const greyData: greyDataType = {
    title: "Our Great Services",
    subtitle: "What we offer",
    description: "The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.",
    items: [
        {
            img: ImgData,
            description: "Opened 24/7",
        },

        {
            img: ImgMenu,
            description: "Special Menus",
        },


        {
            img: ImgMotor,
            description: "Home Delivery",
        }
    ]

}