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
        gap: 50px;
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
margin-top: 53px;
    max-width: 818px;
    min-height: 1684px; 
`;


export const Starters = styled.div`
    padding: 50px 10px 10px 10px;
    max-width: 819px;
    min-height: 635px; 
    display: flex;
    flex-direction: column;
    gap: 50px; 
`;


export const Dish = styled.div`
    margin-top: 50px;
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
    display: flex;
    flex-direction: column;
    gap: 50px;  
`;


export const Dessert = styled.div`
    margin-top: 50px;
    padding: 10px;
    max-width: 819px;
    min-height: 368px; 
    display: flex;
    flex-direction: column;
    gap: 50px; 
`;


export const Span = styled.div`
    margin: 0px 4px 12px 0px;
    max-width: 60px;
    min-height: 1px; 
    background-color: ${({ theme }) => theme.colors.yellow};
`;


export const WrapperImgList = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10px; 
    height: 85px;
    width: 734px;
`;


export const WrapperImg = styled.div`
    max-width: 84px;
    min-height: 84px;
    img {
        max-width: 84px;
        min-height: 84px; 
    }
`;


export const WrapperText = styled.div`
    position: relative;
    max-width: 730px;
    min-height: 84px; 
    display: flex;
    justify-content: space-between;
    gap: 50px;
    &:: before {
        content: "";
        position: absolute;
        margin: 71px 0px 0px 400px;
        width: 120px;
        height: 1px; 
        background-color: ${({ theme }) => theme.colors.grey8};
    }
`;


export const WrapperSenna = styled.div`
    position: absolute;
    margin: 36px 27px 15px 646px;
    max-width: 80px;
    min-height: 80px;  
`;