import styled from "styled-components";


export const GreyWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    max-width: 1440px;
    min-height: 515px; 

`;

export const WrapperCard = styled.div`
    margin-top: 50px;
    padding: 15px;
    max-width: 1360px;
    min-height: 515px; 
    display: grid;
    grid-template-columns: 413px 815px;
    grid-template-rows: 215px;
    gap: 10px;
`;


export const Span = styled.div`
    margin: 0px 0px 8px 0px;
    max-width: 220px;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.yellow};
`;


export const WrapperText = styled.div`
    margin-top: 150px; 
    max-width: 433px;
    min-height: 214px;  
`;


export const Cards = styled.div`
    margin-top: 150px;
    max-width: 815px;
    min-height: 215px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
`;


export const Card = styled.div`
    max-width: 254px;
    min-height: 235px; 
    display: grid;
    grid-template-columns: 254px;
    grid-template-rows: 235px;
    justify-content: space-between;
`;


export const CardGreyDark = styled.div`
    max-width: 254px;
    min-height: 235px; 
    padding: 24px 7px 9px 60px; 
    border: 25px solid ${({ theme }) => theme.colors.grey10};
    background-color: ${({ theme }) => theme.colors.grey};
    z-index: 0;
    .img-dark {
        width: 60px;
        height: 60px;  
    }
    .text-dark {
        width: 140px;
        height: 35px;
    }
`;
