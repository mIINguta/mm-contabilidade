import { useState } from "react";

import LogoMenu from '../assets/images/logo-menu-azul.png'


export default function MenuNavegacao(){
    const [headerClass, setHeaderClass] = useState(false);
    return(
        <>
        <figure className={`${headerClass ? 'desativo': 'ativo'}`} >
            <img src={LogoMenu} alt="Logo MM Contabilidade" />
        </figure>
         <ul className={`second-list ${`${headerClass ? 'ativo': 'desativo'}`}`}>
                <li><a href="#sec-sobrenos">QUEM SOMOS</a></li>
                <li><a href="#sec-servicos">SERVIÇOS</a></li> 
                <li><a href="#sec-contatos">CONTATO</a></li>
                <li><a href="#sec-localizacao">LOCALIZAÇÃO</a></li>
                <li><a href="https://cofre.sieg.com/arquivos" target="_blank">PORTAL DO CLIENTE</a></li> 
                <li><a href="https://www.instagram.com/mmservadm/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li> 
                <li><a href="https://linktr.ee/mmservadm" target="_blank"><i className="fa-solid fa-link"></i></a></li> 
        </ul>  
        <button onClick={() => setHeaderClass(!headerClass)} className={`${headerClass ? 'ativo': 'desativo'}`}><i className="fa-solid fa-x"></i></button> 

        <button onClick={() => setHeaderClass(!headerClass)} className={`${headerClass ? 'desativo': 'ativo'}`} ><i className="fa-solid fa-bars"></i></button>
        </>
    )
}