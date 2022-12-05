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
  const [filaRespostas, setFilaRespostas] = useState([])
  const [filaCerta, setFilaCerta] = useState(false)
  const [filaTalvez, setFilaTalvez] = useState(false)
  const [filaErrada, setFilaErrada] = useState(false)



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
        />
      ))}

      <Footer cardsFeitos={cardsFeitos} totalCards={cards.length} />
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
