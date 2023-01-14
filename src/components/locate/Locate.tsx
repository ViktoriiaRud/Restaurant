import React from "react";
import GlobalStyle from "../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { RichText } from '../atoms/rich-text/RichText';
import { LocateData } from './LocateData';
import { WrapperLocate, LocateCard, LocateItem, } from './LocateStyles';


const Locate = () => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperLocate>
                <LocateCard>
                    {LocateData.items.map((item, index) => (
                        <LocateItem key={index}>
                            <div className="flex">
                                <img src={item.img} alt="locate" />
                                <h3>{item.h3}</h3>
                                <h4>{item.h4}</h4>
                            </div>
                        </LocateItem>
                    ))}
                </LocateCard>
            </WrapperLocate>
        </ThemeProvider>
    </>
}

export default Locate; 