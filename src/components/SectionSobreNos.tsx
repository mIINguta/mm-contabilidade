import ImgSobre from '../assets/images/logo1.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';

import QuemSomos from '../pages/QuemSomos';
export default function SectionSobreNos(){

    let QuemSomosRef:any = useRef();

    return(
        <> 
        <BrowserRouter>
        <section id="sec-sobrenos" className="sec-sobrenos"> 
            <figure className="div-img-sobrenos">
                <img className="img-sobrenos" src={ImgSobre} alt="Imagem contábil ilustra"/>
            </figure> 
                <div className="div-text-sobrenos"> 
                    <h2> M & M ASSESSORIA CONTÁBIL</h2>
                        <p>A M&M Assessoria Contábil é uma empresa fundada em 2004 por Alceir Marcelo Viana Minguta, com o objetivo de oferecer serviços contábeis de qualidade para empresas de diversos segmentos. Com sede em Belford Roxo - Rio de Janeiro, a M&M possui uma equipe altamente qualificada, formada por profissionais experientes e comprometidos em entregar soluções personalizadas para cada cliente.</p>
                        <p>Com o passar dos anos, fomos nos estabelecendo no mercado e ampliando nossas cotas de colaboradores, disponibilizando uma vasta variedades de serviços para pequenos e médios empreendedores.
                        Depois de 10 anos atuando no mercado, no ano de 2015 entrava para nosso time: <span>Elizeu Moreira</span>, especialista na área fiscal e tríbutária e <span>Gustavo Minguta</span> formado em Sistemas de Informação.  Em Todos esses anos de experiência e bagagem nos tornamos referência no mercado Contábil, servindo com excelência as necessidades de nossos colaboradores, sempre com atendimento personalizado e humanizado.
                        visando dar a melhor experiencia para pequenos e médios empreendedores.
                </p> 
                        
                </div>
               
                    <Link to="/quem-somos">
                        <button className="btn-quemsomos"  onClick={()=> {
                            QuemSomosRef.current?.scrollIntoView()
                        }}                      
                        title="Saiba mais">
                            <i className="fa-solid fa-plus"></i>
                        </button> 
                    </Link>
                    
            </section>
            <section ref={QuemSomosRef}>
                <Routes>
                    <Route path="/quem-somos"  element={<QuemSomos/> }></Route>
                </Routes>
            </section> 
            </BrowserRouter>  

        </>
    )
}