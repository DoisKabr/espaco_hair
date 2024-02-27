/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ImgLogo from "../../../public/images/logo.png";

import estilo from "../estilos/estiloNavBar.module.css";
import Link from "next/link";

export default function navBar() {

    const [interacao, setInteracao] = useState(false);
    const [aparecer, setAparecer] = useState(false);

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setAparecer(true);
        }, 500);

        return ()=>{
            intervalo
        }
    }, [])


    return (
        <>
            <section className={estilo.navBar} style={{opacity: aparecer ? "1" : "0"}}>
                <div className={estilo.identificacaoLogo}>
                    <Image src={ImgLogo} width={30} height={30} alt="logotipo-espaço-hair" />
                    <Link href="#Inicio">Espaço Hair</Link>
                </div>
                <div className={estilo.guardaMenu} style={{right: interacao ?"0" : "-80vw"}}>
                    <div className={estilo.interacao}>
                        <button onClick={()=>{!interacao ? setInteracao(true) : setInteracao(false)}}>{interacao ? <Image src="./images/icons/exit.svg" width={50} height={50} /> : <Image src="./images/icons/menu.svg" width={50} height={50} />}</button>
                    </div>
                    <div className={estilo.linksDeNavegacao}>
                        <Link href="#Cabelos">Cabelos</Link>
                        <Link href="#Sobrancelhas">Sobrancelha</Link>
                        <Link href="#Unhas">Unhas</Link>
                        <Link href="#Contatos">Contatos</Link>
                    </div>
                </div>
            </section>
        </>
    )
}