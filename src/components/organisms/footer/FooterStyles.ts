import styled from "styled-components";


export const WrapperColor = styled.footer`
    background-color: ${({ theme }) => theme.colors.grey};
`;


export const WrapperFooter = styled.div`
    padding: 100px 20px 10px 20px;
    max-width: 1360px;
    min-height: 665px;
    display: grid;
    grid-template-columns: 335px 548px 335px;
    grid-template-rows: 176px auto;
    gap: 10px;
   

`;


export const Contact = styled.div`
    margin-top: 160px;
    max-width: 332px;
    min-height: 320px;
    grid-column: 1 / 1;
    grid-row: 1 / 2;
`;


export const FormLogo = styled.div`
    max-width: 664px;
    min-height: 474px;
    grid-column: 2 / 2;
    grid-row: 1 / 2;
`;

export const Social = styled.div`
    margin-top: 160px;
    max-width: 332px;
    min-height: 320px;
    grid-column: 3/ 3;
    grid-row: 1 / 2;
    .link-gap {
        margin: 0 18px 9px 32px;
    }
`;


export const Logo = styled.div`
    margin: 0 auto;
    margin-top: 70px;
    max-width: 378px;
    min-height: 188px;
`;

export const Form = styled.div`
    margin-top: 20px;
    max-width: 664px;
    min-height: 176px;
    background-color: grey;
`;

