import React from "react";


export default function CardServico(props:any){
    return(
    <>
        <div className="card-servico">
            <figure><img src={props.icone} alt="" /></figure>
                <figcaption>{props.tipo}</figcaption>
                <p>{props.descricao}</p>
        </div>
    </>
    )
}