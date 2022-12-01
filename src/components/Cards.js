import { useState } from "react"
import virar from "../assets/img/seta_virar.png"

export default function Cards(props) {

    const { pergunta, resposta } = props

    const [inicio, setInicio] = useState(true)
    const [perguntaAberta, setPerguntaAberta] = useState(false)
    const [respostaAberta, setRespostaAberta] = useState(false)

    function abrirPergunta() {
        setInicio(false)
        setPerguntaAberta(true)
      }
    
      function abrirResposta() {
        setPerguntaAberta(false)
        setRespostaAberta(true)
      }
    

    return (

        <>

            <div onClick={abrirPergunta} className={`pergunta-fechada ${inicio ? "" : "escondido"}`}>
                <p>Pergunta 1</p>
            </div>

            <div className={`pergunta-aberta ${perguntaAberta ? "" : "escondido"}`}>
                <p>{pergunta}</p>
                <img
                    onClick={abrirResposta}
                    src={virar}
                    alt="" />
            </div>

            <div className={`pergunta-aberta ${respostaAberta ? "" : "escondido"}`}>
                <p>{resposta}</p>
                <div className="container-botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </div>

        </>

    )
}