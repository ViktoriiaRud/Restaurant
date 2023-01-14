import React from "react";
import GlobalStyle from "../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { RichText } from '../atoms/rich-text/RichText';
import { LocateData } from './LocateData';
import { WrapperLocate, LocateCard, LocateItem, WrapperStory, StoryPhoto, WrapperStoryTitle, WrapperData, DataCard } from './LocateStyles';
import { TitleStory, DataTitle } from '../../components/atoms/titleSubtitle/TitleSubtitleStyles';


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

            <WrapperStory>
                <StoryPhoto>
                    <img src={LocateData.photo} alt="" />
                </StoryPhoto>
                <WrapperStoryTitle>
                    <TitleStory>{RichText.story.title}</TitleStory>
                    <h4>{RichText.story.subtitle}</h4>
                </WrapperStoryTitle>

                <WrapperData>
                    {RichText.array.map((item, index) => (
                        <DataCard key={index}>
                            <DataTitle>{item.title}</DataTitle>
                            <h4>{item.subtitle}</h4>
                        </DataCard>
                    ))}

                </WrapperData>

            </WrapperStory>
        </ThemeProvider>
    </>
}

export default Locate; 