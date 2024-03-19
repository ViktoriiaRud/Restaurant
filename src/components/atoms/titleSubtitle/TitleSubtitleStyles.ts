import styled from 'styled-components';
import { breakpoint } from '../../../theme';


export const TitleStory = styled.div` 
    text-align: center;
    font-family: 'Cormorant Infant', sans-serif;
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
    font-size: 26px;
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
    font-size: 28px;
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


export const BlogSubtitle = styled.div` 
    text-align: start;
    font-family: ${({ theme }) => theme.font1};   
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
`;


export const BlogData = styled(BlogSubtitle)``;

export const BlogDescription = styled(DescriptionCard)``;


export const BlogTitle = styled.div` 
    text-align: start;
    font-family: ${({ theme }) => theme.font2};
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
`;


export const HallSubtitle = styled(BlogSubtitle)` 
    padding: 120px 0px 0px 0px;
    text-align: center;  
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;


export const HallTitle = styled(TitleCard)` 
    padding: 20px 0px 0px 0px;
    text-align: center;
    text-transform: capitalize;
    font-size: 56px;
    color: ${({ theme }) => theme.colors.white};
`;


export const FooterDescription = styled(GreyDescription)` 
    margin-top: 20px;
    text-align: center;
    line-height: 14px;
`;


export const TastEat = styled(GreyDescription)` 
    margin-top: 20px;
    text-align: start;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
`;


export const ContactTitle = styled.div` 
    margin-top: 180px;
    text-align: start;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;


export const ContactCity = styled.div` 
    margin-top: 10px;
    text-align: start;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.white};
`;


export const Phone = styled(ContactCity)` 
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.yellow};
`;

export const Email = styled(ContactCity)` 
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.yellow};
`;


export const SocialText = styled.div` 
    margin-top: 10px;
    margin: 156px 0px 29px 0px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    text-align: right;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;


export const SocialTextMon = styled.div` 
    margin-top: 10px;
    font-family: ${({ theme }) => theme.font1};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.yellow};
`;

export const SocialTextSut = styled(SocialTextMon)``;

export const SocialTextSun = styled(SocialTextMon)``;






