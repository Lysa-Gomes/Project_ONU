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
    cursor: pointer;
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

`
export const Navegation = styled.nav`
width: 100%;
padding:20% 0 5% 25%;
font-size:1.5vw;
text-align: justify;
`
export const List = styled.ul`
list-style: none;
color:white;
li{
    width: 100%;
    cursor: pointer;
    padding-left: 3%;
    margin-bottom: 1%;
    position: relative;
    z-index: 2;
    :hover{
        color: darkgray;
    }
    ::before {
    content: "";
    width: 0%;
    height: 5vh;
    position: absolute;
    top:0; left:0;
    background-color: whitesmoke;
   
    }
:hover::before {
    position:absolute;
    width: 90%;
    transition: 0.4s linear;
    z-index: -1;
  }
}

`

export const Underline2 = styled.div`
width: 95%;
height: 0.8vh;
background-color: whitesmoke;
`


export const NukaSli = styled(NukaSlid)`
    background: whitesmoke;
    position: relative;
    margin-top:50%;
`
export const BtnMove = styled.button`
    width:3vw;
    height: 7vh;
    background: rgba(0,0,0, 0.5);
    border: none;
    padding: 3% 0 4% 0;
    font-size: 1.3vw;
    font-weight: bolder;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
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