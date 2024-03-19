import React from "react";
import GlobalStyle from "../../../theme/globalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../../../theme";
import {
    WrapperLocate,
    LocateCard,
    LocateItem,
    WrapperStory,
    StoryPhoto,
    WrapperStoryTitle,
    WrapperData,
    DataCard,
    Autograph
} from './LocateStyles';
import {DataTitle, TitleStory} from "../../atoms/titleSubtitle/TitleSubtitleStyles";
import {locateDataType} from './LocateData';
import Container from "../../atoms/container";


const Locate = ({img1, photo, items, title2, subtitle2, h5, array,}: locateDataType) => {
    return <>
        <Container>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <WrapperLocate>
                    <LocateCard>
                        {items.map((item, index) => (
                            <LocateItem key={index}>
                                <div className="flex">
                                    <img src={item.img} alt="locate"/>
                                    <h3>{item.h3}</h3>
                                    <h4>{item.h4}</h4>
                                </div>
                            </LocateItem>
                        ))}
                    </LocateCard>
                </WrapperLocate>
                <WrapperStory>
                    <div>
                        <StoryPhoto>
                            <img src={photo} alt=""/>
                        </StoryPhoto>
                    </div>
                    <div>
                        <WrapperStoryTitle>
                            <TitleStory>{title2}</TitleStory>
                            <h4>{subtitle2}</h4>
                        </WrapperStoryTitle>

                        <WrapperData>
                            {array.map((item, index) => (
                                <DataCard key={index}>
                                    <DataTitle>{item.titleData}</DataTitle>
                                    <h4>{item.subtitle}</h4>
                                </DataCard>
                            ))}
                        </WrapperData>
                        <Autograph>
                            <h5>{h5}</h5>
                            <img src={img1} alt=""/>
                        </Autograph>
                    </div>
                </WrapperStory>
            </ThemeProvider>
        </Container>
    </>
}


export default Locate; 