import React from "react";
import GlobalStyle from "../../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import { TextData } from '../../atoms/text/TextData';
import { WrapperLocate, LocateCard, LocateItem, WrapperStory, StoryPhoto, WrapperStoryTitle, WrapperData, DataCard, Autograph } from './LocateStyles';
import { TitleStory, DataTitle } from '../../../components/atoms/titleSubtitle/TitleSubtitleStyles';
import { locateDataType } from './LocateData';

const Locate = ({ img1, photo, items }: locateDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperLocate>
                <LocateCard>
                    {items.map((item, index) => (
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

            <WrapperStory>
                <StoryPhoto>
                    <img src={photo} alt="" />
                </StoryPhoto>
                <WrapperStoryTitle>
                    <TitleStory>{TextData.story.title}</TitleStory>
                    <h4>{TextData.story.subtitle}</h4>
                </WrapperStoryTitle>

                <WrapperData>
                    {TextData.array.map((item, index) => (
                        <DataCard key={index}>
                            <DataTitle>{item.title}</DataTitle>
                            <h4>{item.subtitle}</h4>
                        </DataCard>
                    ))}
                </WrapperData>
                <Autograph>
                    <h5>{TextData.h5}</h5>
                    <img src={img1} alt="" />
                </Autograph>

            </WrapperStory>
        </ThemeProvider>
    </>
}

export default Locate; 