import React from "react";
import styled from "styled-components";
const InformacaoSemSuperiorForm = styled.div`
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

export class InformacaoSemSuperior extends React.Component{
    state = {
        motivo: '',
        curso: ''
    }
    changeMotivo = (event) => {
        return this.setState( { motivo: event.target.value } )
    }
    changeCurso = (event) => {
        return this.setState( { curso: event.target.value } )
    }
    teste = () => {
        return (
            console.log(this.state.motivo),
            console.log(this.state.curso)
        )
    }
    render(){
        return <InformacaoSemSuperiorForm>
            <h1>Informações escolares</h1>
            <label for='motivo'>Por que você não terminou um curso de graduação?</label>
            <input input='text' id='motivo' name='motivo'
                value={this.state.motivo}
                onChange={this.changeMotivo}>
            </input>
            <label for='curso-complementar'>Você fez algum curso complementar?</label>
            <select id='curso-complementar' name='curso-complementar' onChange={this.changeCurso}>
                <option value='Curso técnico'>Curso técnico</option>
                <option value='Cursos de inglês'>Cursos de inglês</option>
                <option value='Não fiz curso complementar'>Não fiz curso complementar</option>
            </select>
        </InformacaoSemSuperiorForm>
    }
}
export default InformacaoSemSuperior