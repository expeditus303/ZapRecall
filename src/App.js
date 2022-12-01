import logo from "./assets/img/logo.png"

function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </div>
      <div className="pergunta-aberta">
        <p>"JSX é uma sintaxe para escrever HTML dentro do JS"</p>
        <div className="container-botoes">
          <button>Não lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </div>
      </div>

      <div className="pergunta-fechada">
        <p>2</p>
      </div>

      <div className="pergunta-fechada">
        <p>3</p>
      </div>

      <div className="pergunta-fechada">
        <p>4</p>
      </div>

      <div className="footer-concluidos"> 10
      </div>
    </div >
  );
}

export default App;
