import styled from 'styled-components';
import { breakpoint } from '../../../theme';


export const WrapperLocate = styled.section`
    margin: 0 auto;
    max-width: 320px;

    ${breakpoint.md} {
        max-width: 768px;
    }

    ${breakpoint.lg} {
        padding: 5px 0px 10px 26px;
        max-width: 1440px;
    }
`;


export const LocateCard = styled.div`
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    ${breakpoint.md} {
        margin: 40px auto;
        flex-direction: column;
    }

   ${breakpoint.lg} {
        margin-top: 45px;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: none;
        flex-direction: row;
    }
`;


export const LocateItem = styled.div`
    min-height: 83px;
    img {
        display: block;
        margin: 0 auto;
        width: 83px;
        height: 83px;
    }
    .flex {
        display: flex;
        flex-direction: column;
        justify-content: start;
        flex-wrap: wrap;
        gap: 20px;

        ${breakpoint.lg} {
            display: flex;
            flex-direction: row; 
        }
    }

    ${breakpoint.md} {
        img {
            display: block;
            margin: 0px auto;
            width: 83px;
            height: 83px;
        }
    }

    ${breakpoint.lg} {
        img {
            display: block;
            margin: 0px -20px -15px 0px;
            width: 83px;
            height: 83px;
        }
    }

    h3 {
        text-align: center;

        ${breakpoint.lg} {
            text-align: start;
            padding: 10px 6px 0px 10px;
            float: right;
            width: 250px;
        }
    }

    h4 {
        text-align: center;
        float: right;
        
        ${breakpoint.md} {
            text-align: center;
            padding: 0px 12px 5px 7px;
            margin: 20px 0px 10px 0px;
        }

        ${breakpoint.lg} {
            text-align: start;
            padding: 0px 12px 5px 75px;
            margin: -29px 7px 29px 19px;
        }
    }
`;


export const WrapperStory = styled.div`
    max-width: 320px;
    min-height: 728px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

    ${breakpoint.md} {
        max-width: 768px;
    }
    ${breakpoint.lg} {
        max-width: 1440px;
        min-height: 728px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;


export const StoryPhoto = styled.div`
    padding: 30px;
    max-width: 700px;   

    ${breakpoint.md} {
        padding: 0px;
    }

    ${breakpoint.lg} {
        padding: 30px;
        
    }
`;


export const WrapperStoryTitle = styled.div`
    padding: 20px;
    max-width: 570px;

    ${breakpoint.md} {
        padding: 0px;
        margin-top: 50px;
        min-height: 200px;
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
    margin: 0 auto;
    padding: 15px;
    max-width: 274px;
    min-height: 156px;
    img {
        margin-top: 0px auto;
    }

    ${breakpoint.lg} {
        margin: 5px;
        padding: 0px;
        img {
            margin-top: 20px;
        }
    }
`;
