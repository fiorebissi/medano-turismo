import tw, { styled } from 'twin.macro';
import { Link as LinkRouter } from '@reach/router';

export const Section = styled.section`
${tw`pt-56`}
background-color: rgba(196,175,145,.5);
`

export const Title = styled.h1`
${tw`text-2xl text-center text-gray-700`}

@media (max-width: 1023px) {
    font-size: 2em;
}
`
export const EventList = styled.section`
    display: flex;
    flex-wrap: wrap;
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

@media (max-width: 1023px) {
    padding: 0;
}
`
export const Link = styled(LinkRouter)`
${tw`px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
`;
