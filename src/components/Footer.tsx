import LogoFooter from "../assets/images/logo-footer.png"


export default function Footer(){
    return (
        <>
        <footer>
        <div className="div-footer">
        <figure className="div-logo-footer">
            <img className="img-sobrenos" src={LogoFooter} alt="Imagem contábil ilustra"/>
        </figure>
        <ul className="footer-list">
            <dl>HOME</dl>
            <li><a href="#sec-sobrenos"> QUEM SOMOS</a></li>
            <li><a href="#sec-servicos"> SERVIÇOS</a></li> 
            <li><a href="#sec-localizacao"> LOCALIZAÇÃO</a></li>
        </ul>   
        <ul className="footer-list">
            <dl>SERVIÇOS</dl>
            <li><a id="le" >LEGALIZAÇÃO DE EMPRESAS</a></li>
            <li><a id="dp" > DEPARTAMENTO PESSOAL</a></li> 
            <li><a id="fisc"> FISCAL</a></li>
            <li><a id="ctb"> CONTÁBIL</a></li>
            <li><a id="sm" > SOLUÇÕES PARA MEI</a></li>
            <li><a id="cd"> CERTIFICADO DIGITAL</a></li>
        </ul>
        <ul className="footer-list">
            <dl>ESPAÇO DO CLIENTE</dl>
            <li><a href="#sec-contatos"> CONTATO</a></li>
            <li><a href="https://cofre.sieg.com/arquivos" target="_blank"> PORTAL DO CLIENTE</a></li>   
        </ul>
        <ul className="list-social-media">
            <li><a href="https://linktr.ee/mmservadm" target="_blank"><i className="fa-solid fa-link"></i></a></li>
            <li><a href="https://www.instagram.com/mmservadm/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
            </ul> 
    </div> 
        <h5>COPYRIGHT © 2023 | M&M ASSESSORIA CONTÁBIL | TODOS OS DIREITOS RESERVADOS</h5>
    </footer>
        </>
    )
}