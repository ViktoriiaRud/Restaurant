import styled from "styled-components";
import {breakpoint} from "../../../theme";

export const WrapperMenu = styled.section`
    margin: 0 auto;
    padding: 10px;
    max-width: 310px;

    .flex-menu {
        max-width: 320px;
        display: flex;
        flex-direction: column;
    }

    ${breakpoint.lg} {
        padding: 30px;
        max-width: 1440px;
        min-height: 1724px;

        .flex-menu {
            max-width: 1380px;
            min-height: 1724px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 50px;
        }
    }
`;

export const StyledWrapperMenuColor = styled.div`
    background-color: ${({theme}) => theme.colors.lightPink};
`;

export const MenuImg = styled.div`
    max-width: 320px;

    img {
        margin-top: 25px;
        align-items: center;
        max-width: 300px;
        min-height: 350px;
    }

    ${breakpoint.lg} {
        max-width: 491px;
        min-height: 955px;

        img {
            align-items: start;
            max-width: 398px;
            min-height: 548px;
        }
    }
`;

export const MenuList = styled.div`
    margin-top: 53px;
    max-width: 320px;

    ${breakpoint.lg} {
        margin-top: 53px;
        max-width: 818px;
        min-height: 1684px;
    }
`;

export const Starters = styled.div`
    padding: 50px 10px 10px 10px;
    max-width: 819px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    ${breakpoint.lg} {
        padding: 50px 10px 10px 10px;
        max-width: 819px;
        min-height: 635px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

export const Dish = styled.div`
    margin-top: 20px;
    padding: 10px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;

    ${breakpoint.lg} {
        margin-top: 50px;
        padding: 10px;
        max-width: 819px;
        min-height: 635px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

export const Dessert = styled.div`
    margin-top: 50px;
    padding: 10px;
    max-width: 819px;
    min-height: 368px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    ${breakpoint.lg} {
        margin-top: 50px;
        padding: 10px;
        max-width: 819px;
        min-height: 368px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

export const Span = styled.div`
    margin: 0 4px 12px 0;
    max-width: 60px;
    min-height: 1px;
    background-color: ${({theme}) => theme.colors.yellow};
`;

export const WrapperImgList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    width: 320px;

    ${breakpoint.lg} {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 10px;
        height: 85px;
        width: 734px;
    }
`;

export const WrapperImg = styled.div`
    padding: 0 0 0 10px;
    max-width: 84px;
    min-height: 84px;
    align-items: center;

    img {
        max-width: 84px;
        min-height: 84px;
    }

    ${breakpoint.lg} {
        padding: 0;
    }
`;

export const WrapperText = styled.div`
    padding: 21px 9px 4px 11px;

    ${breakpoint.lg} {
        position: relative;
        max-width: 730px;
        min-height: 84px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;

        &:before {
            content: "";
            position: absolute;
            margin: 72px 0 0 400px;
            width: 120px;
            height: 1px;
            background-color: ${({theme}) => theme.colors.grey8};
        }
    }
`;

export const WrapperSenna = styled.div`
    margin: -53px 27px 20px 198px;
    max-width: 60px;
    min-height: 60px;
    background-color: ${({theme}) => theme.colors.moccasin};
    border-radius: 100%;
    padding: 8px 0 0 7px;

    ${breakpoint.lg} {
        position: absolute;
        margin: 36px 27px 15px 646px;
        max-width: 80px;
        min-height: 80px;
        background-color: ${({theme}) => theme.colors.transparent};
    }
`;