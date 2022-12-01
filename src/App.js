import { useState } from "react";
import Logo from "./components/Logo";
import PerguntaAberta from "./components/PerguntaAberta";
import Cards from "./components/Cards";
import Footer from "./Footer";
import cards from "./cards"

function App() {

  const [inicio, setInicio] = useState(true)
  const [perguntaAberta, setPerguntaAberta] = useState(false)
  const [respostaAberta, setRespostaAberta] = useState(false)
  const [cardsFeitos, setCardsFeitos] = useState(0)


  return (
    <div className="screen-container">
      <Logo />

      {cards.map((c) => (
        <Cards
          key={c.question}
          perguntaAberta={perguntaAberta}
          respostaAberta={respostaAberta}
          inicio={inicio}
          pergunta={c.question}
          resposta={c.answer}
        />
      ))}

      <Footer cardsFeitos={cardsFeitos} totalCards={cards.length} />
    </div >
  );
}

export default App;
