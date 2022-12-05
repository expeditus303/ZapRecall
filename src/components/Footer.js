import styled from "styled-components";
import eba from "../assets/img/party.png";
import putz from "../assets/img/sad.png";

export default function Footer(props) {
  const { cardsFeitos, totalCards, naoEsqueceuNada, esqueceuAlgo } = props;

  return (
    <FooterConcluidos data-test="footer">
      <ZerouGame naoEsqueceuNada={naoEsqueceuNada} data-test="finish-text">
        <div>
          <img src={eba} alt="" />
          <h3>Parabéns!</h3>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </ZerouGame>

      <Vacilou esqueceuAlgo={esqueceuAlgo} data-test="finish-text">
        <div>
          <img src={putz} alt="" />
          <h3>Putz...</h3>
        </div>
        <p>Ainda faltam alguns... Mas não desanime!</p>
      </Vacilou>
      <p>
        {cardsFeitos}/{totalCards} CONCLUÍDOS
      </p>
    </FooterConcluidos>
  );
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

`;

const ZerouGame = styled.div`
    display:  ${(props) => (props.naoEsqueceuNada ? "flex" : "none")};
    flex-direction: column;
    align-items: center;

  div {
    margin: 15px;
    display: flex;
  }

  img {
    margin-right: 15px;
  }

  h3 {
    font-weight: 700;
  }

  p {
    margin-bottom: 14px;
  }
`;


const Vacilou = styled.div`
    display:  ${(props) => (props.esqueceuAlgo ? "flex" : "none")};
    flex-direction: column;
    align-items: center;

  div {
    margin: 15px;
    display: flex;
  }

  img {
    margin-right: 15px;
  }

  h3 {
    font-weight: 700;
  }

  p {
    margin-bottom: 14px;
  }
`;