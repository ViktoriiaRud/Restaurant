import styled from "styled-components";
import {breakpoint} from "../../../theme";
export const BackgroundHallColor = styled.div`
    position: relative;
    img {
        margin: 50px auto;
        width: 100%;
        object-fit: cover;
        max-height: 1200px;
    }
`;
export const BackgroundHall = styled.section`
    margin: 150px auto;
    max-width: 1940px;
    position: relative;
`;

export const ImgDark = styled.div`
    display: none;
    ${breakpoint.lg} {
        display: block;
        position: absolute;
        margin: -1100px 0 0 235px;
        width: 100%;
        max-width: 920px;
        min-height: 697px;
        z-index: 0;
        background: rgba(41, 46, 54, 0.95);
        border-radius: 0;
    }
`;

export const WrapperForm = styled.div``;
