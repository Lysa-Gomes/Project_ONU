import React, {useState} from "react";
import * as S from "./Styled";
import Favela from "../../Imagens/favela.jpeg"

import Ods1 from "./Modal/ods1";
import Ods2 from "./Modal/ods2";
import Ods3 from "./Modal/ods3";
import Ods4 from "./Modal/ods4";
import Ods5 from "./Modal/ods5";
import Ods6 from "./Modal/ods6";
import Ods7 from "./Modal/ods7";
import Ods8 from "./Modal/ods8";
import Ods9 from "./Modal/ods9";
import Ods10 from "./Modal/ods10";

import Erradicação from "../../Imagens/Card1.png";
import Fome from "../../Imagens/Card2.webp";
import Saúde from "../../Imagens/card3.jpg";
import Educação from "../../Imagens/card4.png";
import Igualdade from "../../Imagens/card5.png";
import Agua from "../../Imagens/card6.png";
import Energia from "../../Imagens/card7.png";
import Trabalho from "../../Imagens/card8.png";
import Industria from "../../Imagens/card9.jpg";
import Desigualdade from "../../Imagens/card10.jpeg";

export default function App() {

    const [card1,
        setCard1] = useState(false)
    const [card2,
        setCard2] = useState(false)
    const [card3,
        setCard3] = useState(false)
    const [card4,
        setCard4] = useState(false)
    const [card5,
        setCard5] = useState(false)
    const [card6,
        setCard6] = useState(false)
    const [card7,
        setCard7] = useState(false)
    const [card8,
        setCard8] = useState(false)
    const [card9,
        setCard9] = useState(false)
    const [card10,
        setCard10] = useState(false)
    const Close = () => {
        setCard1(false);
        setCard2(false);
        setCard3(false);
        setCard4(false);
        setCard5(false);
        setCard6(false);
        setCard7(false);
        setCard8(false);
        setCard9(false);
        setCard10(false);
    }

    return (
        <S.Container>
            <S.All>
                <S.Contain>
                    <S.Box>
                        <h2>Objetivo de Desenvolvimento Sustentável</h2>
                        <p>Os cards abaixo relatam problemas reais vividos dentro do bairro Jardim Lapena.</p>
                    </S.Box>
                    <S.BoxCard>
                        <S.Cards>
                            <S.Imagem src={Erradicação} alt="Card erradicação" onClick={() => setCard1(true)}/> {!!card1 && (<Ods1
                                onClose={() => {
                                setCard1(false)
                            }}/>)}
                            <S.Imagem src={Fome} alt="Card Fome zero" onClick={() => setCard2(true)}/>
                            {!!card2 && (<Ods2
                                onClose={() => {
                                setCard2(false)
                            }}/>)}
                            <S.Imagem src={Saúde} alt="Card saúde" onClick={() => setCard3(true)}/>
                            {!!card3 && (<Ods3
                                onClose={() => {
                                setCard3(false)
                            }}/>)}
                            <S.Imagem src={Educação} alt="Card educação" onClick={() => setCard4(true)}/>
                            {!!card4 && (<Ods4
                                onClose={() => {
                                setCard4(false)
                            }}/>)}
                            <S.Imagem src={Igualdade} alt="Card igualdade" onClick={() => setCard5(true)}/>
                            {!!card5 && (<Ods5
                                onClose={() => {
                                setCard5(false)
                            }}/>)}
                            <S.Imagem src={Agua} alt="Card agua" onClick={() => setCard6(true)}/>
                            {!!card6 && (<Ods6
                                onClose={() => {
                                setCard6(false)
                            }}/>)}
                            <S.Imagem src={Energia} alt="Card energia" onClick={() => setCard7(true)}/>
                            {!!card7 && (<Ods7
                                onClose={() => {
                                setCard7(false)
                            }}/>)}
                            <S.Imagem src={Trabalho} alt="Card trabalho" onClick={() => setCard8(true)}/>
                            {!!card8 && (<Ods8
                                onClose={() => {
                                setCard8(false)
                            }}/>)}
                            <S.Imagem src={Industria} alt="Card industria" onClick={() => setCard9(true)}/>
                            {!!card9 && (<Ods9
                                onClose={() => {
                                setCard9(false)
                            }}/>)}
                            <S.Imagem src={Desigualdade} alt="Card desigualdade" onClick={() => setCard10(true)}/>
                            {!!card10 && (<Ods10
                                onClose={() => {
                                setCard10(false)
                            }}/>)}
                        </S.Cards>
                    </S.BoxCard>
                    <S.BoxP>
                        <S.ContP>
                            <h2>Sobre o Jardim Lapena</h2>
                            <p>Localizado no distrito de São Miguel Paulista, o Jardim Lapenna é o lar de
                                aproximadamente 12 mil pessoas1 , que residem em uma área de 0,3 km2 .
                                Historicamente, o processo de ocupação do território tem sido predominantemente
                                precário, caracterizado nos últimos dez anos pela presença de habitações nas
                                áreas mais sensíveis ambientalmente. Acompanhou o aumento da oferta de serviços
                                sociais e o acesso ao trem 1 Segundo dados do cadastro de famílias da Unidade
                                Básica de Saúde. 2 Para todos os efeitos deste documento, o Plano de Bairro do
                                Jardim Lapenna, aplica-se no território compreendido no seguinte perímetro
                                localizado entre o muro da CPTM, muro da SABESP, muro da indústria Nitro Química
                                e Ponte da avenida Jacú Pêssego. Esta localidade correspondente aos setores
                                censitários metropolitano, uma maior atratividade e o aumento populacional num
                                cenário precário. O bairro enfrenta importantes desafios habitacionais, sociais,
                                ambientais e urbanísticos.</p>
                        </S.ContP>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/EAAMjUgCS6Q"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </S.BoxP>
                    <S.ContFav>
                        <S.Fav src={Favela} alt="PNG Favela"/>
                    </S.ContFav>
                </S.Contain>
            </S.All>
        </S.Container>
    )
}