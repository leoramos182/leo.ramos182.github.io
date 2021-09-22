import React from "react";
import styled from "styled-components";

const DivUserDetails = styled.div`
    
    p{
        margin: 0;
    }
`
const DivInformation = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    p{
        margin-left: 8px;
        color: red;
        font-size: 25px;
    }
`
export class UserDetails extends React.Component{
    
    render(){
        return <DivUserDetails>
            <h1>User Details</h1>
            <DivInformation>
                <label htmlFor='userName'>User Name:</label>
                <p id='userName'>{this.props.userName}</p>
            </DivInformation>
            <DivInformation>
                <label htmlFor='userId'>User Id:</label>
                <p id='userId'>{this.props.userId}</p>
            </DivInformation>
        </DivUserDetails>
    }
}
export default UserDetails