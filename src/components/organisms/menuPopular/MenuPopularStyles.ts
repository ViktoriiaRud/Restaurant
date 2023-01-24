import styled from "styled-components";


export const WrapperMenuPopular = styled.section`
    margin-top: 130px;
    max-width: 1440px;
`;


export const WrapperCards = styled.div`
    padding: 20px;
    margin-top: 50px;
    max-width: 1360px;
    min-height: 489px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;


export const WrapperCard = styled.div`
    position: relative;
    margin-top: 50px;
    max-width: 317px;
    min-height: 449px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #DCDCDC;
    background-color: #FFF8DC;
    .senna {
        position: absolute;
        margin: -40px 0px 0px 245px;
    }
`;


export const CardImg = styled.div`
    max-width: 318px;
    height: 307px;
`;


export const CardText = styled.div`
    padding: 2px;
    max-width: 318px;
    height: 153px;
`;
