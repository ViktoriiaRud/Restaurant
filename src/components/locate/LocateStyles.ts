import styled from 'styled-components';


export const WrapperLocate = styled.section`
    padding: 30px 0px 10px 24px;
    max-width: 1440px;
    min-height: 300px;
`;

export const LocateCard = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        flex-direction: row;
        justify-content: start;
        flex-wrap: wrap;
    }
    
    h3 {
        padding: 10px 62px 0px 10px;
        float: right;
        width: 250px;
    }
    h4 {
        padding: 0px 12px 5px 75px;
        float: right;
        margin: -33px 7px 29px 25px;
    }
`;


export const WrapperStory = styled.div`
    max-width: 1440px;
    min-height: 728px;
`;


export const StoryPhoto = styled.div`
    padding: 50px;
    max-width: 743px;
    min-height: 519px;
`;


export const WrapperStoryTitle = styled.div`
    max-width: 570px;
    min-height: 568px;
`;


export const WrapperData = styled.div`
    max-width: 572px;
    min-height: 156px;
`;


export const DataCard = styled.div`
    max-width: 274px;
    min-height: 156px;
`;