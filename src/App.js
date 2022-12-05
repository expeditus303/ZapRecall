import { useState } from "react";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import cards from "./cards"
import BoasVindas from "./components/BoasVindas";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {

  // BREAK

  const [cardsFeitos, setCardsFeitos] = useState(0)
  const [cardsErrados, setCardsErrados] = useState(0)
  const [esqueceuAlgo, setEsqueceuAlgo] = useState(false)
  const [naoEsqueceuNada, setNaoEsqueceuNada] = useState(false)


  function todosCardsFeitos(a) {
    let cardsF = cardsFeitos + 1
    if (cardsF === cards.length) {
      if (a != undefined) {
        setEsqueceuAlgo(true)
      } else {
        setNaoEsqueceuNada(true)
      }
    }

  }

  function cardFeito() {
    setCardsFeitos(cardsFeitos + 1)
  }

  function filaResposta() {
    filaResposta.push()
  }

  return (
    <ScreenContainer>
      <GlobalStyle />
      <BoasVindas />
      
      <Logo />
      
      {cards.map((c) => (
        <Cards
          key={c.question}
          pergunta={c.question}
          resposta={c.answer}
          numeroCard={cards.indexOf(c) + 1}
          cardFeito={cardFeito}
          setCardsErrados={setCardsErrados}
          todosCardsFeitos={todosCardsFeitos}
          cardsErrados={cardsErrados}
        />
      ))}

      <Footer cardsFeitos={cardsFeitos} totalCards={cards.length} naoEsqueceuNada={naoEsqueceuNada} esqueceuAlgo={esqueceuAlgo}/>
    </ScreenContainer >
  );
}

export default App;

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
