/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import estilo from "../estilos/secaoGenericas.module.css";

import iconSeta from "../../../public/images/icons/seta.svg";

export default function secaoCabelos() {

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
            <section className={estilo.secoesGenericas} id="Cabelos">
                <div className={estilo.imgGrade}>
                    <img src="/images/cabelos/01.jpeg" alt="image-espaco-hair-luzes1" />
                    <img src="/images/cabelos/02.jpeg" alt="image-espaco-hair-luzes2" />
                    <img src="/images/cabelos/03.jpeg" alt="image-espaco-hair-luzes3" />
                </div>
                <div className={estilo.slider}>
                    <span ref={setaEsquerda}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                    <div className={estilo.scrollDiv} ref={scrollDiv}>
                        <h3 ref={h3Atual}>A tendência das luzes nos cabelos surgiu durante o século XVIII, na França</h3>
                        <h3>Os cabelos iluminados eram símbolo de status social e de uma vida saudável e luxuosa</h3>
                        <h3>As luzes são uma das técnicas mais populares nos salões de beleza, permitindo diversas variações de cores e estilos</h3>
                        <h3>Para manter os cabelos saudáveis e bonitos com luzes, é importante investir em cuidados como hidratação e proteção solar</h3>
                        <h3>As luzes podem ser adaptadas a diferentes tipos de cabelo e estilos, desde os mais naturais até os mais ousados e coloridos</h3>
                        <h3>Se você está pensando em aderir às luzes nos cabelos, é importante buscar um profissional qualificado e experiente para garantir um resultado satisfatório.</h3>
                    </div>
                    <span ref={setaDireita}><Image src={iconSeta} width={50} height={50} alt="seta-espaco-hair" /></span>
                </div>
            </section>
        </>
    )
}