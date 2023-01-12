import styled from "styled-components";
import { Breakpoints } from '../../../theme/breakpoints';


export const Button = styled.button`
    margin-top: 50px;
    box-sizing: border-box;
    width: 295px; 
    height: 73px;
    left: 0%;
    right: 0%;
    top: 0px;
    background: #40464F;
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
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
        background-color: #CD853F;
        color: #FFFFFF;
        }
`;

export const ButtonOrange = styled(Button)`
    background: #E1B168;
    color: '#292E36';
`;

export const ButtonTitle = styled(Button)`
    background: #40464F;
    width: 230px; 
    color: #E1B168;  
`;