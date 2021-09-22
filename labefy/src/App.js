import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserDetails from './UserDetails';

const DivButton = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  .search{
    background-color: orange;
    color: black;
    font-weight: bold;
    :hover{
      background-color: #ffc14d;
    }
  }
  button{
    width: 100%;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
    :hover{
      background-color: #6918b4;
      cursor: pointer;
    }
  }
`
const DivInput = styled.div`
display: flex;
flex-direction: column;
input {
  font-size: 20px;
    margin-bottom: 10px;
    width: 192px;
    border-style: dashed;
    :focus{
      outline: none;
    }
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
  font-weight: bold;
  margin-top: 8px;
  padding-left: 3px;
  box-shadow: 0.5px 0.5px 2px black;
  p{
    :hover{
    cursor: pointer;
    }
  }
  button{
    border: none;
    :hover{
      background-color: #cc0000;
      cursor: pointer;
    }
  }
`
const ButtonRed = styled.button`
  background-color: red;
  font-weight: bold;
  color: white;
`
const UserName = styled.p`
  margin: 0;
`
const LabenusersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LabenuTitle = styled.div`
  width: 200px;
`
class App extends React.Component {
  state = {
    userName: "",
    userEmail: "",
    userId: "",
    searchUser: '',
    inputEmailPlaceholder: "User Email",
    inputNamePlaceholder: "User Name",
    inputSearchPlaceholder: 'Search user',
    buttonAddTitle: 'Add user',
    buttonDeleteTitle: 'Delete user',
    buttonSearchTitle: 'Search user',
    appTitle: 'Labenusers',
    userNameList: [],
    searchedUserNameList: [],
    showUserDetails: false,
    messageError400: 'Missing user information',
    messageError404: 'There is an user with this name or this email',
    messageError500: 'Email already in use',
    listOfUsersTitle: 'List of users',
    searchedUserTitle: 'Searched user'
  }
  componentDidMount = () => {
    this.getAllUsers()
  }
  handleEmailUser = (event) => {
    this.setState({userEmail: event.target.value})
  }
  handleNameUser = (event) => {
    this.setState({userName: event.target.value})
  }
  handleSearchUser = (event) => {
    this.setState({searchUser: event.target.value})
  }
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {headers :{Authorization : "leo-andrade-maryam"} })
    .then( (response) => {
      this.setState({userNameList: response.data})
    })
    .catch( (error) => {})
  }
  addUser = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = { name: this.state.userName, email: this.state.userEmail }
    axios.post(url, body, {headers: { Authorization : 'leo-andrade-maryam'}})
      .then( (response) => {
        alert('New user added')
        this.setState({userName: ''})
        this.setState({userEmail: ''})
        this.getAllUsers()
      })
      .catch( (error) => {
        if(error.response.status === 400){
          alert(this.state.messageError400)
        }
        else if( error.response.status === 500){
          alert(this.state.messageError500)
        }
        else if(error.response.status === 404){
          alert(this.state.messageError404)
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
    .catch( (error) => {
      if(error.response.status === 400){
        alert('User not found')
      }
    })
    }
  }
  searchUser = (username) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${username}&email=`
    axios.get(url, {headers: {Authorization: 'leo-andrade-maryam'}})
    .then((response) => {
      this.setState({searchedUserNameList: response.data})
    })
    .catch((error) => {alert('erro teste')})
  }
  handleChangePage = (event) => {
    this.setState({userId: event.id})
    this.setState({userName: event.name})
    this.setState({showUserDetails: !this.state.showUserDetails})
  }
  render(){
    const nameList = [...this.state.userNameList].map( (userName) => {
      return <DivName key={userName.id}>
        <UserName onClick={ () => this.handleChangePage(userName)}>{userName.name}</UserName>
        <ButtonRed onClick={() => this.deleteUser(userName.id) }>{this.state.buttonDeleteTitle}</ButtonRed>
      </DivName>
    })
    const SearchedName = [...this.state.searchedUserNameList].map( (userName) => {
        return <div key={userName.id}>
          <h3>{this.state.searchedUserTitle}</h3>
          <DivName>
          <UserName onClick={ () => this.handleChangePage(userName)}>{userName.name}</UserName>
          <ButtonRed onClick={() => this.deleteUser(userName.id) }>{this.state.buttonDeleteTitle}</ButtonRed>
          </DivName>
        </div>
    })
    return (
        <LabenusersContainer>
          <LabenuTitle>
            <h1>{this.state.appTitle}</h1>
          </LabenuTitle>
          <DivInput>
            <input id='emailUser' 
              value={this.state.userEmail}
              placeholder={this.state.inputEmailPlaceholder}
              onChange={this.handleEmailUser}/>
            <input id='nomeUser'
              value={this.state.userName}
              placeholder={this.state.inputNamePlaceholder}
              onChange={this.handleNameUser}/>
            </DivInput>
          <DivButton>
            <button onClick={this.addUser}>{this.state.buttonAddTitle}</button>
          </DivButton>
          <DivInput>
            <input id='searchUser' 
              value={this.state.searchUser}
              placeholder={this.state.inputSearchPlaceholder}
              onChange={this.handleSearchUser}/>
            <DivButton>
              <button className='search' onClick={() => this.searchUser(this.state.searchUser)}>{this.state.buttonSearchTitle}</button>
            </DivButton>
          </DivInput>
            
          <DivList>
            {nameList}
            {SearchedName}
          </DivList>
          {this.state.showUserDetails ? <UserDetails userName={this.state.userName} userId={this.state.userId}/> : null}
        </LabenusersContainer>
    );
  }
}

export default App;
