import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { reservationDataType } from './ReservationData';
import { BackgroundHall } from './ReservationStyles';

const Reservation = ({ img }: reservationDataType) => {

    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BackgroundHall>
                <img src={img} alt="" />

            </BackgroundHall>


        </ThemeProvider>
    </>
}


export default Reservation;