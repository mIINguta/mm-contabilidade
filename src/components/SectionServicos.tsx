import {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";

import CardServico from "./CardServico";
import ILegEmpresa from "../assets/icones/leg-emp.svg";
import IDepPessoal from "../assets/icones/departamento-pessoal.svg";
import IFiscal from "../assets/icones/fiscal.svg";
import IContabil from "../assets/icones/contabil.svg";
import IMei from "../assets/icones/sol-mei.svg";
import ICertDig from "../assets/icones/cert-dig.svg";




export default function SectionServicos(){

    let carousel:any = useRef();
    let [width, setWidth]:any = useState(0);

    useEffect(()=> {
        console.log(carousel.current?.scrollWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    return (
        <>
        <section id="sec-servicos" className="sec-servicos">
        <h2>SERVIÇOS</h2>
        <motion.div className="carousel" ref={carousel}>
            <motion.ul
            drag ="x"
            dragConstraints={{right: 0, left: -width}}
            animate={{x:0}}
            transition={{duration: 0.8}}
            >
            <li>
           <CardServico 
                    icone = {ILegEmpresa}
                    tipo = "Legalização de Empresas"
                    descricao = "A formalização de uma empresa é o processo de obtenção de autorização legal para realizar negócios dentro da jurisdição escolhida."/></li>
            <li>
                <CardServico 
                    icone = {IDepPessoal}
                    tipo = "Departamento Pessoal"
                    descricao = "O Departamento Pessoal é a área dentro do setor de Recursos Humanos responsável pela administração de funcionários."/></li>
           <li> 
            <CardServico
                    icone = {IFiscal}
                    tipo = "Fiscal"
                    descricao = "O setor fiscal é o departamento responsável por fazer a escrituração das movimentações fiscais, analisar impostos e garantir que todas as obrigações acessórias sejam cumpridas."/>
            </li>
           
           <li><CardServico
                    icone = {IContabil}
                    tipo = "Contábil"
                    descricao = " Controla e registra as movimentações financeiras de uma empresa. É através da contabilidade que são identificados e corrigidos fenômenos que colocam em risco o patrimônio empresarial."/>
            </li>
            <li>
                <CardServico
                    icone = {IMei}
                    tipo = "Soluções para Mei"
                    descricao = "O processo de abertura é feito 100% pela internet. Para se manter, é necessário pagar apenas um valor fixo por mês, que é referente aos tributos da atividade que você exerce."/>
            </li>
            <li>
                <CardServico
                    icone = {ICertDig}
                    tipo = "Certificado Digital"
                    descricao = "O certificado digital serve para assinar documentos digitalmente e ter acesso a sistemas eletrônicos restritos, principalmente de órgãos públicos na internet."/>
            </li>
 </motion.ul>
 </motion.div>
    <span className="legenda-carousel">Arraste para ver os serviços</span>
    <a href="">Saiba Mais</a>
    </section>
    </>
    )
}