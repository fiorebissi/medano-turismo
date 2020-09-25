import tw, { styled } from 'twin.macro';

export const Foot = styled.footer`
${tw`flex text-white bg-black`}
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & a {
    color: white;
  }

  @media (max-width: 480px){
      display: block;
      text-align: center;
      border: 1px solid transparent;
  }
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
    flex-wrap: wrap;

    @media (max-width: 1023px) {
      padding: 0;
    }
`

export const Ptext = styled.p`
${tw`inline-flex`}

@media (max-width: 480px) {
  place-self: center;
}
`