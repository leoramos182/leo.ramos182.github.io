import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link}  from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserDetails from './UserDetails';

const DivButton = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  button{
    width: 100%;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
  }
`
const DivInput = styled.div`
display: flex;
flex-direction: column;
input {
    margin-bottom: 10px;
    width: 192px;
  }
`
const DivList = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`
const DivName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: bold;
`
const ButtonRed = styled.button`
  background-color: red;
  font-weight: bold;
  color: white;
`
const UserName = styled.p`
  margin: 0;
`
class App extends React.Component {
  state = {
    userName: "",
    userId: "",
    inputEmailPlaceholder: "User Email",
    inputNamePlaceholder: "User Name",
    buttonAddTitle: 'Add user',
    buttonDeleteTitle: 'Delete user',
    appTitle: 'Labenusers',
    userNameList: [],
    showUserDetails: false
  }
  componentDidMount = () => {
    this.getAllUsers()
  }
  handleEmailUser = (event) => {
    this.setState({emailUser: event.target.value})
  }
  handleNameUser = (event) => {
    this.setState({nameUser: event.target.value})
  }
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {headers :{Authorization : "leo-andrade-maryam"} })
    .then( (response) => {
      // const nameList = response.data.map( (user) => {
      //   return user
      // })
      this.setState({userNameList: response.data})
      console.log(response.data)
    })
    .catch( (error) => {
      console.log(error)
    })
  }
  addUser = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = { name: this.state.nameUser, email: this.state.emailUser }
    axios.post(url, body, {headers: { Authorization : 'leo-andrade-maryam'}})
      .then( (response) => {
        alert('New user added')
        this.getAllUsers()
      })
      .catch( (error) => {
        if(error.response.status === 400){
          alert('Missing user information')
        }
        else if( error.response.status === 500){
          alert('Email already in use')
        }
      })
  }
  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    if(window.confirm('You want to delete this user ?')){
      axios.delete(url, {headers: {Authorization: 'leo-andrade-maryam'}})
      .then( (response) => {
      this.getAllUsers()

    })
    .catch( (error) => {console.log(error)})
    }
  }
  handleChangePage = (event) => {
    this.setState({userId: event.id})
    this.setState({userName: event.name})
    this.setState({showUserDetails: !this.state.showUserDetails})
  }
  render(){
    const nameList = [...this.state.userNameList].map( (userName) => {
      return <DivName key={userName.id} userName = {userName.name} userId={userName.id}>
                <UserName onClick={ () => this.handleChangePage(userName)}>{userName.name}</UserName>
                <ButtonRed onClick={() => this.deleteUser(userName.id) }>{this.state.buttonDeleteTitle}</ButtonRed>
              </DivName>
    })
    return (
        <div className="App">
          <h1>{this.state.appTitle}</h1>
          <DivInput>
            <input id='emailUser' 
              value={this.state.emailUser}
              placeholder={this.state.inputEmailPlaceholder}
              onChange={this.handleEmailUser}/>
            <input id='nomeUser'
              value={this.state.nameUser}
              placeholder={this.state.inputNamePlaceholder}
              onChange={this.handleNameUser}/>
            </DivInput>
          <DivButton>
            <button onClick={this.addUser}>{this.state.buttonAddTitle}</button>
          </DivButton>
          <DivList>
            {nameList}
          </DivList>
          {this.state.showUserDetails ? <UserDetails userName={this.state.userName} userId={this.state.userId}/> : null}
        </div>
    );
  }
}

export default App;
