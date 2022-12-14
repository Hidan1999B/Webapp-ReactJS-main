import React from "react";
import styled from 'styled-components';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Container = styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Title = styled.h1`


`
const Description = styled.div`
font-size: 1
font-weight: 300;
margin-bottom: 20px;

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgray
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;

`
const Button = styled.button`
flex: 1;
border-none;
background-color:  teal;
color: white;

&:hover {
    cursor: pointer;
  }
`
function Newsletter() {
return (
<Container>
<Title>Newsletter</Title>
    <Description>Get your monthly updates here!</Description>
    <InputContainer>
    <Input placeholder = "Email"/>
    <Button>
        <SendRoundedIcon/>
    </Button>
    </InputContainer>
</Container>

)
}
export default Newsletter
