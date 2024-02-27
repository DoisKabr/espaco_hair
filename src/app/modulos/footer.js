/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";

import Image from "next/image";

import imgLogo from "../../../public/images/logo.png";
import face from "../../../public/images/social/face.png";
import insta from "../../../public/images/social/insta.png";
import whats from "../../../public/images/social/whats.png";

import Link from "next/link";

export default function footer() {

    return (
        <>
            <section className="footer">
                <div className="imageFooter">
                    <Image src={imgLogo} width={100} />
                    <h2>Espaço Hair</h2>
                </div>
                <div className="linksFooter">
                    <h2>Links:</h2>
                    <Link href="#Cabelos">Cabelos</Link>
                    <Link href="#Sobrancelhas">Sobrancelha</Link>
                    <Link href="#Unhas">Unhas</Link>
                    <Link href="#Contatos">Contatos</Link>
                </div>
                <div className="contatos">
                    <h2>Contatos:</h2>
                    <a href="#" className="">
                        <Image src={face} width={100} alt="social-facebook-espaço-hair" />
                        <h3>Facebook</h3>
                    </a>
                    <a href="#" className="">
                        <Image src={insta} width={100} alt="social-instagram-espaço-hair" />
                        <h3>Instagram</h3>
                    </a>
                    <a href="https://wa.me/5511942164529?text=Olá%20vim%20pelo%20site!" className="">
                        <Image src={whats} width={100} alt="social-whatsapp-espaço-hair" />
                        <h3>Whatsapp</h3>
                    </a>
                </div>
            </section>
        </>
    )
}