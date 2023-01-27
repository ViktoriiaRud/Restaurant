import styled from "styled-components";

import { breakpoint } from '../../../theme/breakpoints';

export const FormTasteat = styled.form`
    margin: 0 auto;
    padding: 35px;
    width: 700px;
    min-height: 160px;
    
    label {
        display: block;
        margin-top: 25px;
        font-family: ${({ theme }) => theme.font1};
        font-size: 18px;
        font-weight: bold;
       
    }
    input {
        width: 300px;
        height: 50px;
        margin-top: 15px;
        padding: 5px 15px;
        border: 2px solid grey;
        color: #353535;
        border-radius: 0px;
        font-family: ${({ theme }) => theme.font1};
        font-size: 22px;
        &:focus {
            outline: 1px solid #E1B168;
        }
    }
        button {
            display: block;
            width: 179px;
            height: 48px;
            padding: 15px;
            margin-top: 25px;
            border: 0;
            background-color: white;
            font-family: ${({ theme }) => theme.font1};
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            letter-spacing: 0.2px;
            color: ${({ theme }) => theme.colors.black};
            cursor: pointer;
            &:hover {
            background-color: ${({ theme }) => theme.colors.yellow};
            color: ${({ theme }) => theme.colors.white};
            }
    }
    .error {
        color: #e53e3e;
        margin-top: 8px;
    }

`;
