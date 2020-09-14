import tw, { styled } from 'twin.macro';
import { Link as LinkRouter } from '@reach/router';


export const Navbar = styled.div`
height: 160px;
color: black;
background-color: rgb(196,175,145);
flex-wrap: wrap;

&.menu{
  &.is-active {
      left: 0;
      display: block;
      z-index: 40;
    }
}
    
`
export const Image = styled.img`
margin: 0 auto;
width: 190px;
height: auto;
`
export const Link = styled(LinkRouter)`
${tw`ml-4 text-xl text-white hover:text-black`}
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
`

export const Menu = styled.nav`
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

`