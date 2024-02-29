import React from "react"

import Head from "next/head";

import NavBar from "./modulos/navBar";
import Header from "./modulos/header";
import SecaoCabelos from "./modulos/secaoCabelos";
import SecaoSobrancelhas from "./modulos/secaoSobrancelhas";
import SecaoUnhas from "./modulos/secaoUnhas";
import SecaoContatos from "./modulos/secaoContatos";
import Footer from "./modulos/footer";

export default function Inicio() {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-6783865894564100" />
      </Head>
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