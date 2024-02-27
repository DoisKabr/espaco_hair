import React from "react"

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