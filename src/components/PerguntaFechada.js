import virar from "../assets/img/seta_virar.png"

export default function PerguntaFechada(props) {

    const { abrirPergunta, perguntaAberta, abrirResposta, respostaAberta, inicio } = props

    return (
        <>
            <div onClick={abrirPergunta} className={`pergunta-fechada ${inicio ? "" : "escondido"}`}>
                <p>Pergunta 1</p>
            </div>

            <div className={`pergunta-aberta ${perguntaAberta ? "" : "escondido"}`}>
                <p>O que é JSX?</p>
                <img
                    onClick={abrirResposta}
                    src={virar}
                    alt=""
                />
            </div>

            <div className={`pergunta-aberta ${respostaAberta ? "" : "escondido"}`}>
                <p>"JSX é uma sintaxe para escrever HTML dentro do JS"</p>
                <div className="container-botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </div>
        </>
    )
}