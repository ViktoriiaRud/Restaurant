import styled from 'styled-components';
import { breakpoint } from '../../../theme';


export const TitleStory = styled.div` 
    text-align: center;
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.2px;
    color: #292E36; 

    ${breakpoint.lg} {
        text-align: start;
       }
`;


export const DataTitle = styled(TitleStory)``;


export const Title = styled.div` 
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};

`;


export const SpecialTitle = styled.div` 
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
`;


export const Title1 = styled.div` 
    text-align: center;
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black};

    ${breakpoint.lg} {
        text-align: start;
       }
`;


export const Title2 = styled(Title1)``;
export const Title3 = styled(Title1)``;


export const Senna = styled.div` 
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.black};
`;


export const DishSubtitle = styled(Senna)``;


export const Ingredients = styled.div` 
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.black2};
`;


export const TestimonialTitle = styled.div` 
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;

export const TestimonialSubtitle = styled.div` 
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
`;


export const TestDescription = styled.div` 
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
`;


export const OffersSubtitle = styled.div` 
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
`;


export const OffersTitle = styled.div` 
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
`;


export const OffersDescription = styled.div` 
    margin-top: 12px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black2};
`;

export const OffersDescription2 = styled(OffersDescription)``;


export const SubtitleCard = styled.div` 
    margin-top: 12px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 4.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
`;


export const TitleCard = styled.div` 
    margin-top: 12px;
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black};
`;


export const DescriptionCard = styled.div` 
    margin-top: 12px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black2};
`;


export const SubtitlePopular = styled.div` 
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black};
`;


export const SennaPopular = styled(SubtitlePopular)``;


export const DescriptionPopular = styled(DescriptionCard)` 
    margin-top: 12px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black2};
`;


export const GreyDescription = styled.div` 
    text-align: start;
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
`;