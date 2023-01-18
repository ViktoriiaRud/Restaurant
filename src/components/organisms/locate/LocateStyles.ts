import styled from 'styled-components';
import { breakpoint } from '../../../theme';


export const WrapperLocate = styled.section`
    padding: 75px 0px 10px 26px;
    max-width: 320px;

    ${breakpoint.md} {
        max-width: 578px;
    }

    ${breakpoint.lg} {
        padding: 75px 0px 10px 26px;
        max-width: 1440px;
        min-height: 300px;
    }
`;


export const LocateCard = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${breakpoint.md} {
        justify-content: space-between;
        flex-direction: row;
    }

   ${breakpoint.lg} {
        justify-content: space-between;
        flex-direction: row;
    }
`;


export const LocateItem = styled.div`
    max-width: 440px;
    min-height: 83px;
    img {
        width: 83px;
        height: 83px;
    }
    .flex {
        display: flex;
        flex-direction: column;
        justify-content: start;
        flex-wrap: wrap;

        ${breakpoint.lg} {
            display: flex;
            flex-direction: row;
        }
    }
    
    h3 {
        text-align: center;

        ${breakpoint.lg} {
            text-align: start;
            padding: 10px 62px 0px 10px;
            float: right;
            width: 250px;
        }
    }

    h4 {
        text-align: center;
        float: right;
        
        ${breakpoint.md} {
            text-align: start;
            padding: 0px 12px 5px 7px;
            margin: 20px 0px 10px 0px;
        }

        ${breakpoint.lg} {
            padding: 0px 12px 5px 75px;
            margin: -29px 7px 29px 19px;
        }
    }
`;


export const WrapperStory = styled.div`
    max-width: 1440px;
    min-height: 728px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;


export const StoryPhoto = styled.div`
    padding: 30px;
    max-width: 700px;   
`;


export const WrapperStoryTitle = styled.div`
    padding: 20px;
    margin-top: 50px;
    max-width: 570px;
    min-height: 200px;
    
    ${breakpoint.md} {
        padding: 0px;
    }
`;


export const WrapperData = styled.div`
    padding: 15px;
    max-width: 572px;
    min-height: 156px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    ${breakpoint.md} {
        padding: 0px;
    }
`;


export const DataCard = styled.div`
    max-width: 286px;
    min-height: 156px;
`;


export const Autograph = styled.div`
    padding: 15px;
    max-width: 274px;
    min-height: 156px;
    img {
        margin-top: 20px;
    }

    ${breakpoint.lg} {
        padding: 0px;
    }
`;
