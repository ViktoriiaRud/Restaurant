import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { reservationDataType } from './ReservationData';
import { BackgroundHall } from './ReservationStyles';
import { ImgDark, WrapperForm } from './ReservationStyles';
import { HallSubtitle, HallTitle } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import FormReservation from './../../molecules/formReservation/FormReservation';


const Reservation = ({ img, subtitle, title }: reservationDataType) => {

    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BackgroundHall>
                <img src={img} alt="" />
                <ImgDark>
                    <HallSubtitle>{subtitle}</HallSubtitle>
                    <HallTitle>{title}</HallTitle>
                    <WrapperForm>
                        <FormReservation />
                    </WrapperForm>

                </ImgDark>



            </BackgroundHall>


        </ThemeProvider>
    </>
}


export default Reservation;