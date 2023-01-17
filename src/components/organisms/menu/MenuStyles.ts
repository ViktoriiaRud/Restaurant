import styled from "styled-components";

export const WrapperMenu = styled.section`
    padding: 30px;
    max-width: 1440px;
    min-height: 1724px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;   
`;

export const MenuImg = styled.div`
    max-width: 491px;
    min-height: 955px; 
    img {
        align-items: start;
        max-width: 398px;
        min-height: 548px; 
    }
`;

export const MenuList = styled.div`
    max-width: 818px;
    min-height: 1684px; 
`;

export const Starters = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
`;

export const Dish = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
`;

export const Dessert = styled.div`
    padding: 10px;
    max-width: 819px;
    min-height: 635px; 
`;

export const Span = styled.div`
    margin: 0px 4px 12px 0px;
    max-width: 60px;
    min-height: 1px; 
    background-color: ${({ theme }) => theme.colors.yellow};
`;


