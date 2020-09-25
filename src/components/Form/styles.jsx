import tw, { styled } from 'twin.macro';

export const Button = styled.button`
${tw`px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent`}
`

export const Div = styled.div`
${tw`p-4 text-center`}
width:35%;

@media (max-width: 480px) {
${tw`w-full p-4 text-center`}
}
`

