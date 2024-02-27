/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import estilo from "../estilos/secaoGenericas.module.css";

import iconSeta from "../../../public/images/icons/seta.svg";

export default function secaoUnhas() {

    const scrollDiv = useRef();
    const setaEsquerda = useRef();
    const setaDireita = useRef();
    const h3Atual = useRef();

    let currentScrollDiv;
    let currentSetaEsquerda;
    let currentSetaDireita;
    let currenH3Atual;

    useEffect(() => {
        currentScrollDiv = scrollDiv.current
        currentSetaDireita = setaDireita.current
        currentSetaEsquerda = setaEsquerda.current
        currenH3Atual = h3Atual.current

        currentSetaEsquerda.addEventListener("click", (el) => {
            el.preventDefault();
            currentScrollDiv.scrollLeft -= currenH3Atual.offsetWidth
        })
        currentSetaDireita.addEventListener("click", (el) => {
            el.preventDefault();
            currentScrollDiv.scrollLeft += currenH3Atual.offsetWidth
        })

        const intevalo = setInterval(() => {
            currentScrollDiv.scrollLeft += currenH3Atual.offsetWidth
            if (currentScrollDiv.scrollLeft + currentScrollDiv.offsetWidth >= (currenH3Atual.offsetWidth * 6)) {
                currentScrollDiv.scrollLeft = 0
            }
        }, 10000);
        return () => {
            intevalo
        }
    }, []);

    return (
        <>
            <section className={estilo.secoesGenericas} id="Unhas">
                <div className={estilo.imgGrade}>
                    <img src="/images/unhas/01.jpg" alt="image-espaco-hair-luzes1" />
                    <img src="/images/unhas/02.jpg" alt="image-espaco-hair-luzes2" />
                    <img src="/images/unhas/03.jpg" alt="image-espaco-hair-luzes3" />
                </div>
                <div className={estilo.slider}>
                    <span ref={setaEsquerda}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                    <div className={estilo.scrollDiv} ref={scrollDiv}>
                        <h3 ref={h3Atual}>A história das unhas postiças não começa agora.</h3>
                        <h3>Lá no século XIV, a realeza da dinastia Ming, na China, já adotava essa extensão e no século XIX, na Grécia, eram usadas conchas de pistache com o mesmo propósito de simular unhas maiores e decorativas.</h3>
                        <h3>Avançando no tempo, nos anos 50, o dentista Fred Slack patenteou as primeiras unhas postiças de acrílico, feitas de material odontológico, se tornando o formato pioneiro entre os alongamentos.</h3>
                        <h3>As primeiras unhas postiças eram retas no comprimento e curvas na ponta, fazendo aquele efeito garra.</h3>
                        <h3>Hoje, temos unhas mais curvadinhas - chamadas de curvatura C -, que dão mais força e estrutura.</h3>
                        <h3>Essas unhas têm uma espessura maior e mais retinha, o que as deixa naturalmente mais bonitas e trabalhadas.</h3>
                    </div>
                    <span ref={setaDireita}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                </div>
            </section>
        </>
    )
}