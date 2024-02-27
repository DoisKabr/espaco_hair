/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, {useEffect , useState} from "react";

import estilo from "../estilos/estiloHeader.module.css";

export default function header() {

    const [aparecerTitulo, setAparecerTitulo] = useState(false);
    const [aparecerSub, setAparecerSub] = useState(false);
    const [aparecerConvite, setAparecerConvite] = useState(false);
    const [aparecerBotao, setAparecerBotao] = useState(false);

    useEffect(()=>{
        const intervaloTitulo = setInterval(()=>{
            setAparecerTitulo(true);
        }, 1000);
        const intervaloSub = setInterval(()=>{
            setAparecerSub(true);
        }, 1100);
        const intervaloConvite = setInterval(()=>{
            setAparecerConvite(true);
        }, 1200);
        const intervaloBotao = setInterval(()=>{
            setAparecerBotao(true);
        }, 2000);

        return ()=>{
            intervaloTitulo,
            intervaloSub,
            intervaloConvite,
            intervaloBotao
        }
    }, [])

    return (
        <>
            <section className={estilo.header} id="Inicio">
                <section className={estilo.apresentacaoHeader}>
                    <h1 style={{translate: + aparecerTitulo ? "0px" : "-50vw", opacity: + aparecerTitulo ? "1" : "0"}}>Espaço Hair</h1>
                    <h4 style={{translate: + aparecerSub ? "0px" : "-50vw", opacity: + aparecerSub ? "1" : "0"}}>Há mais de 10 anos no mercado.</h4>
                    <h2 style={{translate: + aparecerConvite ? "0px" : "-50vw", opacity: + aparecerConvite ? "1" : "0"}}>Faça seu Agendamento Hoje !</h2>
                    <a href="https://wa.me/5511999999999?text=Oi%20vim%20pelo%20Site." style={{opacity: + aparecerConvite ? "1" : "0"}}>Agendar !</a>
                </section>
                <div></div>
            </section>
        </>
    )
}