import styled from 'styled-components';

import { breakpoint } from '../../../theme/breakpoints';


export const MyForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 5px 5px 5px 5px;
    padding: 35px;
    width: 550px;
    min-height: 76px;
    ${breakpoint.lg} {
        flex-direction: row;
        justify-content: space-between;
        gap: 30px;
    }
    label {
        position: absolute;
        margin: 30px 5px 0px 45px;
        margin-bottom: 20px;
        width: 80px;
        height: 32px;
        left: 16px;
        top: 37px;
        font-family: ${({ theme }) => theme.font1};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: rgba(51, 51, 51, 0.496405);
    }
    input {
        width: 100%;
        height: 50px;
        margin-top: 23px;
        padding: 5px 15px;
        background-color: ${({ theme }) => theme.colors.grey};
        border: 1px solid #858585;
        font-size: 26px;
        &:focus {
            background-color: #DEB887;  
        }
    }
    button {
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
        position: absolute;
        color: #8B0000;
        margin: 75px 0px 5px 0px;
        font-family: ${({ theme }) => theme.font1};
        font-size: 16px;
    }
`;