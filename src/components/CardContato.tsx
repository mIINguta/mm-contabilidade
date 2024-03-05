
export default function CardContato(props:any){
    let HasTel: string;
    let QuemSomos:boolean;
    let HasEmail:string;
    let HasInsta: string;

    HasTel = props.telefone;
    QuemSomos = props.quemsomos;
    HasEmail = props.email;
    HasInsta = props.instagram;

    

    return (
        <>      
            <div className="card">
                <figure>
                    <img className="img-contato" src={props.img} alt={props.alt}/>
                </figure>
                
                <div className="nome">
                    <h4>{props.nome}</h4>
                    <h4>{`${props.funcao ? props.funcao : 'Contador'}`} </h4>
                </div>
                <div className="div-info">
                    <div className="but-des">
                        <div className="buttons">
                        <ul>
                            <li>
                                <a className={`${HasTel === undefined ? 'desativo': 'ativo'}`}href={`https://api.whatsapp.com/send?phone=55${(HasTel.replace(/[^a-z0-9]/gi,''))}`} target="_blank">
                                <i className="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li> 
                                <a className={`${HasEmail === undefined ? 'desativo': 'ativo'}`} href={`mailto:${props.email}`}>
                                <i className="fa-solid fa-envelope"></i></a>
                                
                            </li>
                            <li>
                                <a className={`${HasInsta === undefined ? 'desativo': 'ativo'}`} href={`https://www.instagram.com/${props.instagram}/`} target="_blank">
                                <i className="fa-brands fa-instagram" ></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                        <div className={`info  ${!QuemSomos ? 'ativo': 'desativo'}`}>
                            <div className={`${HasTel === undefined ? 'desativo': 'ativo'}`}>
                                <h3>Whatsapp</h3>
                                <span>Tire suas dúvidas comigo.</span>
                            </div>
                            <div className={`${HasEmail === undefined ? 'desativo': 'ativo'}`}>
                                <h3>Email</h3>
                                <span>Entre em contato comigo por email.</span>
                            </div>
                       
                            <div className={`${HasInsta === undefined ? 'desativo': 'ativo'}`}>
                                <h3>Instagram</h3>
                                <span>Acesse meu perfil no instagram.</span>
                            </div>
                            
                    </div>
                    <div className={`info-desc-quemsomos ${QuemSomos ? 'ativo': 'desativo'}`}>
                                <p>{props.descricao}</p>

                            </div>
                    </div>
                    </div>
                </div>
        </>
    )
}

