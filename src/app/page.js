"use client";

import React, { useEffect } from "react"

import NavBar from "./modulos/navBar";
import Header from "./modulos/header";
import SecaoCabelos from "./modulos/secaoCabelos";
import SecaoSobrancelhas from "./modulos/secaoSobrancelhas";
import SecaoUnhas from "./modulos/secaoUnhas";
import SecaoContatos from "./modulos/secaoContatos";
import Footer from "./modulos/footer";

export default function Inicio() {

  useEffect(() => {
    const script = document.createElement("script");
    script.async
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6783865894564100";
    script.crossOrigin = "anonymous";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <SecaoCabelos />
      <hr />
      <SecaoSobrancelhas />
      <hr />
      <SecaoUnhas />
      <hr />
      <SecaoContatos />
      <hr />
      <Footer />
    </>
  )
}