import { useState } from "react";
import Logo from "./components/Logo";
import PerguntaAberta from "./components/PerguntaAberta";
import PerguntaFechada from "./components/PerguntaFechada";

function App() {

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
    <div className="screen-container">
      <Logo />

      <PerguntaFechada abrirPergunta={abrirPergunta} perguntaAberta={perguntaAberta} abrirResposta={abrirResposta} respostaAberta={respostaAberta} inicio={inicio} />

      <div className="footer-concluidos"> 10
      </div>
    </div >
  );
}

export default App;
