import styled from "styled-components";
import Backg from "../../Imagens/favela1.jpeg"

export const Container= styled.section`
width:100%;
`
export const All= styled.section`
width: 100%;
display: flex;
padding-top: 4%;
justify-content:center;
background-image: url(${Backg});
background-size: 30%;
`
export const Contain= styled.section`
width: 90%;
background-color: white;
padding-bottom: 5%;
margin-bottom: 6%;
box-shadow: black 0.1vw 0vw 1vw 0.4vw;
`
export const Box= styled.div`
width:100%;
text-align: center;
padding: 3%;
`
export const BoxCard= styled.div`
width:100%;
display:flex;
justify-content: center;
align-items: center;
padding-bottom: 8%;
`

export const Cards= styled.div`
width:80%;
display:flex;
justify-content:center;
flex-wrap: wrap;
`
export const Imagem= styled.img`
width:15%;
border-radius:1vw ;
margin: 2% 2% 0 0;
transition:ease-in-out  .2s;
 :hover {
    transform: scale(1.1);
 }
`
export const BoxP= styled.div`
width:100%;
display:flex;
justify-content: space-around;
align-items:center;
iframe{
    width:40%;
    height: 60vh;
}
`
export const ContP= styled.div`
width: 40%;
box-shadow: grey 0.3vw 0.3vw 0.3vw 0.3vw;
h2{
    text-align: center;
    font-size: 2vw;
}
p{
    text-align: justify;
    font-size: 1.2vw;
    padding: 4%;
}
`
export const ContFav= styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const Fav= styled.img`
width: 60%;
margin-top: 5%;
`
