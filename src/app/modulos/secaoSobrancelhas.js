/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import estilo from "../estilos/secaoGenericas.module.css";

import iconSeta from "../../../public/images/icons/seta.svg";

export default function secaoSobrancelhas() {

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
            <section className={estilo.secoesGenericas} id="Sobrancelhas">
                <div className={estilo.slider}>
                    <span ref={setaEsquerda}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                    <div className={estilo.scrollDiv} ref={scrollDiv}>
                        <h3 ref={h3Atual}>A micropigmentação é conhecida como “maquiagem definitiva” porque os resultados geralmente duram de um a cinco anos.</h3>
                        <h3>A técnica de micropigmentação é similar à tatuagem, mas utiliza pigmentos diferentes e uma agulha mais fina.</h3>
                        <h3>O uso de micropigmentação para fins estéticos tem sido documentado desde o Antigo Egito, onde as mulheres utilizavam henna para tingir as sobrancelhas e os cílios.</h3>
                        <h3>A micropigmentação é uma técnica que pode ser adaptada para diferentes tons de pele e tipos de sobrancelhas, o que a torna adequada para pessoas de todas as origens.</h3>
                        <h3>A micropigmentação é uma técnica que requer habilidade e experiência para ser realizada com segurança e sucesso.</h3>
                        <h3>É por esse motivo que a Espaço Hair tem investido nos melhores profissionais para sua segurança e beleza.</h3>
                    </div>
                    <span ref={setaDireita}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                </div>
                <div className={estilo.imgGrade}>
                    <img src="/images/sobrancelhas/01.jpeg" alt="image-espaco-hair-luzes1" />
                    <img src="/images/sobrancelhas/02.jpeg" alt="image-espaco-hair-luzes2" />
                    <img src="/images/sobrancelhas/03.jpeg" alt="image-espaco-hair-luzes3" />
                </div>
            </section>
        </>
    )
}