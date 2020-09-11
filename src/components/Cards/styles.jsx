import tw, { styled } from 'twin.macro';

export const Event = styled.article`
${tw`flex-shrink-0 overflow-hidden bg-white rounded-lg`}
  margin: 1%;
  width: 48%;

  & img {
  width: 480px;
  height: 200px;
  object-fit: cover
  }

`

export const EventDetail = styled.div`
${tw`relative text-center bg-white`}
  margin: 20px 40px;
  margin-top: -40px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & h3 {
    font-size: 24px;
    text-shadow: 1px 1px 2px #000000;
  }
`

export const Button = styled.button`
${tw`px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent`}
`