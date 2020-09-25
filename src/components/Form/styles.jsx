import tw, { styled } from 'twin.macro';

export const Input = styled.input`
${tw`block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white`}
`

export const Label = styled.label`
${tw`block mb-2 font-bold tracking-wide text-gray-700`}
`

export const Button = styled.button`
${tw`px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent`}
`

export const Text = styled.textarea`
${tw`block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none`}
`

export const Column = styled.div`
float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;

  @media (max-width: 600px) {
    width: 100%100vh;
    margin-top: 0;
  }
`

export const Row = styled.div`
flex-wrap: wrap;
 & ::after {
  content: "";
  display: table;
  clear: both;
 }

`