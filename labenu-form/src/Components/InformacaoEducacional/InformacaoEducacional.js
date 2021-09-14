import React from "react";
import styled from "styled-components";

const InformacaoEducacionalForm = styled.div`
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

export class InformacaoEducacional extends React.Component{
    state = {
        curso: '',
        faculdade: ''
    }
    changeCurso = (event) => {
        return this.setState( {curso: event.target.value } )
    }
    changeFaculdade = (event) => {
        return this.setState( { faculdade: event.target.value } )
    }
    render(){
        return <InformacaoEducacionalForm>
            <h1>Informações escolares</h1>
            <label for='curso'>Qual curso cursou?</label>
            <input type='text' id='curso' name='curso'
                value={this.state.curso}
                onChange={this.changeCurso}>
            </input>
            <label for='faculdade'>Qual unidade de ensino?</label>
            <input type='text' id='faculdade' name='faculdade'
                value={this.state.faculdade}
                onChange={this.changeFaculdade}>
            </input>

        </InformacaoEducacionalForm>
    }
}
export default InformacaoEducacional