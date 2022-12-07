import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 60px;
   
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;


`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
  padding:  10px 0;
  }

`
const Language = styled.span`
font-size: 15px;
cursor: pointer;
@media screen and (max-width: 768px) {
  display: none;
  }
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`
const Input = styled.input`
border: none;
@media screen and (max-width: 768px) {
  width: 100px;
  }
`
const Logo = styled.h1`
font-weight: bold;
@media screen and (max-width: 368px) {
  font-size: 24px;
  }
`
const Center = styled.div`
flex: 1;
text-align: center;
font-size: 15px;
@media screen and (max-width: 768px) {
  font-size: 10px;
  padding-right: 15px;
  }
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 368px) {
  justify-content: center;
  }

`

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  margin-left: 25px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 10px;
    }
`
const DownLeft = styled.div`
position: absolute;
background-color: red;
`
function Navbar() {
    return (
        <Container>
            <Wrapper>
              <Left>
                <Language>EN </Language>
                <SearchContainer>
                    <Input/>
                    <Search style ={{fontSize: 13}}/>
                </SearchContainer>

              </Left>
              <Center><Logo>LIYA.</Logo></Center>
              <Right>
            <MenuItems>SIGN IN</MenuItems>
            <MenuItems>REGISTER</MenuItems>


              <Badge badgeContent={0} color ="primary">
                <ShoppingCartOutlined/>
              </Badge>
              </Right>
              <DownLeft>
          

              </DownLeft>

            </Wrapper>
        </Container>
    )
}



export default Navbar