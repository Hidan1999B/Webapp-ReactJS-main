import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
position: relative;
`
const Wrapper =  styled.div`
display: flex;
background-color: white;
margin: 10px;
height: 10px;

`
const Categories =  styled.div`
flex: 1;
display: flex;
justify-content: center;
gap: 50px;
font-size: 13px;
@media screen and (max-width: 815px) {
    font-size: 12px;
    margin-left: 10px;
    gap: 10px;
    }

`
const Span = styled.span`
cursor: pointer;

`
function BarCategories() {
return (
    <Container>

        <Wrapper>
            <Categories>

              
            <Span>Women</Span>
            <Span>Men</Span>
            <Span>Sports</Span>
            <Span>Girls</Span>
            <Span>Boys</Span>
            <Span>Toddlers</Span>
            <Span>Designers</Span>
            <Span>Accessories</Span>
            <Span>Perfumes</Span>
            </Categories>
            
        </Wrapper>

    </Container>
)
}

export default BarCategories