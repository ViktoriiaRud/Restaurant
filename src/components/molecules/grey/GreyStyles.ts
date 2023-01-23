import styled from "styled-components";


export const GreyWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    max-Width: 1440px;
    min-height: 515px; 

`;

export const WrapperCard = styled.div`
    padding: 30px;
    max-Width: 1360px;
    min-height: 235px; 
`;


export const Span = styled.div`
    margin: 0px 0px 8px 0px;
    max-width: 180px;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.yellow};
`;


export const WrapperText = styled.div`
    margin-top: 150px; 
    max-Width: 448px;
    min-height: 214px; 
`;


export const Cards = styled.div`
    max-Width: 822px;
    min-height: 215px; 
`;

export const CardGreyLight = styled.div`
    max-Width: 254px;
    min-height: 235px;
    background-color: ${({ theme }) => theme.colors.grey8};
`;

export const CardGreyDark = styled.div`
    max-Width: 224px;
    min-height: 215px; 
    background-color: ${({ theme }) => theme.colors.grey};
`;
