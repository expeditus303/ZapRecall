import { useState } from "react";
import virar from "../assets/img/seta_virar.png";
import played from "../assets/img/seta_play.png";
import naoLembrou from "../assets/img/icone_erro.png";
import quaseNaoLembrou from "../assets/img/icone_quase.png";
import lembrou from "../assets/img/icone_certo.png";
import styled from "styled-components";

export default function Cards(props) {
  const { pergunta, resposta, numeroCard, cardFeito } = props;

  const [inicio, setInicio] = useState(true);
  const [perguntaAberta, setPerguntaAberta] = useState(false);
  const [respostaAberta, setRespostaAberta] = useState(false);
  const [play, setPlay] = useState(true);
  const [naoLembra, setNaoLembra] = useState(false);
  const [quaseNaoLembra, setQuaseNaoLembra] = useState(false);
  const [lembra, setLembra] = useState(false);
  const [riscado, setRiscado] = useState(false);

  function abrirPergunta() {
    setInicio(false);
    setPerguntaAberta(true);
  }

  function abrirResposta() {
    setPerguntaAberta(false);
    setRespostaAberta(true);
  }

  function naoLembrei() {
    setInicio(true);
    setPlay(false);
    setPerguntaAberta(false);
    setRespostaAberta(false);
    setNaoLembra(true);
    setRiscado(true);
    cardFeito();
  }

  function quaseNaoLembrei() {
    setInicio(true);
    setPlay(false);
    setPerguntaAberta(false);
    setRespostaAberta(false);
    setQuaseNaoLembra(true);
    setRiscado(true);
    cardFeito();
  }

  function lembrei() {
    setInicio(true);
    setPlay(false);
    setPerguntaAberta(false);
    setRespostaAberta(false);
    setLembra(true);
    setRiscado(true);
    cardFeito();
  }

  return (
    <>
      <PerguntaFechadaContainer inicio={inicio} data-test="flashcard">
        <ParagrafoRiscado
          data-test="flashcard-text"
          inicio={inicio}
          naoLembra={naoLembra}
          quaseNaoLembra={quaseNaoLembra}
          lembra={lembra}
          riscado={riscado}
        >
          Pergunta {numeroCard}
        </ParagrafoRiscado>
        <img
          data-test={`${play ? "play-btn" : ""}${naoLembra ? "no-icon" : ""}${quaseNaoLembra ? "partial-icon" : ""
        }${lembra ? "zap-icon" : ""}`}
          onClick={riscado ? "" : abrirPergunta}
          src={`${play ? played : ""}${naoLembra ? naoLembrou : ""}${quaseNaoLembra ? quaseNaoLembrou : ""
            } ${lembra ? lembrou : ""}`}
          alt="play button"
        />
      </PerguntaFechadaContainer>

      <PerguntaAbertaContainer perguntaAberta={perguntaAberta}>
        <p data-test="flashcard-text">{pergunta}</p>
        <img
          data-test="turn-btn"
          onClick={abrirResposta}
          src={virar} alt="turn to answer"
        />
      </PerguntaAbertaContainer>

      <RespostaAbertaContainer respostaAberta={respostaAberta}>
        <p data-test="flashcard-text">{resposta}</p>
        <ContainerBotoes>
          <button onClick={naoLembrei} data-test="no-btn"                                                                   >Não lembrei</button>
          <button onClick={quaseNaoLembrei} data-test="partial-btn">Quase não lembrei</button>
          <button onClick={lembrei}  data-test="zap-btn">Zap!</button>
        </ContainerBotoes>
      </RespostaAbertaContainer>
    </>
  );
}

const PerguntaFechadaContainer = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => (props.inicio ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
`;

const ParagrafoRiscado = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => {
    if (props.naoLembra && props.inicio) {
      return "#FF3030";
    } else if (props.quaseNaoLembra && props.inicio) {
      return "#FF922E";
    } else if (props.lembra && props.inicio) {
      return "#2FBE34";
    } else {
      return "#333333";
    }
  }};
  text-decoration: ${(props) => (props.riscado ? "line-through" : "none")};
`;
const PerguntaAbertaContainer = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${(props) => {
    if (props.perguntaAberta) {
      return "flex";
    } else if (!props.perguntaAberta) {
      return "none";
    }
  }};
  flex-direction: column;
  justify-content: space - between;

  > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  > p {
    margin-bottom: 16px;
  }
`;

const RespostaAbertaContainer = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${(props) => {
    if (props.respostaAberta) {
      return "flex";
    } else if (!props.respostaAberta) {
      return "none";
    }
  }};
  flex-direction: column;
  justify-content: space-between;

  > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  > p {
    margin-bottom: 16px;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
}

  & :nth-child(1) {
    background: #FF3030;
    border: 1px solid #FF3030;
  }

  & :nth-child(2) {
    background-color: #FF922E;
    border: 1px solid #FF922E;
  }

  & :nth-child(3) {
    background-color: #2FBE34;
    border: 1px solid #2FBE34;
  }
`
