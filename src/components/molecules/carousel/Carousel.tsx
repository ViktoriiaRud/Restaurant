import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { carouselDataType } from './CarouselData';

import { Slider } from './CarouselStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Text, WrapperImg, Card, WrapperIcon } from './CarouselStyles';




const MyCarousel = ({ item }: carouselDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Slider >
                <Carousel>
                    {item.map((item, index) => (
                        <Carousel.Item>
                            <Card key={index}>
                                <WrapperImg>
                                    <img src={item.img} alt="" />
                                </WrapperImg>
                                <WrapperIcon>
                                    <img src={item.icon} alt="" />
                                </WrapperIcon>
                                <div>
                                    <Text>
                                        <h3>{item.name}</h3>
                                        <h4>{item.city}</h4>
                                        <h5>{item.title}</h5>
                                    </Text>
                                </div>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Slider>
        </ThemeProvider>
    </>
}


export default MyCarousel;






























// const MyCarousel = ({ item }: carouselDataType) => {

//     const settings = {
//         infinite: true,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         lazyLoad: true,
//         autoplay: true,
//         autoplaySpeed: 2000,

//     };



//     return <>
//         <ThemeProvider theme={theme}>
//             <GlobalStyle />

//             <Carousel>
//                 {/* <div className="tag">
//                     <h1>Image Gallery</h1>
//                 </div>
//                 <div className="imgslider">
//                     <Slider {...settings}>
//                         {item.map((item) => (
//                             <div key={item.id}>
//                                 <img src={item.img} alt={item.img} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div> */}

//                 <div className="tag">
//                     <h1>Image Gallery</h1>
//                 </div>
//                 <div className="d-block w-100">
//                     <Slider {...settings}>
//                         {item.map((item) => (
//                             <div key={item.id}>
//                                 <h4>{item.name}</h4>
//                                 <h5>{item.title}</h5>
//                                 <h6>{item.city}</h6>
//                                 <img src={item.img} alt={item.img} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>

//             </Carousel>



//         </ThemeProvider>
//     </>
// }

// export default MyCarousel;








// const MyCarousel = ({ item, img78 }: carouselDataType) => {
//     return <>
//         <ThemeProvider theme={theme}>
//             <GlobalStyle />

//             <Carousel>
//                 <Carousel.Item>
//                     <Slider >
//                         <img
//                             className="d-block w-100"
//                             src={img78}
//                             alt="Second slide"
//                         />

//                     </Slider>
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <Slider >
//                         <img src={img78} alt="" />
//                         {/* <img
//                             className="d-block w-100"
//                             src={img78}
//                             alt="Second slide"
//                         /> */}

//                     </Slider>

//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <Slider >
//                         {item.map((item, index) => (
//                             <div key={index}>
//                                 <div>
//                                     <img src={item.icon} alt="" />
//                                     <img src={item.img} alt="" />
//                                 </div>
//                                 <div>
//                                     <div>
//                                         <h3>{item.name}</h3>
//                                         <h4>{item.city}</h4>
//                                     </div>
//                                 </div>

//                                 <h5>{item.title}</h5>

//                             </div>
//                         ))}
//                     </Slider>

//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </ThemeProvider>
//     </>
// }

// export default MyCarousel;






