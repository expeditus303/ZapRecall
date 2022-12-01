import { useState } from "react";
import Logo from "./components/Logo";
import PerguntaAberta from "./components/PerguntaAberta";
import Cards from "./components/Cards";
import Footer from "./Footer";
import cards from "./cards"

function App() {

  const [cardsFeitos, setCardsFeitos] = useState(0)

  function cardFeito() {
    setCardsFeitos(cardFeito + 1)
  }


  return (
    <div className="screen-container">
      <Logo />

      {cards.map((c) => (
        <Cards
          key={c.question}
          pergunta={c.question}
          resposta={c.answer}
          numeroCard={cards.indexOf(c) + 1}
        />
      ))}

      <Footer cardsFeitos={cardsFeitos} totalCards={cards.length} />
    </div >
  );
}

export default App;
