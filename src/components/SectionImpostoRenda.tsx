import ImgImposto from '../assets/images/imposto-renda.jpg'

export default function SectionImpostoRenda(){
    return(
        <>
            <section className="section-imposto-renda">
                <div className='apresentacao-imposto'>
                    <figure>
                        <img src={ImgImposto} alt="Imagem Imposto de Renda" />
                    </figure>
                    <div className="info">
                    <h2>Veja a lista de documentos necessários para declarar o imposto de renda</h2>
                    <p>Descubra quais comprovantes e informes são necessários para ficar em dia com a Receita Federal este ano.</p>
                    <p>A declaração terá início em 15 de março e se estenderá até às 23h59 (horário de Brasília) do dia 31 de maio de 2024. Este período é crucial para que todos os contribuintes cumpram suas obrigações fiscais perante o Leão.</p>
                    </div>
                    </div>
                        <h3>Documentos necessários para realizar o imposto de renda</h3>
                    <ol>
                        <dt></dt>
                        <li><span>Documentos pessoais:</span> RG, CPF, comprovante de residência e dados bancários são essenciais para identificação e fornecem as informações necessárias para o correto preenchimento da declaração.</li>
                        <li><span>Informe de Rendimentos:</span> a empresa deve fornecer o documento que detalha os rendimentos e descontos ao longo do ano anterior.</li>
                        <li><span>Documentos pessoais dos dependentes:</span> CPF é obrigatório para cada dependente.</li>
                        <li><span>Informe de Rendimentos financeiros e de aplicações:</span> fornecidos pelo banco, são cruciais para declarar os ganhos provenientes de investimentos.</li>
                        <li><span>Comprovantes de despesas médicas</span>: devem incluir nome, endereço, CPF ou CNPJ do prestador, data e assinatura do médico, caso não seja uma nota fiscal.</li>
                        <li><span>Comprovantes de despesas com ensino:</span> documentos que atestam gastos com educação, um importante item dedutível.</li>
                        <li><span>Extrato de Previdência Privada:</span> detalha os valores investidos e rendimentos relativos à previdência privada.</li>
                        <li><span>Documentação do plano de saúde:</span> comprovante dos pagamentos do plano de saúde, fundamental para deduções.</li>
                        <li><span>Documentação de imóveis e veículos:</span> incluindo aqueles financiados, para declarar propriedades e veículos.</li>
                        <li><span>Recibos de pagamento ou recebimento de aluguel:</span> caso você seja locador ou locatário, tenha os recibos em mãos.</li>
                        <li><span>Recibos de doações</span>: documentação importante para quem realizou ou recebeu doações ao longo do ano.</li>
                        <li><span>Contrato Social das empresas das quais é sóc</span>io: para quem possui participação em empresas, o contrato social é necessário.</li>
                        <li><span>Documentação de consórcios contemplados ou não:</span> detalhes sobre consórcios, incluindo se foram contemplados ou não.</li>
                        <li><span>Extrato do Carnê-Leão (caso autônomo):</span> essencial para autônomos, detalhando os rendimentos ao longo do ano.</li>
                    </ol>

                    <div className="contatos">
                        <h3>Use as opções abaixo para entrar em contato e enviar sua documentação!</h3>
                        <ul>
                            <li><a href="https://api.whatsapp.com/send?phone=552120825152" target="__blank" title='Botão Whatsapp'><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="mailto:mmcontabilidade20@gmail.com" target='__blank' title='Botão E-mail'><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.transfernow.net/pt" target='__blank' title='Botão Site'><i className="fa-solid fa-globe"></i></a></li>
                        </ul>
                        <p><i className="fa-solid fa-envelope"/> mmcontabilidade@gmail.com</p>
                        <p><i className="fa-brands fa-whatsapp"/> 21 2082-5152</p>
                    </div>
            </section>

        
        </>
    )
}