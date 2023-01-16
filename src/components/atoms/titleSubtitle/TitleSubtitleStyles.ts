import styled from 'styled-components';
import { breakpoint } from '../../../theme';

export const TitleStory = styled.div` 
    text-align: center;
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 0.2px;
    color: #292E36; 

    ${breakpoint.lg} {
        text-align: start;
       }
`;

export const DataTitle = styled(TitleStory)``;



