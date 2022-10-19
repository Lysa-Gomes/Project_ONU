import React from "react";
import * as S from "./Styled";
import Erradicação from "../../Imagens/Card1.png";
import Fome from "../../Imagens/Card2.webp";
import Saúde from "../../Imagens/card3.jpg";
import Educação from "../../Imagens/card4.png";
import Igualdade from "../../Imagens/card5.png";
import Agua from "../../Imagens/card6.png";
import Energia  from "../../Imagens/card7.png";
import Trabalho from "../../Imagens/card8.png";
import Industria from "../../Imagens/card9.jpg";
import Desigualdade from "../../Imagens/card10.jpeg";

export default function App (){
    return(
        <S.Container>
            <S.Box>
                <h2>Objetivo de Desenvolvimento Sustentável</h2>
                <p>Os cards abaixo relatam problemas reais vividos dentro do bairro Jardim Lapena.</p>
            </S.Box>
                <S.BoxCard>
                    <S.Cards>
                        <S.Imagem src={Erradicação} alt="Card erradicação"/>
                        <S.Imagem src={Fome} alt="Card Fome zero"/>
                        <S.Imagem src={Saúde} alt="Card saúde"/>
                        <S.Imagem src={Educação} alt="Card educação"/>
                        <S.Imagem src={Igualdade} alt="Card igualdade"/>
                        <S.Imagem src={Agua} alt="Card agua"/>
                        <S.Imagem src={Energia} alt="Card energia"/>
                        <S.Imagem src={Trabalho} alt="Card trabalho"/>
                        <S.Imagem src={Industria} alt="Card industria"/>
                        <S.Imagem src={Desigualdade} alt="Card desigualdade"/>
                    </S.Cards>
                </S.BoxCard>
                <S.BoxP>
                    <S.ContP>
                        <h2>Sobre o Jardim Lapena</h2>
                        <p>Localizado no distrito de São Miguel Paulista,
                        o Jardim Lapenna é o lar de aproximadamente 12 mil pessoas1 , que residem em uma área de 0,3 km2 .
                        Historicamente, o processo de ocupação do território tem sido predominantemente precário,
                        caracterizado nos últimos dez anos pela presença de habitações nas áreas mais sensíveis ambientalmente.
                        Acompanhou o aumento da oferta de serviços sociais e o acesso ao trem 1 Segundo dados do cadastro de famílias da
                        Unidade Básica de Saúde. 2 Para todos os efeitos deste documento, o Plano de Bairro do Jardim Lapenna, aplica-se
                        no território compreendido no seguinte perímetro localizado entre o muro da CPTM, muro da SABESP,
                        muro da indústria Nitro Química e Ponte da avenida Jacú Pêssego. Esta localidade correspondente aos setores
                        censitários metropolitano, uma maior atratividade e o aumento populacional num cenário precário.
                        O bairro enfrenta importantes desafios habitacionais, sociais, ambientais e urbanísticos.</p>
                    </S.ContP>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EAAMjUgCS6Q" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </S.BoxP>
        </S.Container>
    )
}