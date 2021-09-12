import React from "react";
import styled from "styled-components";
import doublecheck from '../../../src/doublecheck.svg'

const Mensagens = styled.div`
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 5px auto;
    background-color: #DCDCDC;
    background-image: url('https://whatsfacil.com/blog/wp-content/uploads/2018/03/b29ddf01acd53e07e44d63efcc5c54a4-whatsapp-background-screensaver.jpg');
    background-repeat: no-repeat;
    @media only screen and (max-device-width: 500px){
        width: 99vw;
        margin: 0;
        height: 50vh;
    }
`

const EnviarMensagem = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
    @media only screen and (max-device-width: 500px){
        width: 99%;
    }
`
const InputNome = styled.input`
    width: 80px;
`
const InputMensagem = styled.input`
    width: 150px;
`
const CardMensagem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 3px;
    margin: 10px;
    border-radius: 0.3em;
    line-height: 1.1;
    box-shadow: 0px 2px 2px 0px rgb(0,0,10);
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-wrap: break-word;
    &:after{
        position: absolute;
        top: 0px;
        content: '';
	    border: 6px solid transparent;
        right: ${ props => {
            if(props.tipo === 'eu'){
                return '-4px'
            }
        }};
        left: ${ props => {
            if(props.tipo === 'outro'){
                return '-4px'
            }
        }};
        border-top-color: ${ props => {
        if(props.tipo === 'eu'){
            return "#DDF7C8"
        }
        else if(props.tipo = 'outro'){
            return "white"
        }
    }};
    }
    background-color: ${ props => {
        if(props.tipo === 'eu'){
            return "#DDF7C8"
        }
        else if(props.tipo = 'outro'){
            return "#ffffff"
        }
    }};
    align-self: ${ props => {
        if(props.tipo === 'eu'){
            return 'flex-end'
        }
        else if(props.tipo ==='outro'){
            return 'flex-start'
        }
    }
    };
`
const MensagemDoCard = styled.div`
    @media only screen and (max-device-width: 500px){
        font-size: 30px;
    }
`
const ButtonEnviar = styled.button`
    @media only screen and (max-device-width: 500px){
        width: 100%;
    }
`
const NomeBold = styled.div`
    padding-right: 10px;
    font-size: 0.8em;
    font-weight: 600;
    color: #9AAC8C;
`
export const IconVisualizado = styled.img`
    display: flex;
    float: right;
    margin-bottom: 3px;
    height: 0.5em;
    right: 4px;
    bottom: 4px;


`
export class SecaoEnviarMensagem extends React.Component{
    state = {
        nome: '',
        mensagem: '',
        posts: []
    }
    enviarMensagem = () => {
        const novoPost = [...this.state.posts]
        const novaPessoa = {nome: this.state.nome, mensagem: this.state.mensagem}
        novoPost.push(novaPessoa)
        this.setState({posts: novoPost})
    }
    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }
    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }
    render(){
        const componentes = this.state.posts.map( (cadaPost) => {
            const nome = cadaPost.nome.toLowerCase()
            if(nome === 'eu'){
                return <CardMensagem tipo='eu'>
                <MensagemDoCard>{cadaPost.mensagem}</MensagemDoCard>
                <div><IconVisualizado src={doublecheck}></IconVisualizado></div>
            </CardMensagem>
            }
            else {
                return <CardMensagem tipo='outro'>
                    <NomeBold>{cadaPost.nome}</NomeBold>
                    <MensagemDoCard>{cadaPost.mensagem}</MensagemDoCard>
                    <div><IconVisualizado src={doublecheck}></IconVisualizado></div>
                </CardMensagem>
            }
        } )
        return <div>
            <Mensagens>
                {componentes}
            </Mensagens>
            <EnviarMensagem>
                <div>
                    <InputNome placeholder='Name' value={this.state.nome} onChange={this.onChangeNome}></InputNome>
                    <InputMensagem placeholder='Mensagem' value={this.state.mensagem} onChange={this.onChangeMensagem}></InputMensagem>
                </div>
                <div>
                    <ButtonEnviar onClick={this.enviarMensagem}>Enviar</ButtonEnviar>
                </div>
            </EnviarMensagem>
        </div>
    }
}

export default SecaoEnviarMensagem