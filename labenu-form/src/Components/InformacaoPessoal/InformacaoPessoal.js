import React from "react";
import styled from "styled-components";

const InformacaoPessoalForm = styled.div`
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
const FormSpace = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`
const ButtonForm = styled.button`
    width: 50%;
    margin: 20px auto;
`
export class InformacaoPessoal extends React.Component{
    state = {
        nome: '',
        idade: 0,
        email: '',
        escolaridade: ''
    }
    changeNome = (event) => {
        return ( this.setState( {nome: event.target.value} ) ) 
    }
    changeIdade = (event) => {
        if(this.state.idade > 99 && this.state.idade < 18){}
        else{
            return ( this.setState( {idade: event.target.value} ) )
            
        }
    }
    changeEmail = (event) => {
        return ( this.setState( {email: event.target.value} ) )
    }
    changeEscolaridade = (event) => {
        return ( this.setState( {escolaridade: event.target.value} ) )
    }
    render(){
        return <InformacaoPessoalForm>
            <h1>Informações Pessoais</h1>
            <FormSpace>
                <label for='nome'>Nome</label>
                <input type='text' id='nome' name='nome'
                    value={this.state.nome}
                    onChange={this.changeNome}>
                </input>
            </FormSpace>
            <FormSpace>
                <label for='idade'>Idade</label>
                <input type='number' min='18' max='99' id='idade' name='idade' 
                    value={this.state.idade}
                    onChange={this.changeIdade}>
                </input>
            </FormSpace>
            <FormSpace>
                <label for='email'>Email</label>
                <input type='text' id='email' name='email'
                    value={this.state.email}
                    onChange={this.changeEmail}></input>
            </FormSpace>
            <FormSpace>
                <label for='escolaridade'>Escolaridade</label>
                <select id='escolaridade' name='escolaridade'
                    onChange={this.changeEscolaridade}>
                    <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                    <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                    <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                    <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                </select>
            </FormSpace>
        </InformacaoPessoalForm>
    }
}
export default InformacaoPessoal