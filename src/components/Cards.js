import { useState } from "react"
import virar from "../assets/img/seta_virar.png"
import played from "../assets/img/seta_play.png"
import naoLembrou from "../assets/img/icone_erro.png" 
import quaseNaoLembrou from "../assets/img/icone_quase.png"
import lembrou from "../assets/img/icone_certo.png"

export default function Cards(props) {

    const { pergunta, resposta, numeroCard, cardFeito } = props

    const [inicio, setInicio] = useState(true)
    const [perguntaAberta, setPerguntaAberta] = useState(false)
    const [respostaAberta, setRespostaAberta] = useState(false)
    const [play, setPlay] = useState(true)
    const [naoLembra, setNaoLembra] = useState(false)
    const [quaseNaoLembra, setQuaseNaoLembra] = useState(false)
    const [lembra, setLembra] = useState(false)

    function abrirPergunta() {
        setInicio(false)
        setPerguntaAberta(true)
    }

    function abrirResposta() {
        setPerguntaAberta(false)
        setRespostaAberta(true)
    }

    function naoLembrei() {
        setInicio(true)
        setPlay(false)
        setPerguntaAberta(false)
        setRespostaAberta(false)
        setNaoLembra(true)
        cardFeito()
    }

    function quaseNaoLembrei() {
        setInicio(true)
        setPlay(false)
        setPerguntaAberta(false)
        setRespostaAberta(false)
        setQuaseNaoLembra(true)
        cardFeito()
    }

    function lembrei() {
        setInicio(true)
        setPlay(false)
        setPerguntaAberta(false)
        setRespostaAberta(false)
        setLembra(true)
        cardFeito()
    }


    return (

        <>

            <div className={`pergunta-fechada ${inicio ? "" : "escondido"}`}>
                <p className=
                    {`${naoLembra ? "naoLembra" : ""} 
                    ${quaseNaoLembra ? "quaseNaoLembra" : ""} 
                    ${lembra ? "lembra" : ""}  `}
                >Pergunta {numeroCard}
                </p>
                <img
                    onClick={abrirPergunta}
                    src={`${play ? played : ""} ${naoLembra ? naoLembrou : ""} ${quaseNaoLembra ? quaseNaoLembrou : ""} ${lembra ? lembrou : ""}`}
                    alt="" />
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
                    <button onClick={naoLembrei}>Não lembrei</button>
                    <button onClick={quaseNaoLembrei}>Quase não lembrei</button>
                    <button onClick={lembrei}>Zap!</button>
                </div>
            </div>

        </>

    )
}