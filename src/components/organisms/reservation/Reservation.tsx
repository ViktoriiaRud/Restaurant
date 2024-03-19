import React from 'react';
import FormReservation from '../formReservation/FormReservation';
import Container from "../../atoms/container";
import GlobalStyle from '../../../theme/globalStyles';
import {theme} from '../../../theme';
import {ThemeProvider} from 'styled-components';
import {reservationDataType} from './ReservationData';
import {BackgroundHall, BackgroundHallColor,} from './ReservationStyles';
import {ImgDark, WrapperForm} from './ReservationStyles';
import {HallSubtitle, HallTitle} from '../../atoms/titleSubtitle/TitleSubtitleStyles';


const Reservation = ({img, subtitle, title}: reservationDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BackgroundHallColor>
                <img src={img} alt=""/>
                <Container>
                    <BackgroundHall>
                        <ImgDark>
                            <HallSubtitle>{subtitle}</HallSubtitle>
                            <HallTitle>{title}</HallTitle>
                            <WrapperForm>
                                <FormReservation/>
                            </WrapperForm>
                        </ImgDark>
                    </BackgroundHall>
                </Container>
            </BackgroundHallColor>
        </ThemeProvider>
    </>
}

export default Reservation;