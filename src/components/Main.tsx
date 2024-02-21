import React from "react";
import SectionApresentacao from "./SectionApresentacao";
import SectionSobreNos from "./SectionSobreNos";
import SectionServicos from "./SectionServicos";
import SectionContatos from "./SectionContatos";
import SectionLocalizacao from "./SectionLocalizacao";
import Footer from "./Footer";

export default function Main(){
    return(
        <>
        <SectionApresentacao/>
        <SectionSobreNos/>
        <SectionServicos/>
        <SectionContatos/>
        <SectionLocalizacao/>
        <Footer/>
        </>
    )
}