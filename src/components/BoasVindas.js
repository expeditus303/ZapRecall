import { useState } from "react"
import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function BoasVindas() {

    const [iniciar, setIniciar] = useState(false)

    function iniciarRecall() {
        setIniciar(true)
    }

    return (

        <Boasvindas iniciar={iniciar}>

            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
            <p onClick={iniciarRecall}>Iniciar Recall!</p>

        </Boasvindas>

    )
}

const Boasvindas = styled.div`
        background-color: #FB6B6B; 
        z-index: 2;
        position: fixed;
        left: 0;
        top: 0;
        display: ${(props) => props.iniciar ? "none" : "flex"};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        min-height: 100vh;

    img {
        width: 136px;
        margin-bottom: 13px;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
        margin-bottom: 30px;
    }

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        width: 300px;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #D70900;
    }


`