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

export const Title = styled.h1`
${tw`pt-4 text-center`}
    color: #7Ba8A4;
    font-size: 45px;
    text-shadow: 1px 1px 2px #000000;
`

export const SecTitle = styled.h3`
${tw`pt-4 text-center`}
    font-size: 36px;
    text-shadow: 1px 1px 2px #000000;   
`

export const Info = styled.p`
${tw`p-4 text-lg text-justify`}
`