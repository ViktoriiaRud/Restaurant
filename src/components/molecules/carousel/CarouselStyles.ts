import styled from "styled-components";


export const Slider = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
`;


export const Text = styled.div`
    background-color: ${({ theme }) => theme.colors.yellow};
`;


export const Card = styled.div`
    width: 544px;
    heigh: 285px;
    margin: 4px 34px 22px 470px;
`;


export const WrapperImg = styled.div`
    position: relative;
        img {
            width: 113px;
            heigh: 113px;
        }
 
`;


export const WrapperIcon = styled.div`
    width: 33px;
    heigh: 30px;
    border-radius: 100%;
    position: absolute;
    margin: -108px 0px 0px 0px;
    border: 2px solid #292E36;
    background-color: ${({ theme }) => theme.colors.yellow}; 
        img {
            margin: 4px 6px 4px 5px;
            width: 18px;
            heigh: 18px;
        }
`;
