import styled from "styled-components";


export const Slider = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
`;


export const Text = styled.div`
    margin-top: 50px;
    width: 650px;
    height: 385px;
`;


export const Card = styled.div`
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.grey8};
    width: 825px;
    margin: 102px 38px 100px 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const WrapperImg = styled.div`
    position: relative;
    margin: 28px 25px 18px 46px;
    
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
    margin: -113px 0px 0px 33px;
    border: 2px solid #292E36;
    background-color: ${({ theme }) => theme.colors.yellow}; 
        img {
            margin: 4px 6px 4px 5px;
            width: 18px;
            heigh: 18px;
        }
`;
