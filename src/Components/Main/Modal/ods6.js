import React from "react";
import * as S from "./styled";
import Img6 from "../../../Imagens/agua2.jpg"


export default function App({id= "card6", onClose= () => {}}){
    const Close = (e) => {
        if (e.target.id === id) onClose();
    };
    return(
        <S.ContMod id={id} onClick={Close}>
        <S.Mod>
        <S.Bg src={Img6} alt="Agua potável e saneamento"/>
        <h2>Lorem ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </S.Mod>
        <S.BtnMod onClick={onClose}>X</S.BtnMod>
       </S.ContMod>
    )
}