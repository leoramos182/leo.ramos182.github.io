import React from "react";
import styled from "styled-components";

const AgradecimentoForm = styled.div`
    width: 30vw;
    height: 50vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    padding: 0 15px;
    background-image: url('https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg');
    background-repeat: no-repeat;
    @media only screen and (max-device-width: 500px){
        width: 80%;
    }
`

export class FinalForm extends React.Component{
    render(){
        return <AgradecimentoForm>
            <h1>Obrigado por participar! ❤️</h1>
        </AgradecimentoForm>
    }
}