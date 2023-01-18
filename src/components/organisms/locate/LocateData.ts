import ImgLocateUs from '../../../assets/icons/Mapa.jpg';
import ImgOpen from '../../../assets/icons/Open.jpg';
import ImgList from '../../../assets/icons/List.jpg';
import ImgTable from '../../../assets/img/Table.jpg';
import ImgAutograph from '../../../assets/icons/Autograph.jpg';


export type locateDataType = {
    photo: string,
    img1: string,
    items: locateUsType[],
    title2: string,
    subtitle2: string,
    h5: string,
    array: arrayData[],
}


export type arrayData = {
    titleData: string,
    subtitle: string,
}


export type locateUsType = {
    img: string,
    h3: string,
    h4: string,
}


export const locateData: locateDataType = {
    photo: ImgTable,
    img1: ImgAutograph,
    items: [
        {
            img: ImgLocateUs,
            h3: "Locate Us",
            h4: "Riverside 25, San Diego, California",
        },

        {
            img: ImgOpen,
            h3: "Open Hours",
            h4: "Mon To Fri 9:00 AM - 9:00 PM",
        },

        {
            img: ImgList,
            h3: "Reservation",
            h4: "restaurantate@gmail.com",
        },
    ],

    title2: "The Delicious Story",
    subtitle2: "The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.",
    array: [
        {
            titleData: "2018",
            subtitle: "Plan for this restaurant to deliver healthy food.",
        },
        {
            titleData: "2022",
            subtitle: "Happily in the fourth year by fulfill the motto.",
        },
    ],
    h5: "JOSEFINE",

}


export default locateData;


