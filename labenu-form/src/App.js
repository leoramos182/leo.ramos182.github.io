import './App.css';
import React from 'react';
import InformacaoPessoal from './Components/InformacaoPessoal/InformacaoPessoal';
import InformacaoEducacional from './Components/InformacaoEducacional/InformacaoEducacional';
import InformacaoSemSuperior from './Components/InformacaoSemSuperior/InformacaoSemSuperior';
import { FinalForm } from './Components/FinalForm/FinalForm';
import styled from 'styled-components';

const BotaoCentro = styled.button`
  margin: 10px auto;

`
const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
`
const DivBotoes = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
class App extends React.Component {
  state = {
    etapa: 1
  }
  renderizarEtapa = () => {
    switch(this.state.etapa){
      case 1 : return <InformacaoPessoal/>
      case 2 : return <InformacaoEducacional/>
      case 3 : return <InformacaoSemSuperior/>
      case 4 : return <FinalForm/>
      default : return <InformacaoPessoal/>
    }
  }
  testeRender = () => {
    return console.log(this.state.etapa)
  }
  irParaProximaEtapa = () => {
    if(this.state.etapa < 4){
      this.setState({etapa: this.state.etapa + 1})
    }
  }
  voltarEtapa = () => {
    return this.setState( {etapa: this.state.etapa - 1})
  }
  botaoProximaEtapa = () => {
    if(this.state.etapa < 4){
      return (
        <BotaoCentro onClick={this.irParaProximaEtapa}>Próxima etapa</BotaoCentro>
      )
    }
  }
  botaoVoltarEtapa = () => {
    if(this.state.etapa > 1 && this.state.etapa < 4){
      return(
        <BotaoCentro onClick={this.voltarEtapa}>Voltar etapa</BotaoCentro>
      )
    }
  }
  render(){
    return (
      <DivFlex>
        {this.renderizarEtapa()}
        <DivBotoes>
          {this.botaoProximaEtapa()}
          {this.botaoVoltarEtapa()}
        </DivBotoes>
      </DivFlex>
    );
  }
}

export default App;
