import styled from "styled-components";

import { breakpoint } from '../../../theme/breakpoints';

export const FormTasteat = styled.form`
    margin-top: 50px;
    max-width: 912x;
    min-height: 397px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    padding: 10px;
   
    .name {
    
        width: 250px;
    }
    .email {
      
        width: 250px;
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

    input[type='name'] {
        position: relative;
    }
    
    label[for='name'] {
        position: absolute;
        top: 42%;
        left: 98px;
        transform: translateY(-50%);
    }

    input[type='email'] {
        position: relative;
    }
    
    label[for='email'] {
        position: absolute;
        top: 42%;
        left: 40%;
        transform: translateY(-50%);
    }

    input[type='persons'] {
        position: relative;
    }
    
    label[for='persons'] {
        position: absolute;
        top: 42%;
        left: 69%;
        padding: 0px 8px 14px 6px;
        transform: translateY(-50%);
    }

    input[type='timing'] {
        position: relative;
    }
    
    label[for='timing'] {
        position: absolute;
        top: 69%;
        left: 14%;
        transform: translateY(-50%);
    }

    input[type='data'] {
        position: relative;
    }
    
    label[for='data'] {
        position: absolute;
        top: 69%;
        left: 38%;
        transform: translateY(-50%);
        padding: 0px 0px 0px 7px;
        
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
            color: ${({ theme }) => theme.colors.black};
        }
    
    }


        button {
            display: block;
            width: 242px;
            height: 68px;
            padding: 15px;
            margin-top: 15px;
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
        resize: none;
    }

  
    `;






