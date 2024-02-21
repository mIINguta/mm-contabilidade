import React, { useState } from "react";

export default function CardContato(props:any){
    let HasTel: string;

    HasTel = props.telefone;

    

    return (
        <>      
            <div className="card">
                <img className="img-contato" src={props.img} alt={props.alt}/> 
                <div className="nome">
                    <h4>{props.nome}</h4>
                    <h4>Contador</h4>
                </div>
                <div className="div-info">
                    <div className="but-des">
                        <div className="buttons">
                        <ul>
                            <li>
                                <a href={`https://api.whatsapp.com/send?phone=55${(HasTel.replace(/[^a-z0-9]/gi,''))}`} target="_blank">
                                <i className="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li> 
                                <a href={`mailto:${props.email}`}>
                                <i className="fa-solid fa-envelope"></i></a>
                                
                            </li>
                            <li>
                                <a className={`props.instagram ? {HasInsta = "true"}  : {HasInsta = "false"}`} href={`https://www.instagram.com/${props.instagram}/`} target="_blank">
                                <i className="fa-brands fa-instagram" ></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                        <div className="info">
                            <div>
                                <h3>Whatsapp</h3>
                                <span>Tire suas dúvidas comigo.</span>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <span>Entre em contato comigo por email.</span>
                            </div>
                       
                            <div>
                                <h3>Instagram</h3>
                                <span>Acesse meu perfil no instagram.</span>
                            </div>
                    </div>
                    </div>
                    </div>
                </div>
        </>
    )
}

