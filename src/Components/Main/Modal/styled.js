import styled from "styled-components";

export const ContMod = styled.section`
  width: 100%;
  height: 103vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const Mod = styled.div`
  width: 45%;
  height: 83%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 2vw;
  h2{
    padding:5% 0 0 5%;
    font-size:1.5vw
  }
  p{
    padding:5%;
    font-size:1.2vw
  }
`;

export const BtnMod = styled.button`
  width: 2.8%;
  padding: 0.5%;
  font-size: 1.5vw;
  position:absolute;
  top:3%;
  right:2%;
  background-color:  #C7212F;
  color: black;
  border-radius: 50%;
  border: none;
  
  &:hover {
    background-color:lightgray;
  }
`;
export const Bg = styled.img`
width:100%;
height:15vh;
object-fit: cover;
`