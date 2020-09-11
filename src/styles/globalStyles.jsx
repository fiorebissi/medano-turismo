import tw, { styled } from 'twin.macro';

export const Section = styled.section`
${tw`pt-2`}
background-color: rgba(196,175,145,.5);
`

export const EventList = styled.section`
${tw`flex flex-wrap`}
`

export const Container = styled.div`
max-width: 1000px;
    width: 100%;
    flex:1;
    margin: 0 auto;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    height: inherit;
    flex-wrap: inherit;
`