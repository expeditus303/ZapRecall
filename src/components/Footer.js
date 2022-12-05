import styled from "styled-components"

export default function Footer(props) {

    const { cardsFeitos, totalCards } = props

    return (
        <FooterConcluidos data-test="footer">
            <p>{cardsFeitos}/{totalCards} CONCLUÍDOS</p>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`

// .footer-concluidos > .container-botoes {
//     display: flex;
//     width: 80%;
//     justify-content: space-between;
//     margin: 20px;
//   } */
  
//   Você vai precisar trocar a cor dos botões e alguns textos!
//     VERDE = "#2FBE34"
//     AMARELO = "#FF922E"
//     VERMELHO = "#FF3030"
//     CINZA = "#333333" 