import styled from "styled-components";

export const WrapperMenu = styled.section`
    padding: 30px;
    max-width: 1440px;
    min-height: 1724px;
    .flex-menu {
        max-width: 1380px;
        min-height: 1724px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 30px; 
    }
`;

export const MenuImg = styled.div`
    max-width: 491px;
    min-height: 955px; 
    img {
        margin-top: 25px;
        align-items: start;
        max-width: 398px;
        min-height: 548px; 
    }
`;

export const MenuList = styled.div`
    max-width: 818px;
    min-height: 1684px; 
    background-color: red;
`;

export const Starters = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px; 
    background-color: grey;

`;

export const Dish = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
`;

export const Dessert = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 368px; 
`;

export const Span = styled.div`
    margin: 0px 4px 12px 0px;
    max-width: 60px;
    min-height: 1px; 
    background-color: ${({ theme }) => theme.colors.yellow};
`;

export const SpanSenna = styled.div`
    max-width: 120px;
    min-height: 1px; 
    background-color: ${({ theme }) => theme.colors.grey};
`;


export const WrapperImgList = styled.div`
    background-color: ${({ theme }) => theme.colors.moccasin};
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10px; 
    height: 85px;
    width: 600px;
`;


export const WrapperImg = styled.div`
    max-width: 84px;
    min-height: 84px; 
    background-color: green;
    img {
        max-width: 84px;
    min-height: 84px; 
    }
`;


export const WrapperText = styled.div`
    max-width: 730px;
    min-height: 84px; 
    background-color: yellow;
`;