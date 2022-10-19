import styled from "styled-components";
import Background from "../../Imagens/Lapena.jpg";
import NukaSlid from "nuka-carousel";

export const Container = styled.section `
    width: 100%;
    height:100vh;
    background-color: #8B8787;
    background-image:url(${Background});
    background-size: 75%;
    background-repeat: no-repeat;
    display:flex;
`
export const BoxW = styled.div `
    width:4vw;
    height:100vh;
    background-color: whitesmoke;
`
export const Titlezl = styled.div`
    width:10%;

`
export const Zl = styled.p`
    width:40%;
    position: absolute;
    top:40%;
    right: 78%;
    font-size:1.5vw;
    text-align: center;
    font-weight: bolder;
    transform: rotate(270deg);
`
export const BoxLogo = styled.div`
    width: 100%;
    height:95vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`

export const Logo = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3%;

`
export const ImgL = styled.img`
    width: 80%;
`
export const BoxTitle = styled.div`
width:70% ;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 13% 0% 0% 8%;

`
export const Title = styled.h1`
width: 50%;
color:white;
text-shadow: black 0.4vw 0.1vw 0.2vw;
font-size: 5.5vw;
line-height:13vh;
padding-bottom: 18%;
`
export const Underline1 = styled.div`
width:86%;
height: 0.8vh;
background-color: whitesmoke;
`
export const ContNav = styled.div`
width: 100%;
height: 100vh;
background-color: ;

`
export const Navegation = styled.nav`
width: 100%;
padding:20% 0 5% 55%;
font-size:1.5vw;
`
export const List = styled.ul`
list-style: none;
color:white;

`

export const Underline2 = styled.div`
width: 75%;
height: 0.8vh;
margin-left:22%;
background-color: whitesmoke;
`


export const NukaSli = styled(NukaSlid)`
    background: whitesmoke;
    position: relative;
    margin-top:50%;
`
export const ImgLap = styled.img`
    width:100%;
    height: 25vh;
    object-fit: cover;
    padding: 5%;
`

export const Cont = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

`