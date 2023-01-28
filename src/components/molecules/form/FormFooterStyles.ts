import styled from 'styled-components';

import { breakpoint } from '../../../theme/breakpoints';


export const MyForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 176px;

    input {
        height: 60px;
        margin-top: 35px;
        padding: 5px 15px;
        font-family: ${({ theme }) => theme.font1};
        background-color: ${({ theme }) => theme.colors.grey};
        color: ${({ theme }) => theme.colors.white}; 
        border: 1px solid #858585;
        font-size: 22px;
        &:focus {
            background-color: ${({ theme }) => theme.colors.white}; 
            color: ${({ theme }) => theme.colors.grey}; 
            border: 1px solid ${({ theme }) => theme.colors.moccasin};
        }

    }
    button {
        margin: 0 auto;
        width: 196px;
        height: 59px;
        margin-top: 35px;
        border: 0;
        background-color: white;
        font-family: ${({ theme }) => theme.font1};
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
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
        position: absolute;
        color: #8B0000;
        margin: 75px 0px 5px 0px;
        font-family: ${({ theme }) => theme.font1};
        font-size: 16px;
    }
`;