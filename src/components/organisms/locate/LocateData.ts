import ImgLocateUs from '../../../assets/icons/Mapa.jpg';
import ImgOpen from '../../../assets/icons/Open.jpg';
import ImgList from '../../../assets/icons/List.jpg';
import ImgTable from '../../../assets/img/Table.jpg';
import ImgAutograph from '../../../assets/icons/Autograph.jpg';

export type locateDataType = {
    photo: string,
    img1: string,
    items: locateUsType[],

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

}

export default locateData;