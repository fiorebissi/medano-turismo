import tw, { styled } from 'twin.macro';
import { Link as LinkRouter } from '@reach/router';


export const Navbar = styled.div`
    background-color: rgb(196,175,145);
    color: black;
    display: flex;
    height: 160px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      display: block;
      height: auto;

      & ol {
        display: block;
        height: 50px;
        flex-wrap: wrap;
      flex-direction:column;
      }
    }

    & ol {
      display: flex;
      height: inherit;
    }

    
`
export const Image = styled.img`
margin: 0 auto;
width: 190px;
height: auto;
`
export const Link = styled(LinkRouter)`
${tw`ml-4 text-xl text-white hover:text-black`}
    text-decoration: none;
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0 10px;

    @media (max-width: 767px) {
      justify-content: center;
      height: 40px;
      font-size: 2em;
      margin-bottom: .5em;
    }
`;

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    flex:1;
    margin: 0 auto;
    display: flex;
    justify-content: inherit;
    align-items: inherit;
    height: inherit;
    flex-wrap: inherit;

    @media (max-width: 1023px) {
      padding: 0;
    }

    @media (max-width: 767px) {
      &.logo {
        text-align: center;
      }
    }


`

export const Menu = styled.nav`
height: inherit;

@media (max-width:767px) {
  position: fixed;
  background: rgba(196,175,145,.8);
  z-index: 2;
  top: 0;
  left: -100vw;
  width: 100vw;
  bottom: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: .3s;

  &.is-active {
    left: 0;
  }
}

& ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
  

`