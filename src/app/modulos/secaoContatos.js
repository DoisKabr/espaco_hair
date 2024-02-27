/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import estilo from "../estilos/secaoGenericas.module.css";

import face from "../../../public/images/social/face.png";
import insta from "../../../public/images/social/insta.png";
import whats from "../../../public/images/social/whats.png";

export default function secaoContatos() {


    return (
        <>
            <section className={estilo.secoesGenericas} id="Contatos">
                <section className={estilo.sectionSocial}>
                    <h3 className={estilo.texto}>Links das nossas redes sociais e contatos.</h3>
                    <div className={estilo.containerDivSocial}>
                        <a href="#" className={estilo.divSocial}>
                            <Image src={face} width={100} alt="social-facebook-espaço-hair" />
                            <h3>Facebook</h3>
                        </a>
                        <a href="#" className={estilo.divSocial}>
                            <Image src={insta} width={100} alt="social-instagram-espaço-hair" />
                            <h3>Instagram</h3>
                        </a>
                        <a href="https://wa.me/5511942164529?text=Olá%20vim%20pelo%20site!" className={estilo.divSocial}>
                            <Image src={whats} width={100} alt="social-whatsapp-espaço-hair" />
                            <h3>Whatsapp</h3>
                        </a>
                    </div>
                </section>
            </section>
        </>
    )
}