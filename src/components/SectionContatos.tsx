import React from "react"

import ImgMarcelo from "../assets/images/marcelo-contato.png";
import ImgElizeu from "../assets/images/elizeu-contato.png";
import CardContato from "./CardContato";

export default function SectionContatos(){
    return (
        <> 

        <section id="sec-contatos" className="sec-contatos"> 
            
                <div className="cards">
                <h2> CONTATOS</h2>
                    <CardContato
                    img = {ImgMarcelo}
                    nome = "Marcelo Minguta"
                    telefone = "(21) 97982-0004"
                    email = "marcelomingutacontabilidade@gmail.com"
                    />
                    <CardContato
                    img = {ImgElizeu}
                    nome = "Elizeu Moreira"
                    telefone = "(21) 97021-8912"
                    email = "elizeucontabil@hotmail.com"
                    instagram = "elizeu_ems"
                    />
                </div>  

                <div className="div-horarios">
                    <h2>ATENDIMENTO</h2> 
                    <span>De Segunda à Sexta -Feira
                    <br/>9:00h às 11:30h
                    <br/>13:30h às 16:00h</span>
                </div>

                <div className="horarios"></div>
    </section>
        </>
    )
}



