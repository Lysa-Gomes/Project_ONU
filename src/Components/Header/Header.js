import React from "react";
import * as S from "./Styled";

import Uol from "../../Imagens/uol1.png";
import Fc from "../../Imagens/facebook_black.png";

import Bairro1 from "../../Imagens/jd.jpg";
import Bairro2 from "../../Imagens/moradora.jpg";
import Bairro3 from "../../Imagens/images.jpeg";
import Bairro4 from "../../Imagens/enchente.jpg";

const settings = {
    wrapAround:true,
    cellSpacing:"px",
    dragging:true,
    slidesToShow:2,
    cellAlign:"left",
    adaptiveHeight:true,
    nextButtonText: 'seila',
    
}

export default function Main() {
    return (
        <S.Container>
                <S.BoxW>
                    <S.Titlezl>
                        <S.Zl>ZL(Zona Leste)</S.Zl>
                    </S.Titlezl>
                    <S.BoxLogo>
                        <S.Logo
                            href="https://pt-br.facebook.com/planodebairroterritoriolapenna/"
                            target="_blank">
                            <S.ImgL src={Fc} alt="facebook logo"/>
                        </S.Logo>
                        <S.Logo href="https://www.uol.com.br/ecoa/ultimas-noticias/2021/06/25/mulheres-se-unem-e-formam-rede-de-guardias-em-comunidade-periferica-de-sp.htm" target="_blank">
                            <S.ImgL src={Uol} alt="Uol logo"/>
                        </S.Logo>
                    </S.BoxLogo>
                </S.BoxW>
                <S.BoxTitle>
                    <S.Title>JARDIM LAPENA</S.Title>
                    <S.Underline1></S.Underline1>
                </S.BoxTitle>
                <S.Cont>
                    <S.ContNav>
                        <S.Navegation>
                            <S.List>
                                <li>HOME</li>
                                <li>CARDS ODS</li>
                                <li>SOBRE</li>
                            </S.List>
                        </S.Navegation>
                        <S.Underline2></S.Underline2>
                        <div>
                            <S.NukaSli {...settings}
                             renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                                <S.BtnMove onClick={previousSlide} disabled={previousDisabled}>
                                  {"<"}
                                </S.BtnMove>)}
                             renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                                <S.BtnMove onClick={nextSlide} disabled={nextDisabled}>
                                  {">"}
                                </S.BtnMove>
                              )}
                              
                            >
                                <S.ImgLap src={Bairro1} alt="Jardim lapena"/>
                                <S.ImgLap src={Bairro2} alt=""/>
                                <S.ImgLap src={Bairro3} alt=""/>
                                <S.ImgLap src={Bairro4} alt=""/>
                            </S.NukaSli>
                        </div>
                    </S.ContNav>
                </S.Cont>
        </S.Container>
    )
}