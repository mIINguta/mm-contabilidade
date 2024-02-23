import { motion } from "framer-motion";
import {useState, useRef, useEffect} from "react";

import CardContato from "../components/CardContato";
import ImgGustavo from"../assets/images/gustavo-quemsomos-card.png"
import ImgElizeu from"../assets/images/elizeu-quemsomos-card.png"
import ImgRosana from"../assets/images/rosana-quemsomos-card.png"
import ImgAlmir from"../assets/images/almir-quemsomos-card.png"
import ImgMarcelo from"../assets/images/marcelo-quemsomos-card.png"

export default function QuemSomos({quemSomosRef}:any){
    let carousel:any = useRef();
    let [width, setWidth]:any = useState(0);

    useEffect(()=> {
        console.log(carousel.current?.scrollWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);


    return(
        <>
            <section ref={quemSomosRef} className="sec-quem-somos">
                <div className="desc">
                    <h2>NOSSA EQUIPE</h2>
                    <p>A equipe de contabilidade é composta por profissionais qualificados e experientes que trabalham em conjunto para oferecer serviços contábeis abrangentes e de qualidade para a sua empresa.</p>   

                    <a href="#equipe"><i className="fa-solid fa-circle-arrow-down" aria-hidden="true"></i></a>         
                    </div>

                    <figure>
                        <img src="src\assets\images\nossaequipe-quemsomos.jpeg" alt="" />
                    </figure>
            </section>
            <section id= "equipe" className="equipe">
                    <motion.div className="carousel" ref={carousel}>
                        <motion.ul
                        drag ="x"
                        dragConstraints={{right: 0, left: -width}}
                        animate={{x:0}}
                        transition={{duration: 0.8}}
                        >
                        <li>
                            <CardContato
                                img ={ImgGustavo}
                                nome= "Gustavo Minguta"
                                funcao = "Suporte"
                                quemsomos = {true}
                                telefone = "21965718120"
                                email= "gustavo.minguta@gmail.com"
                                instagram = "gustavominguta"
                                descricao = "Formado em Sistemas de Informação pela Unigranrio, é encarregado por toda parte tecnológica do escritório."
                                >
                            </CardContato>
                        </li>
                        <li>
                            <CardContato
                                img ={ImgAlmir}
                                nome= "Almir Ferreira"
                                funcao = "Dep. Pessoal"
                                quemsomos = {true}
                                telefone = "5521964018625"
                                email= "almirfcarvalho8@gmail.com"
                                descricao = "Representa o departamento pessoal, responsável pela administração de funcionários e com toda a burocracia correspondente aos mesmos."
                                >
                            </CardContato>
                        </li>
                        <li>
                            <CardContato
                                img ={ImgRosana}
                                nome= "Rosana Santos"
                                funcao = "Secretária"
                                quemsomos = {true}
                                telefone = "5521970475355"
                                email= ""
                                descricao = "Secretária freelancer do escritório, responsável pela recepção dos clientes e entrega de documentos físicos."
                                >
                            </CardContato>
                        </li>
                        <li>
                            <CardContato
                                img ={ImgMarcelo}
                                nome= "Marcelo Minguta"
                                funcao = "Contador e CEO"
                                quemsomos = {true}
                                telefone = "5521979820004"
                                email= "marcelomingutacontabilidade@gmail.com"
                                descricao = "Fundador e CEO da empresa, técnico de contabilidade a mais de 19 anos. Responsável pela contabilidade societária."
                                >
                            </CardContato>
                        </li>
                        <li>
                            <CardContato
                                img ={ImgElizeu}
                                nome= "Elizeu Moreira"
                                funcao = "Contador e CEO"
                                quemsomos = {true}
                                telefone = "(21) 97021-8912"
                                email= "elizeucontabil@hotmail.com"
                                instagram = "elizeu_ems"
                                descricao = "CEO, especialista na área fiscal e tributária, graduado pela faculdade TREVISAN. Caracteriza-se pelo atendimento humanizado e personalizado de acordo com a demanda."
                                >
                            </CardContato>
                        </li>
                        </motion.ul>
                            <p className="aviso"> Arraste para ver</p>
                        </motion.div>
                        
                        
            </section>
           
        </>
    )
    }
