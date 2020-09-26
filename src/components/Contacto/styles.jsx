import tw, { styled } from 'twin.macro';


 export const Contact = styled.section`
  background-color: rgba(123,168,164,.8);
  color: white;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & h3 {
    color: white;
    font-size: 20px;
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
flex-wrap: inherit;

@media (max-width: 1023px) {
padding: 0;
}
`

export const FormEmail = styled.form`
.form-email input {
    border-color: gray;
    border-style: solid;
    border-radius: 5px;
    padding: 10px 20px 10px 25px;
    background-image: url('../static/envelope.svg');
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 5px;

  }
  @media (max-width: 480px) {
      margin-left: 20px;
    }

   & button {
    display: block;
    background: transparent;
    color: white;
    padding: 5px 0;
    border-radius: 5px;
    width: 100px;
    margin-top: 10px;
    border: 2px solid gray;
    cursor: pointer;
    transition-duration: 0.4s;

    & button:hover {
      background: #bdbdbd;
    }
   }
  `

  export const SocialLink = styled.div`
  display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    background-size: 50px 50px;
  `