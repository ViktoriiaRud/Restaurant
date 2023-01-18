import styled from "styled-components";
import { breakpoint } from '../../../theme/breakpoints';


export const Button = styled.button`
    margin: 0 auto;
    margin-top: 50px;
    box-sizing: border-box;
    width: 230px; 
    height: 73px;
    left: 0%;
    right: 0%;
    top: 0px;
    background: ${({ theme }) => theme.colors.grey};
    border: 2px solid #E1B168;
    border-radius: 0px;
    left: calc(50% - 124px/2 + 0.5px);
    top: 20px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.44px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
        background-color: #CD853F;
        color: #FFFFFF;
        }

        ${breakpoint.md} {
            width: 295px;
        }
`;


export const ButtonOrange = styled(Button)`
    background: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
`;


export const ButtonTitle = styled(Button)`
    margin: 23px 0px 14px 39px;
    background: ${({ theme }) => theme.colors.grey}; 
    width: 230px; 
    color: ${({ theme }) => theme.colors.yellow}; 
    
    ${breakpoint.md} {
        margin: 30px 0px 14px 39px;
    } 
`;


export const ButtonMenu = styled(Button)`
    margin: 23px 0px 14px 39px;
    background: ${({ theme }) => theme.colors.transparent};
    width: 230px; 
    color: ${({ theme }) => theme.colors.yellow};
     
    ${breakpoint.md} {
        margin: 30px 0px 14px 39px;
    } 
`;

