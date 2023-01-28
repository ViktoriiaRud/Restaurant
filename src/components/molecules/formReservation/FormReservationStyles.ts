import styled from "styled-components";

import { breakpoint } from '../../../theme/breakpoints';

export const FormTasteat = styled.form`
    margin-top: 80px;
    max-width: 640px;
    min-height: 397px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 10px;
   
    .email, .name  {
      
        width: 95%;
    }
    
    label {
        display: inline-block;
        font-family: ${({ theme }) => theme.font1};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        letter-spacing: 0.2px;
        color: ${({ theme }) => theme.colors.white}; 
        resize: none;
    }

    
    input {
        width: 200px;
        height: 68px;
        margin-top: 15px;
        padding: 5px 15px;
        border: 1px solid grey;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 0px;
        font-family: ${({ theme }) => theme.font1};
        font-size: 22px;
        resize: none;
        &:focus {
            outline: 2px solid #E1B168;
            background-color: #FFFFFF; 
            color: ${({ theme }) => theme.colors.grey};    
        }
    
    }

        button {
            display: block;
            margin: 0 auto;
            width: 242px;
            height: 68px;
            padding: 15px;
            margin-top: 15px;
            border: 0;
            background-color: white;
            font-family: ${({ theme }) => theme.font1};
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
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






