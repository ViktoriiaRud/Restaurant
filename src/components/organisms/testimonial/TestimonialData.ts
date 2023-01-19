import ImgLantern from '../../../assets/img/Lantern.jpg';




export type testimonialType = {
    img: string,
    title: string,
    subtitle: string,
    description: string,
}


export const testimonialData: testimonialType = {
    img: ImgLantern,
    title: "Testimonial",
    subtitle: "Our clients say",
    description: "We love to hear from customers, so please leave a comment or say hello in an email.",
}

export default testimonialData;